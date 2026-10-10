import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Pruebas funcionales de OpenCart", () => {
  test("muestra las categorías de navegación", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.logo).toBeVisible();
    await expect(homePage.categoryLinks.first()).toBeVisible();
    await expect(homePage.categoryLinks).not.toHaveCount(0);
  });

  test("permite buscar un producto existente", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.searchProduct("MacBook");

    await expect(page).toHaveURL(/route=product\/search/);
    await expect(page.locator("#content")).toContainText(/MacBook/i);
  });

  test("no muestra productos para una búsqueda inexistente", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.searchProduct("ProductoInexistenteXYZ987");

    await expect(page).toHaveURL(/route=product\/search/);
    await expect(homePage.productCards).toHaveCount(0);
  });
});
