import "../helpers/evidencias";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Pruebas adicionales de regresion del buscador", () => {
  test("busca un producto aunque el texto tenga espacios alrededor", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.searchProduct("  MacBook  ");

    await expect(page).toHaveURL(/route=product\/search/);
    await expect(page.locator("#content")).toContainText(/MacBook/i);
  });
});
