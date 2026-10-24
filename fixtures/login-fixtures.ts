import { test as base } from "./test-fixtures";
import { LoginPage } from "../pages/LoginPage";

type Credenciales = { email: string; password: string };

type LoginFixtures = {
  loginPage: LoginPage;
  credenciales: Credenciales;
  sesionIniciada: LoginPage;
};

export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  credenciales: async ({}, use) => {
    await use({
      email: process.env.TEST_EMAIL ?? "",
      password: process.env.TEST_PASSWORD ?? ""
    });
  },

  sesionIniciada: async ({ loginPage, credenciales }, use) => {
    base.skip(
      !credenciales.email || !credenciales.password,
      "Define las variables TEST_EMAIL y TEST_PASSWORD para usar este fixture."
    );
    await loginPage.open();
    await loginPage.login(credenciales.email, credenciales.password);
    await use(loginPage);
  }
});

export { expect } from "@playwright/test";