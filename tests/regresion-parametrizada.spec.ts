import { expect } from "@playwright/test";
import { test } from "../fixtures/test-fixtures";
import { SearchResultsPage } from "../pages/SearchResultsPage";

const productos: string[] = ["MacBook", "iPhone", "iPod Classic"];

test.describe("Búsqueda parametrizada de productos", () => {
  for (const producto of productos) {
    test(`@regression encuentra el producto ${producto}`, async ({ homePage, page }) => {
      await homePage.open();
      await homePage.searchProduct(producto);
      const resultados = new SearchResultsPage(page);
      await expect(
        resultados.productCards.filter({ hasText: producto }).first()
      ).toBeVisible();
    });
  }
});