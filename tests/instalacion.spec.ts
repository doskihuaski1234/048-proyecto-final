import "../helpers/evidencias";
import { test, expect } from "../fixtures/test-fixtures";

test("@regression abre OpenCart y muestra su página principal", async ({
  homePage
}) => {
  await homePage.open();

  await expect(homePage.page).toHaveTitle("Your Store");
  await expect(homePage.logo).toBeVisible();
  await expect(homePage.searchInput).toBeVisible();
});
