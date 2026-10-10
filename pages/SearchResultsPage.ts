import { type Locator, type Page } from "@playwright/test";

export class SearchResultsPage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly content: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.content = page.locator("#content");
    this.productCards = page.locator("#content .product-thumb");
    this.heading = page.locator("#content h1");
  }

  async getProductCount(): Promise<number> {
    return this.productCards.count();
  }

  async containsProduct(productName: string): Promise<boolean> {
    return this.content.getByText(productName, { exact: false }).count()
      .then((count) => count > 0);
  }
}
