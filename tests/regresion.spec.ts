import "../helpers/evidencias";
import { test, expect } from "../fixtures/test-fixtures";

test.describe("Pruebas de regresión de OpenCart", () => {
  test("@regression permite agregar un producto al carrito", async ({
    homePage,
    cartPage
  }) => {
    await homePage.open();
    await homePage.searchProduct("MacBook");

    await cartPage.addProductFromSearchResults("MacBook");

    await expect(cartPage.successAlert).toBeVisible();
    await expect(cartPage.successAlert).toContainText(
      /added MacBook to your shopping cart/i
    );
    await expect(cartPage.cartTotal).toContainText(/1 item\(s\)/);
  });
});
