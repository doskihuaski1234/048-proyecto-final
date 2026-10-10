import "../helpers/evidencias";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Pruebas de regresion de OpenCart", () => {
  test("permite agregar un producto al carrito", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.searchProduct("MacBook");

    const producto = page
      .locator("#content .product-thumb")
      .filter({ hasText: "MacBook" })
      .first();

    await expect(producto).toBeVisible();

    const botonAgregar = producto.locator(
      'button[onclick*="cart.add"]'
    );

    await expect(botonAgregar).toBeVisible();
    await botonAgregar.click();

    const mensajeExito = page.locator(".alert-success");

    await expect(mensajeExito).toBeVisible();
    await expect(mensajeExito).toContainText(
      /added MacBook to your shopping cart/i
    );

    await expect(page.locator("#cart-total")).toContainText(
      /1 item\(s\)/
    );
  });
});
