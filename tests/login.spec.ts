import { test, expect } from "../fixtures/login-fixtures";

test.describe("Inicio de sesión en OpenCart", () => {
  test("@regression rechaza credenciales inválidas", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login("usuario.inexistente@example.com", "ClaveIncorrecta123");
    await expect(loginPage.errorAlert).toContainText("No match");
  });

  test("@regression permite iniciar sesión con credenciales válidas", async ({ sesionIniciada }) => {
    await expect(sesionIniciada.page).toHaveURL(/route=account\/account/);
  });
});