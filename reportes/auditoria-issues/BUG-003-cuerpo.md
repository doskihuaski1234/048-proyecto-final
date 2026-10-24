## Descripcion
axe-core (v4.14) reporta una violacion de impacto **critical** en la pagina principal: la regla `button-name` (Buttons must have discernible text).

## Pasos para reproducir
1. Abrir http://opencart.abstracta.us
2. Ejecutar `npx playwright test tests/accesibilidad.spec.ts --project=chromium` o inspeccionar con axe DevTools.

## Resultado esperado
Todos los botones tienen un nombre accesible (texto, aria-label o title no vacio).

## Resultado obtenido
Botones que solo contienen un icono, sin texto ni aria-label:
- Boton de busqueda del encabezado (`.btn-default`, icono fa-search)
- Botones "Add to Wish List" (fa-heart) y "Compare this Product" (fa-exchange) de cada producto de la portada (ids 30, 40, 42 y 43)

## Impacto
Los lectores de pantalla anuncian estos controles solo como "boton", sin indicar su funcion.

## Evidencia
Adjunto `axe-violaciones` en el reporte HTML y reportes/verificacion-tests-nuevos_*.txt.