import "../helpers/evidencias";
import { test, expect } from "../fixtures/test-fixtures";

test.describe("Regresión del catálogo y detalle de productos", () => {
  test("@regression muestra resultados al buscar MacBook", async ({
    homePage,
    searchResultsPage
  }) => {
    await homePage.open();
    await homePage.searchProduct("MacBook");

    await expect(homePage.page).toHaveURL(/route=product\/search/);
    await expect(searchResultsPage.heading).toBeVisible();
    await expect(searchResultsPage.heading).toContainText(/MacBook/i);
    expect(await searchResultsPage.getProductCount()).toBeGreaterThan(0);
  });

  test("@regression muestra nombre e imagen en las tarjetas de productos", async ({
    homePage
  }) => {
    await homePage.open();
    await homePage.searchProduct("MacBook");

    const firstProduct = homePage.page.locator("#content .product-thumb").first();

    await expect(firstProduct).toBeVisible();
    await expect(firstProduct.locator("h4 a")).toContainText(/MacBook/i);
    await expect(firstProduct.locator("img").first()).toBeVisible();
  });

  test("@regression permite abrir el detalle de un producto", async ({
    homePage
  }) => {
    await homePage.open();
    await homePage.searchProduct("MacBook");

    const productLink = homePage.page
      .locator("#content .product-thumb a[href*='route=product/product']")
      .first();

    await expect(productLink).toBeVisible();
    await productLink.click();

    await expect(homePage.page).toHaveURL(/route=product\/product/);
    await expect(homePage.page.locator("#content h1")).toContainText(/MacBook/i);
  });

  test("@regression muestra descripción y botón de compra en el detalle", async ({
    homePage
  }) => {
    await homePage.open();
    await homePage.searchProduct("MacBook");

    await homePage.page
      .locator("#content .product-thumb a[href*='route=product/product']")
      .first()
      .click();

    await expect(homePage.page).toHaveURL(/route=product\/product/);
    await expect(homePage.page.locator("#content h1")).toContainText(/MacBook/i);
    await expect(homePage.page.locator("#content #tab-description")).toBeAttached();
    await expect(homePage.page.locator("#button-cart")).toBeVisible();
    await expect(homePage.page.locator("#button-cart")).toBeEnabled();
  });
});
