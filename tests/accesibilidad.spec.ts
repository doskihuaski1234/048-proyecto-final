import AxeBuilder from "@axe-core/playwright";
import { expect } from "@playwright/test";
import { test } from "../fixtures/test-fixtures";

test.describe("Accesibilidad con axe-core", () => {
  test("@a11y la pagina principal no tiene violaciones criticas", async ({ homePage, page }, testInfo) => {
    // Defecto conocido del sitio (BUG-003). Si se corrige, este test avisara para quitar test.fail.
    test.fail(true, "BUG-003: botones solo con icono sin nombre accesible (button-name)");
    testInfo.annotations.push({ type: "issue", description: "https://github.com/doskihuaski1234/048-proyecto-final/issues/3" });

    await homePage.open();
    const resultado = await new AxeBuilder({ page }).analyze();

    await testInfo.attach("axe-violaciones", {
      body: JSON.stringify(resultado.violations, null, 2),
      contentType: "application/json"
    });

    const criticas = resultado.violations.filter((v) => v.impact === "critical");
    expect(criticas).toEqual([]);
  });
});