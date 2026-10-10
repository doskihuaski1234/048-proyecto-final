import "../helpers/evidencias";
import { test, expect } from "../fixtures/test-fixtures";

test.describe("Pruebas adicionales de regresión del buscador", () => {
  test("@regression busca un producto aunque el texto tenga espacios alrededor", async ({
    homePage,
    searchResultsPage
  }) => {
    await homePage.open();
    await homePage.searchProduct("  MacBook  ");

    await expect(homePage.page).toHaveURL(/route=product\/search/);
    await expect(searchResultsPage.content).toContainText(/MacBook/i);
  });
});
