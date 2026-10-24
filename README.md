# Suite de Pruebas Automatizadas - OpenCart

## 1. Descripción del proyecto

Este proyecto contiene una suite de pruebas automatizadas desarrollada con Playwright y TypeScript para verificar funcionalidades de la tienda de demostración OpenCart.

La suite utiliza el patrón Page Object Model (POM) para organizar los selectores y las acciones de la página principal.

## 2. Tecnologías utilizadas

- Node.js
- TypeScript
- Playwright Test
- Chromium
- Firefox
- WebKit
- OpenCart Demo: http://opencart.abstracta.us

## 3. Requisitos previos

Antes de ejecutar las pruebas, instala:

- Node.js y npm.
- Git.
- Visual Studio Code (opcional, recomendado).

Comprueba la instalación con:

```powershell
node --version
npm --version
```

## 4. Instalación del proyecto

Clona el repositorio y entra en su carpeta:

```powershell
git clone https://github.com/doskihuaski1234/048-proyecto-final.git
cd 048-proyecto-final
```

Instala las dependencias:

```powershell
npm install
```

Instala los navegadores requeridos por Playwright:

```powershell
npx playwright install
```

Si ya tienes el proyecto descargado, ejecuta los comandos desde su carpeta raíz.

## 5. Ejecución de las pruebas

Ejecutar toda la suite:

```powershell
npx playwright test
```

Ejecutar con un solo trabajador:

```powershell
npx playwright test --workers=1
```

Ejecutar únicamente Chromium:

```powershell
npx playwright test --project=chromium
```

Ejecutar únicamente Firefox:

```powershell
npx playwright test --project=firefox
```

Ejecutar únicamente WebKit:

```powershell
npx playwright test --project=webkit
```

Ejecutar las pruebas mostrando el navegador:

```powershell
npx playwright test --headed
```

Ejecutar la prueba de instalación:

```powershell
npx playwright test tests/instalacion.spec.ts
```

Ejecutar las pruebas funcionales:

```powershell
npx playwright test tests/funcional.spec.ts
```

Ejecutar la prueba smoke:

```powershell
npx playwright test tests/smoke.spec.ts
```

## 6. Configuración

La configuración principal se encuentra en `playwright.config.ts`.

- Carpeta de pruebas: `tests/`.
- Navegadores: Chromium, Firefox y WebKit.
- Capturas automáticas: cuando una prueba falla.
- Videos y trazas: conservados cuando corresponde a un fallo.
- Reporte HTML: generado en `playwright-report/`.
- URL base predeterminada: `http://opencart.abstracta.us`.

Para cambiar la URL base, define la variable de entorno `BASE_URL` antes de ejecutar las pruebas.

Ejemplo en PowerShell:

```powershell
$env:BASE_URL = "https://tu-sitio-de-pruebas.example"
npx playwright test
```

Sustituye el ejemplo por la URL real del entorno que deseas probar.


## Configuración de variables de entorno

El proyecto admite la variable opcional `BASE_URL` para seleccionar el sitio de pruebas.
Si no se define, Playwright utiliza `http://opencart.abstracta.us`.

Se incluye `.env.example` como referencia. Playwright no carga automáticamente
ese archivo; si deseas usar variables desde un archivo `.env`, debes configurar
explícitamente su carga antes de ejecutar las pruebas.

En PowerShell puedes establecer la URL para la sesión actual:

```powershell
$env:BASE_URL = "http://opencart.abstracta.us"
npx playwright test --workers=1
```

Para volver al comportamiento predeterminado en esa terminal:

```powershell
Remove-Item Env:BASE_URL -ErrorAction SilentlyContinue
```

## 7. Generación y consulta del reporte HTML

Después de ejecutar las pruebas, abre el reporte con:

```powershell
npx playwright show-report
```

El reporte HTML de Playwright se genera en:

`playwright-report/`

La carpeta `reportes/` contiene una copia del reporte y los archivos utilizados para documentar el análisis de estabilidad.

Para actualizar la copia del reporte:

```powershell
New-Item -ItemType Directory -Force -Path .\reportes | Out-Null
Copy-Item -Path .\playwright-report\* -Destination .\reportes\ -Recurse -Force
```

## 8. Análisis de estabilidad

Se realizaron tres ejecuciones consecutivas de la suite con un solo trabajador.

| Ejecución | Aprobadas | Fallidas |
|---|---:|---:|
| 1 | 15 | 0 |
| 2 | 14 | 1 |
| 3 | 13 | 2 |
| Total | 42 | 3 |

Resultados observados:

- Pruebas ejecutadas: 45.
- Pruebas aprobadas: 42.
- Pruebas fallidas: 3.
- Tasa global de aprobación: 93.33 %.
- Tasa global de fallos: 6.67 %.

Los fallos registrados se concentraron en Firefox y estuvieron relacionados con tiempos de espera. La causa raíz todavía requiere investigación.

El análisis completo está en `reportes/analisis-estabilidad.md`.

Los registros individuales están en:

- `reportes/estabilidad-ejecucion-1.txt`
- `reportes/estabilidad-ejecucion-2.txt`
- `reportes/estabilidad-ejecucion-3.txt`

## 9. Evidencias e incidencias

La carpeta `evidencias/` contiene material de apoyo para investigar las incidencias observadas.

Entre las evidencias recopiladas se incluyen:

- Capturas de pantalla.
- Videos de las ejecuciones fallidas.
- Trazas de Playwright.
- Contextos de error.

Las evidencias de Firefox se encuentran en `evidencias/fallos-firefox/`.

El registro descriptivo de las incidencias se encuentra en `evidencias/incidencias.md`.

Importante: los fallos de ejecución automatizada no confirman por sí solos defectos funcionales de OpenCart. Es necesario investigar y reproducir cada incidencia antes de clasificarla como un defecto confirmado.

## 10. Estructura del proyecto

```text
048-proyecto-final/
├── evidencias/
│   ├── fallos-firefox/
│   └── incidencias.md
├── pages/
│   └── HomePage.ts
├── reportes/
│   ├── analisis-estabilidad.md
│   ├── estabilidad-ejecucion-1.txt
│   ├── estabilidad-ejecucion-2.txt
│   ├── estabilidad-ejecucion-3.txt
│   └── index.html
├── tests/
│   ├── instalacion.spec.ts
│   ├── smoke.spec.ts
│   └── funcional.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

La estructura anterior representa los archivos principales esperados; pueden existir otros archivos y carpetas auxiliares.

## 11. Verificación de tipos

Para comprobar los tipos de TypeScript:

```powershell
npx tsc --noEmit
```

## 12. Repositorio y seguimiento de incidencias

Repositorio del proyecto:

https://github.com/doskihuaski1234/048-proyecto-final

Los colaboradores deben contar con los permisos correspondientes para revisar el código y los reportes.

Las incidencias confirmadas deben documentarse mediante GitHub Issues, incluyendo pasos para reproducirlas, resultado esperado, resultado obtenido y evidencias.

Antes de entregar, verifica que el colaborador solicitado tenga acceso al repositorio y que las incidencias documentadas estén enlazadas a sus respectivos Issues.

## Validación integral más reciente (23 de octubre de 2026)

- Pruebas ejecutadas: 45.
- Pruebas aprobadas: 45.
- Pruebas fallidas: 0.
- Chromium: 15 de 15 aprobadas.
- Firefox: 15 de 15 aprobadas.
- WebKit: 15 de 15 aprobadas.
- Verificación de tipos de TypeScript: aprobada.

Registro final: `reportes/ejecucion-integral-final_20261023_205927.txt`. Verificación adicional de WebKit: `reportes/verificacion-webkit_20261023_205629.txt`.

