# Registro de defectos reales

Este documento registra únicamente defectos funcionales reproducidos y documentados. Los fallos de ejecución de las pruebas automatizadas se documentan por separado como incidencias de automatización, salvo que se confirme un defecto en la aplicación.

## Ambiente de prueba

- Aplicación: OpenCart de demostración.
- URL: http://opencart.abstracta.us
- Sistema operativo: Windows; versión exacta pendiente de documentar.
- Navegador y versión: pendientes de confirmar para cada reproducción.
- Repositorio: https://github.com/doskihuaski1234/048-proyecto-final

## Defecto DR-001 — Búsqueda sin resultados muestra mensaje del carrito vacío

- ID de seguimiento: BUG-001.
- Fecha de registro: 23/10/2026.
- Funcionalidad: búsqueda de productos.
- Caso de prueba origen: CP-MAN-08.
- Tipo: Manual.
- Severidad: pendiente de evaluar.
- Prioridad: pendiente de evaluar.
- Estado de GitHub: pendiente de verificar.
- Issue: https://github.com/doskihuaski1234/048-proyecto-final/issues/1

**Pasos para reproducir**
1. Abrir la tienda OpenCart de demostración.
2. Buscar un término que no coincida con ningún producto.
3. Observar el mensaje presentado en los resultados.

**Resultado esperado:** mostrar un mensaje apropiado que indique que no se encontraron productos para la búsqueda.

**Resultado obtenido:** se muestra el mensaje `Your shopping cart is empty!`, que corresponde al carrito y no a los resultados de búsqueda.

**Evidencia**
- `evidencias/manuales/CP-MAN-08.png`
- `evidencias/manuales/CP-MAN-08-repeticion.png`
- Documento: `reportes/ejecucion-manual/BUG-001-busqueda-sin-resultados.docx`

**Verificación:** el registro local identifica el GitHub Issue #1. Falta consultar su estado actual y confirmar que coincida con el estado indicado en este documento.

## Defecto DR-002 — El carrito marca como no disponible un producto que figura In Stock

- ID de seguimiento: BUG-002.
- Fecha de registro: 23/10/2026.
- Funcionalidad: detalle del producto y carrito de compras.
- Caso de prueba origen: CP-MAN-10.
- Tipo: Manual.
- Severidad: pendiente de evaluar.
- Prioridad: pendiente de evaluar.
- Estado de GitHub: pendiente de verificar.
- Issue: https://github.com/doskihuaski1234/048-proyecto-final/issues/2

**Pasos para reproducir**
1. Abrir la tienda OpenCart de demostración.
2. Abrir el producto utilizado en CP-MAN-10 y comprobar que aparece como `In Stock`.
3. Agregar el producto al carrito.
4. Revisar el estado o mensaje de disponibilidad en el carrito.

**Resultado esperado:** que la disponibilidad mostrada en el carrito sea coherente con la disponibilidad del producto y permita continuar con el flujo cuando corresponda.

**Resultado obtenido:** el detalle del producto indica `In Stock`, pero el carrito muestra un aviso de producto no disponible.

**Evidencia**
- `evidencias/manuales/CP-MAN-10-agregado.png`
- `evidencias/manuales/CP-MAN-10-repeticion.png`
- `evidencias/manuales/CP-MAN-10.png`
- Documento: `reportes/ejecucion-manual/BUG-002-disponibilidad-carrito.docx`

**Verificación:** el registro local identifica el GitHub Issue #2. Falta consultar su estado actual y confirmar que coincida con el estado indicado en este documento.

## Resumen

| ID local | Issue | Resultado de la reproducción | Estado de seguimiento |
|---|---|---|---|
| DR-001 / BUG-001 | #1 | Mensaje incorrecto al buscar sin resultados | Pendiente de verificar en GitHub |
| DR-002 / BUG-002 | #2 | Inconsistencia de disponibilidad en el carrito | Pendiente de verificar en GitHub |

## Criterios de mantenimiento

- No crear defectos adicionales sin evidencia reproducible.
- No asignar severidad ni prioridad sin una evaluación documentada.
- No marcar defectos como cerrados hasta comprobar la corrección.
- Actualizar el estado local después de verificar el Issue correspondiente en GitHub.
- Mantener las incidencias de automatización separadas de los defectos funcionales confirmados.

## Historial

- 23/10/2026: se registraron localmente BUG-001 y BUG-002 y sus respectivos enlaces a GitHub Issues.
- 24/10/2026: se reorganizó el registro para documentar los dos defectos reproducidos y distinguir los datos pendientes de verificación.