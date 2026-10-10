# Informe de ejecución completa de Playwright

**Fecha:** 10 de octubre de 2026
**Proyecto:** 048-proyecto-final
**URL base:** http://opencart.abstracta.us
**Herramienta:** Playwright
**Navegadores:** Chromium, Firefox y WebKit

## 1. Resultado general

| Indicador | Resultado |
|---|---:|
| Pruebas ejecutadas | 33 |
| Aprobadas | 33 |
| Fallidas | 0 |
| Tasa de aprobación | 100 % |
| Duración aproximada | 2 minutos y 18 segundos |

## 2. Distribución de las pruebas

| Grupo | Casos únicos | Ejecuciones entre navegadores |
|---|---:|---:|
| Pruebas funcionales | 3 | 9 |
| Instalación y apertura del navegador | 1 | 3 |
| Regresión del buscador | 1 | 3 |
| Regresión del carrito | 1 | 3 |
| Pruebas smoke | 5 | 15 |
| **Total** | **11** | **33** |

## 3. Resultado por navegador

La salida de Playwright confirmó que todas las ejecuciones de Chromium, Firefox y WebKit finalizaron correctamente. No se reportaron fallos en esta ejecución.

## 4. Evidencias y reportes

- Las capturas automatizadas se almacenan en `evidencias/capturas/`, separadas por navegador.
- El informe HTML se genera en `playwright-report/index.html`.
- El helper de evidencias fue actualizado para incluir el archivo de prueba y el título en el nombre de la captura.
- La validación posterior registró 24 archivos PNG no vacíos. Esta cifra es inferior a las 33 ejecuciones; por ello, no se afirma que exista una captura independiente para cada ejecución.
- El reporte HTML y las capturas permiten revisar la ejecución, pero el informe HTML generado localmente no debe confundirse con un artefacto publicado.

## 5. Incidencias históricas

Los informes anteriores documentan incidencias de estabilidad en ejecuciones previas. El resultado satisfactorio de esta ejecución no elimina ni reescribe ese historial; solamente registra que las 33 pruebas pasaron en esta corrida.

## 6. Conclusión

La suite completa terminó con 33 pruebas aprobadas y cero fallidas en los tres navegadores configurados. Se recomienda conservar este informe junto con las evidencias disponibles y revisar la cobertura de capturas antes de considerar completa la entrega de evidencias.
