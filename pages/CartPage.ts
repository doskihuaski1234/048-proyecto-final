import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly successAlert: Locator;
  readonly cartTotal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successAlert = page.locator(".alert-success");
    this.cartTotal = page.locator("#cart-total");
  }

  async addProductFromSearchResults(productName: string): Promise<void> {
    const product = this.page
      .locator("#content .product-thumb")
      .filter({ hasText: productName })
      .first();

    await product.waitFor({ state: "visible" });

    const addButton = product.locator('button[onclick*="cart.add"]');
    await addButton.click();
  }
}
