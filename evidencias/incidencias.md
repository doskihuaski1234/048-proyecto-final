# Registro de incidencias de pruebas automatizadas

## INC-001: Tiempo de espera al mostrar categorías en Firefox

- Tipo: Incidencia de ejecución automatizada.
- Prueba: Pruebas funcionales de OpenCart - muestra las categorías de navegación.
- Navegador: Firefox.
- Ejecución afectada: 2 y 3.
- Resultado: La prueba superó el límite de tiempo de 30 segundos o el cierre del contexto excedió el tiempo permitido.
- Evidencias: Carpeta `evidencias/fallos-firefox/`.
- Estado: Mitigada tras ajustar la navegación a domcontentloaded; causa raíz no confirmada.
- Observación: No se ha confirmado si la causa es el sitio remoto, la conexión, el navegador o el código de prueba.

## INC-002: Tiempo de espera al buscar un producto existente en Firefox

- Tipo: Incidencia de ejecución automatizada.
- Prueba: Pruebas funcionales de OpenCart - permite buscar un producto existente.
- Navegador: Firefox.
- Ejecución afectada: 3.
- Resultado: La prueba superó el límite de tiempo de 30 segundos.
- Evidencias: Carpeta `evidencias/fallos-firefox/`, incluidos captura, video, contexto y traza.
- Estado: Mitigada tras ajustar la navegación a domcontentloaded; causa raíz no confirmada.
- Observación: Se requiere revisar la traza y el contexto para determinar la causa raíz.

## Criterio de clasificación

Estas incidencias describen fallos observados en las pruebas automatizadas. No deben considerarse defectos funcionales confirmados de OpenCart hasta reproducirlos y determinar su causa.
