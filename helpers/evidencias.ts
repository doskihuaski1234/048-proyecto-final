import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

test.afterEach(async ({ page, browserName }, testInfo) => {
  if (page.isClosed()) {
    return;
  }

  const evidenceDirectory = path.resolve(
    process.cwd(),
    "evidencias",
    "capturas",
    browserName
  );

  fs.mkdirSync(evidenceDirectory, { recursive: true });

  const safeTitle = testInfo.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);

  const fileName = `${safeTitle}-${testInfo.status}.png`;
  const screenshotPath = path.join(evidenceDirectory, fileName);

  try {
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      animations: "disabled",
      timeout: 15000
    });

    await testInfo.attach("captura-final", {
      path: screenshotPath,
      contentType: "image/png"
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : String(error);

    await testInfo.attach("error-captura", {
      body: Buffer.from(message, "utf-8"),
      contentType: "text/plain"
    });
  }
});
