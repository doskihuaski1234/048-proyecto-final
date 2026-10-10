# Informe de regresión: búsqueda con espacios

- Fecha de ejecución: 2026-10-10 05:37:43
- Aplicación: OpenCart
- Herramienta: Playwright
- Navegadores: Chromium, Firefox y WebKit

## Resultado

| Navegador | Resultado |
|---|---|
| Chromium | APROBADO |
| Firefox | APROBADO |
| WebKit | APROBADO |

- Pruebas ejecutadas: 3
- Pruebas aprobadas: 3
- Pruebas fallidas: 0
- Porcentaje de aprobación: 100%

## Objetivo

Verificar que la búsqueda de MacBook funcione cuando el texto contiene espacios al inicio y al final.

## Validaciones

1. Abrir la página de OpenCart.
2. Introducir el término "  MacBook  ".
3. Ejecutar la búsqueda.
4. Comprobar que se navega a la página de resultados.
5. Confirmar que los resultados contienen MacBook.

## Evidencias

- `evidencias/capturas/chromium/busca-un-producto-aunque-el-texto-tenga-espacios-alrededor-passed.png`
- `evidencias/capturas/firefox/busca-un-producto-aunque-el-texto-tenga-espacios-alrededor-passed.png`
- `evidencias/capturas/webkit/busca-un-producto-aunque-el-texto-tenga-espacios-alrededor-passed.png`

## Incidencias

No se observaron fallos en esta ejecución.
