import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Pruebas smoke de OpenCart", () => {
  test("@smoke muestra la pagina principal de OpenCart", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(page).toHaveTitle("Your Store");
    await expect(homePage.logo).toBeVisible();
  });

  test("@smoke muestra el buscador habilitado", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.searchInput).toBeEnabled();
    await expect(homePage.searchButton).toBeVisible();
    await expect(homePage.searchButton).toBeEnabled();
  });

  test("@smoke muestra enlaces de categorias", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.categoryLinks.first()).toBeVisible();
    expect(await homePage.categoryLinks.count()).toBeGreaterThan(0);
  });

  test("@smoke muestra productos en el catalogo", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await expect(homePage.productCards.first()).toBeVisible();
    expect(await homePage.productCards.count()).toBeGreaterThan(0);
  });

  test("@smoke permite escribir una busqueda", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();

    await homePage.searchInput.fill("MacBook");

    await expect(homePage.searchInput).toHaveValue("MacBook");
  });
});
