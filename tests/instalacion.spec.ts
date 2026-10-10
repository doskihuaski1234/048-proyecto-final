import "../helpers/evidencias";
import { test, expect } from "@playwright/test";

test("Playwright abre el navegador y ejecuta una prueba", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example Domain/);
});
