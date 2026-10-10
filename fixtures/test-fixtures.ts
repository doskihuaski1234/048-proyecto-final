import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { CartPage } from "../pages/CartPage";

type ProjectFixtures = {
  homePage: HomePage;
  searchResultsPage: SearchResultsPage;
  cartPage: CartPage;
};

export const test = base.extend<ProjectFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  }
});

export { expect };
