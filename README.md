#  Sistema de Gestión Hotelera 

Este proyecto es una aplicación de consola desarrollada en **JavaScript**, diseñada para gestionar la administración de habitaciones de un hotel. Enfocado en la lógica de negocio real, el sistema implementa procesos asíncronos y un manejo eficiente de datos.

---

##  Colaboradores

Este proyecto fue desarrollado de forma colaborativa por:

*   **Sergio Ajú**: 
    *   Arquitectura general del sistema y menú principal.
    *   Lógica de Registro (`registrarHabitacion`) con validación de datos.
    *   Sistema de Búsqueda asíncrona (`buscarHabitacionNumero`).
    *   Módulo de eliminación de registros (`eliminarHabitacion`).
*   **Byron Ajcet**:
    *   Módulo de visualización de datos (`ListaHabitaciones`).
    *   Gestión de estados y actualización de huéspedes (`CambiarEstadoHabitacion`).

---

##  Funcionalidades

*   **Registro Asíncrono**: Simulación de validación de datos (2 segundos) antes de guardar la habitación.
*   **Listado Inteligente**: Visualización limpia de todas las habitaciones registradas.
*   **Búsqueda Avanzada**: Localización de habitaciones mediante el método .find().
*   **Gestión Dinámica de Estados**: Actualización de disponibilidad (Libre, Ocupado, Limpieza) con ajuste automático de nombres de huéspedes.
*   **Mantenimiento CRUD**: Eliminación segura de registros mediante .findIndex() y .splice().

---
## DIAGRAMA DE FLUJO
Mapa de Funcionamiento: Hotel Techveloper

1. Inicio del Sistema (sERGIO aJÚ)

El programa muestra el Menú Principal y espera a que elijas una opción.

2. Caminos de Acción

    Registro de Habitaciones (Sergio Ajú)

    Pides los datos → Sale mensaje de "Validando" → Espera de 2 segundos → Confirmas el registro → Vuelves al Menú.

    Lista de Habitaciones (Byron Ajcet)

    El sistema revisa si hay datos → Muestra la lista al instante → Vuelves al Menú.

    Búsqueda (Sergio Ajú)

    Pides el número → Sale mensaje de "Consultando" → Espera de 2 segundos → Muestras el resultado → Vuelves al Menú.

    Cambio de Estado (Byron Ajcet)

    Pides el número → Sale mensaje de "Esperando personal" → Espera de 3 segundos → Pides el nuevo estado y huésped → Vuelves al Menú.

    Eliminar (Sergio Ajú)

    Pides el número → Borras la habitación al instante → Vuelves al Menú.

3. Salida

El programa se detiene cuando eliges la opción 6.