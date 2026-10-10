# Casos de prueba manuales

Proyecto: 048-proyecto-final
Fecha de preparación: 2026-10-10 05:58:05

Importante: estos son casos propuestos. Ejecuta cada uno y completa resultado obtenido, estado y evidencia. No marques Pass sin verificarlo.

| ID | Funcionalidad | Título | Precondición | Pasos | Resultado esperado | Resultado obtenido | Estado | Evidencia |
|---|---|---|---|---|---|---|---|---|
| TC-R01 | F01 Registro | Registrar usuario con datos válidos | Cuenta nueva y datos ficticios | Completar formulario y enviar | Cuenta creada y acceso posible | Pendiente de ejecución | Pendiente | Pendiente |
| TC-R02 | F01 Registro | Validar campos obligatorios vacíos | Formulario de registro | Enviar sin completar campos | Validaciones visibles | Pendiente de ejecución | Pendiente | Pendiente |
| TC-R03 | F01 Registro | Contraseñas diferentes | Formulario de registro | Introducir contraseñas distintas | Registro rechazado | Pendiente de ejecución | Pendiente | Pendiente |
| TC-R04 | F01 Registro | Correo ya registrado | Cuenta de prueba existente | Registrar nuevamente el correo | Mensaje de duplicado | Pendiente de ejecución | Pendiente | Pendiente |
| TC-L01 | F02 Login | Acceso con credenciales válidas | Usuario de prueba autorizado | Iniciar sesión | Acceso a la cuenta | Pendiente de ejecución | Pendiente | Pendiente |
| TC-L02 | F02 Login | Contraseña incorrecta | Correo válido de prueba | Ingresar contraseña incorrecta | Acceso rechazado | Pendiente de ejecución | Pendiente | Pendiente |
| TC-L03 | F03 Logout | Cerrar sesión | Sesión iniciada | Cerrar sesión | Sesión finalizada y redirección | Pendiente de ejecución | Pendiente | Pendiente |
| TC-L04 | F02 Login | Correo incorrecto | Ninguna | Intentar acceder con correo inválido | Acceso rechazado | Pendiente de ejecución | Pendiente | Pendiente |
| TC-L05 | F02 Login | Campos de acceso vacíos | Página de login | Enviar formulario vacío | Validaciones visibles | Pendiente de ejecución | Pendiente | Pendiente |
| TC-P01 | F04 Perfil | Actualizar teléfono | Sesión iniciada | Cambiar teléfono y guardar | Cambio persiste al consultar | Pendiente de ejecución | Pendiente | Pendiente |
| TC-P02 | F04 Perfil | Nombre obligatorio vacío | Sesión iniciada | Borrar nombre y guardar | Cambio rechazado | Pendiente de ejecución | Pendiente | Pendiente |
| TC-P03 | F05 Contraseña | Cambiar contraseña | Cuenta de prueba propia | Cambiar y verificar ambas claves | Nueva válida; anterior rechazada | Pendiente de ejecución | Pendiente | Pendiente |
| TC-V01 | F06 Calificación | Calificar con cinco estrellas | Producto disponible y usuario permitido | Seleccionar cinco estrellas y enviar | Confirmación de envío | Pendiente de ejecución | Pendiente | Pendiente |
| TC-V02 | F06 Calificación | Enviar sin estrellas | Página de producto | Enviar sin calificar | Operación rechazada o validada | Pendiente de ejecución | Pendiente | Pendiente |
| TC-V03 | F06 Calificación | Calificar producto más de una vez | Producto previamente calificado | Intentar una segunda calificación | Comportamiento documentado | Pendiente de ejecución | Pendiente | Pendiente |
| TC-C01 | F07 Reseña | Enviar reseña válida | Producto disponible | Introducir nombre y comentario | Confirmación de envío | Pendiente de ejecución | Pendiente | Pendiente |
| TC-C02 | F07 Reseña | Enviar comentario vacío | Formulario de reseña | Dejar comentario vacío y enviar | Validación visible | Pendiente de ejecución | Pendiente | Pendiente |
| TC-C03 | F07 Reseña | Caracteres especiales o texto largo | Formulario de reseña | Enviar texto de prueba controlado | Aplicación responde sin romperse | Pendiente de ejecución | Pendiente | Pendiente |
| TC-N01 | F08 Navegación | Recorrer categorías | Página principal | Abrir categorías disponibles | Navegación sin error visible | Pendiente de ejecución | Pendiente | Pendiente |
| TC-N02 | F08 Búsqueda | Buscar producto existente | Catálogo accesible | Buscar por nombre | Resultados relacionados | Pendiente de ejecución | Pendiente | Pendiente |
| TC-N03 | F09 Validación | Formulario incompleto | Formulario aplicable | Omitir campos obligatorios | Mensajes de validación | Pendiente de ejecución | Pendiente | Pendiente |
| TC-N04 | F09 Validación | Caracteres especiales en texto | Campo de texto libre | Ingresar caracteres de prueba | Aplicación responde correctamente | Pendiente de ejecución | Pendiente | Pendiente |
| TC-N05 | F08 Búsqueda | Buscar producto inexistente | Catálogo accesible | Buscar término inexistente | Estado vacío o mensaje informativo | Pendiente de ejecución | Pendiente | Pendiente |
