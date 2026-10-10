import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly categoryLinks: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator("#logo");
    this.searchInput = page.locator("#search input[name='search']");
    this.searchButton = page.locator("#search button");
    this.categoryLinks = page.locator("#menu .nav > li > a");
    this.productCards = page.locator("#content .product-thumb");
  }

  async open(): Promise<void> {
    await this.page.goto("/", { waitUntil: "domcontentloaded" });
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async searchProduct(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}
