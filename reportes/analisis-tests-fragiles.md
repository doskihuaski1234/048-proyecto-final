# Analisis de pruebas fragiles

Fecha de la medicion: 24/10/2026 09:56

## 1. Prueba inestable identificada

- **Pruebas afectadas:** `funcional.spec.ts` -> "permite buscar un producto existente" y "muestra las categorias de navegacion".
- **Navegador:** Firefox (Chromium y WebKit no presentaron estos fallos en las corridas de estabilidad).
- **Sintoma:** fallos intermitentes con `Test timeout of 30000ms exceeded` y `Tearing down "context" exceeded the test timeout of 30000ms`.
- **Evidencia:** `reportes/estabilidad-ejecucion-2.txt` (1 fallo), `reportes/estabilidad-ejecucion-3.txt` (2 fallos), capturas, trazas y videos en `evidencias/fallos-firefox/`.

## 2. Causa probable

El sitio bajo prueba es remoto y se consulta por HTTP. Los fallos son timeouts y no aserciones incorrectas: la pagina o el cierre del contexto tardan mas que el limite de 30 s. Firefox es mas lento al cargar y al cerrar contexto con trazas y video activos. Esta es una hipotesis respaldada por los logs, no una causa demostrada; no se midio la latencia del servidor.

## 3. Correccion aplicada

En `playwright.config.ts`: `timeout: 60000`, `expect.timeout: 10000`, `use.actionTimeout: 15000` y `use.navigationTimeout: 45000`. No se agregaron esperas fijas (`waitForTimeout`).

## 4. Verificacion (Firefox, `funcional.spec.ts` x10, 1 worker)

| Momento | Pasaron | Fallaron | Flaky | Evidencia |
|---|---|---|---|---|
| Antes de la correccion | 30 | 0 | 0 | `reportes\estabilidad-antes_20261024_094951.txt` |
| Despues de la correccion | 30 | 0 | 0 | `reportes\estabilidad-despues_20261024_094951.txt` |

## 5. Conclusion

- La intermitencia es real pero esporadica: 3 fallos en 45 ejecuciones en las corridas de estabilidad previas, todos en Firefox y todos por timeout.
- En la medicion previa a la correccion (30 ejecuciones de `funcional.spec.ts` en Firefox, 1 worker) **no se reprodujo ningun fallo**. Tras aplicar la correccion tambien pasaron 30 de 30.
- Por lo tanto, **esta medicion no permite demostrar que la correccion elimino el problema**: no hubo fallos que eliminar. La correccion es preventiva y ampliar los limites de tiempo es una medida razonable ante la latencia de un sitio remoto, pero su efectividad no esta probada estadisticamente.
- Limitacion: la causa (latencia del sitio remoto y lentitud de Firefox con trazas y video activos) es una hipotesis respaldada por los logs, no una causa medida.
- Siguiente paso recomendado: repetir la medicion con mas repeticiones y con varios workers en paralelo para intentar reproducir el fallo, y vigilar las corridas de GitHub Actions.
## Caso 2: busqueda parametrizada inestable en WebKit

- **Pruebas afectadas:** `regresion-parametrizada.spec.ts` (iPhone, iPod Classic y MacBook).
- **Navegador:** WebKit, 4 workers en paralelo.
- **Sintoma:** `expect(await containsProduct(...)).toBeTruthy()` recibio `false`.
- **Causa probable (hipotesis):** la comprobacion lee la pagina una sola vez y no reintenta; si WebKit aun no renderizo los resultados, devuelve `false`.
- **Correccion:** `await expect(productCards.filter({ hasText }).first()).toBeVisible()`, que reintenta hasta el timeout de `expect`.

| Momento | Pasaron | Fallaron | Evidencia |
|---|---|---|---|
| Antes (WebKit x10, 4 workers) | 12 | 18 | `reportes/webkit-antes_20261024_100223.txt` |
| Despues (WebKit x10, 4 workers) | 30 | 0 | `reportes\webkit-despues_20261024_100849.txt` |

**Conclusion:** La falla se reprodujo antes de la correccion (18 fallos en 30 ejecuciones) y desaparecio despues (30 de 30 pasaron). La evidencia respalda la correccion.
