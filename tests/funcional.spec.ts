import "../helpers/evidencias";
import { test, expect } from "../fixtures/test-fixtures";

test.describe("Pruebas funcionales de OpenCart", () => {
  test("@regression muestra las categorías de navegación", async ({ homePage }) => {
    await homePage.open();

    await expect(homePage.logo).toBeVisible();
    await expect(homePage.categoryLinks.first()).toBeVisible();
    await expect(homePage.categoryLinks).not.toHaveCount(0);
  });

  test("@regression permite buscar un producto existente", async ({
    homePage,
    searchResultsPage
  }) => {
    await homePage.open();
    await homePage.searchProduct("MacBook");

    await expect(homePage.page).toHaveURL(/route=product\/search/);
    await expect(searchResultsPage.content).toContainText(/MacBook/i);
  });

  test("@regression no muestra productos para una búsqueda inexistente", async ({
    homePage,
    searchResultsPage
  }) => {
    await homePage.open();
    await homePage.searchProduct("ProductoInexistenteXYZ987");

    await expect(homePage.page).toHaveURL(/route=product\/search/);
    await expect(searchResultsPage.productCards).toHaveCount(0);
  });
});
