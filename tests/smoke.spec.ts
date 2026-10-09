import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("@smoke muestra la pagina principal de OpenCart", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await expect(page).toHaveTitle("Your Store");
  await expect(homePage.logo).toBeVisible();
});
