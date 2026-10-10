# Auditoría de requisitos del proyecto QA

Fecha de actualización: 2026-10-10
Repositorio: https://github.com/doskihuaski1234/048-proyecto-final
Rama prevista: main

## Resultados automatizados comprobados

- Comando: `npx playwright test --workers=1`
- Resultado de la última ejecución: 45 pruebas aprobadas, 0 fallidas.
- Navegadores ejecutados: Chromium, Firefox y WebKit.
- Casos distintos: 15, ejecutados en tres proyectos de navegador.
- Pruebas etiquetadas `@smoke`: 5 casos distintos.
- Pruebas etiquetadas `@regression`: 10 casos distintos.
- Archivos de especificación: 6.
- Page Objects disponibles: HomePage, SearchResultsPage y CartPage.
- Archivo de fixtures reutilizables: `fixtures/test-fixtures.ts`.
- Capturas encontradas en `evidencias/capturas`: 66.
- TypeScript: `npx tsc --noEmit` finalizó sin errores.
- Formato: `git diff --check` no detectó errores de espacios en la última revisión; Git mostró advertencias de conversión LF/CRLF.

## Requisitos que siguen pendientes

- Ejecutar y registrar los 23 casos manuales propuestos; siguen pendientes.
- Documentar defectos reales reproducidos y crear GitHub Issues si corresponde.
- Reproducir y documentar una prueba realmente inestable con corridas consecutivas; análisis pendiente.
- Preparar el informe formal en Word y PDF de al menos 15 páginas.
- Completar los datos de integrantes, variante asignada y requisitos especiales del grupo, si aplican.
- Revisar que el reporte HTML y las evidencias correspondan a la ejecución que se entrega.

## Alcance de esta auditoría

Esta auditoría refleja la ejecución automatizada más reciente comunicada el 2026-10-10. No certifica los requisitos manuales pendientes ni sustituye el informe formal de entrega.
