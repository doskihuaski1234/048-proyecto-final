import "../helpers/evidencias";
import { test, expect } from "../fixtures/test-fixtures";

test.describe("Pruebas smoke de OpenCart", () => {
  test("@smoke muestra la página principal de OpenCart", async ({
    homePage
  }) => {
    await homePage.open();

    await expect(homePage.page).toHaveTitle("Your Store");
    await expect(homePage.logo).toBeVisible();
  });

  test("@smoke muestra el buscador habilitado", async ({
    homePage
  }) => {
    await homePage.open();

    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.searchInput).toBeEnabled();
    await expect(homePage.searchButton).toBeVisible();
    await expect(homePage.searchButton).toBeEnabled();
  });

  test("@smoke muestra enlaces de categorías", async ({
    homePage
  }) => {
    await homePage.open();

    await expect(homePage.categoryLinks.first()).toBeVisible();
    expect(await homePage.categoryLinks.count()).toBeGreaterThan(0);
  });

  test("@smoke muestra productos en el catálogo", async ({
    homePage
  }) => {
    await homePage.open();

    await expect(homePage.productCards.first()).toBeVisible();
    expect(await homePage.productCards.count()).toBeGreaterThan(0);
  });

  test("@smoke permite escribir una búsqueda", async ({
    homePage
  }) => {
    await homePage.open();

    await homePage.searchInput.fill("MacBook");

    await expect(homePage.searchInput).toHaveValue("MacBook");
  });
});
