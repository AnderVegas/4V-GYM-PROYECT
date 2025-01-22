# 4V-GYM-PROYECT

## 📜 Descripción

Este proyecto consiste en una interfaz de gestión para tablet/laptop destinada a gestionar las actividades y monitores de un gimnasio. La aplicación permite gestionar las actividades diarias, así como asignar monitores y modificar la programación de cada actividad.

## 🎯 Objetivos del Proyecto

- **Interfaz fiel al diseño:** El principal objetivo es implementar la interfaz de usuario de acuerdo con el diseño proporcionado, por más complejo que sea.
- **Componentes reutilizables:** Se deben crear componentes modulares y reutilizables, en lugar de copiar el mismo código en diferentes partes de la aplicación.
- **Gestión de actividades:** La página de actividades permite seleccionar fechas, navegar entre ellas y gestionar las actividades de cada día.
- **Gestión de monitores:** Los monitores pueden ser asignados a actividades específicas, de acuerdo con el tipo de actividad.

## ⚙️ Entorno de Desarrollo

### Requisitos

- **Node.js:** Asegúrate de tener Node.js instalado. Puedes verificarlo con `node -v` y `npm -v`.
- **Angular CLI:** Instala Angular CLI globalmente utilizando el siguiente comando:

    npm install -g @angular/cli

- **Editor recomendado:** Visual Studio Code (con la extensión Angular Essentials).
- **Dependencias:** Este proyecto usa varias dependencias, que puedes instalar ejecutando:
        npm install 

## Instalación
1. Clona este repositorio:
 - git clone https://github.com/AnderVegas/4V-GYM-PROYECT.git

2. Accede al directorio del proyecto:
 - cd 4V-GYM-PROYECT

3. Instala las dependencias:
 - npm install

4. Ejecuta el servidor de desarrollo:
 - ng serve
 
5. Abre el navegador y ve a http://localhost:4200 para ver la aplicación en ejecución.

## 🗂️ Estructura del Proyecto

### El proyecto se organiza de la siguiente manera:

src/
|-- app/
|   |-- components/           # Componentes reutilizables
|   |-- models/               # Modelos de datos (como Actividad, Monitor)
|   |-- services/             # Servicios para gestionar las actividades y monitores
|   |-- pages/                # Páginas principales (Actividades, Monitores)
|   |-- app.module.ts         # Módulo principal de la aplicación
|-- assets/                   # Archivos estáticos (imágenes, iconos, etc.)
|-- environments/             # Archivos de configuración de entornos

## 🛠️ Componentes Principales

1. **Cabecera (Header Component)**
- Este componente muestra el nombre del gimnasio y su logo en la parte superior de la interfaz. Está presente en todas las páginas de la aplicación.

2. **Selector de Funciones (Function Selector Component)**
- Un selector que permite elegir entre dos funcionalidades principales:

 - Actividades
 - Monitores

3. **Página de Actividades (Activities Page)**
- Permite gestionar las actividades del gimnasio. Deberás implementar un sistema para seleccionar fechas, visualizar tres bloques de actividad y permitir añadir, editar o eliminar actividades.
- **Comportamiento:**

    - Los bloques de actividades son fijos, con tres bloques por día.
    - Cada bloque puede ser ocupado con una actividad mediante un formulario.
    - Los usuarios pueden editar o eliminar actividades existentes.

4. **Página de Monitores (Monitors Page)**
- Muestra los monitores disponibles y permite asignarlos a las actividades según sea necesario. Dependiendo del tipo de actividad, algunos requieren más de un monitor.

## 📊 Diagrama de Componentes Angular

### A continuación se muestra un diagrama básico de los principales componentes y su interacción dentro de la aplicación:

+-------------------+     +------------------------+
|                   |     |                        |
|    Header         |<--->|    Function Selector   |
|                   |     |                        |
+-------------------+     +------------------------+
         |
         v
+------------------------+    +-------------------+
|                        |    |                   |
|    Activities Page     |<-->|    Monitors Page  |
|                        |    |                   |
+------------------------+    +-------------------+

- **Descripción del Diagrama**

    - Header Component está presente en todas las páginas y se comunica con el Function Selector Component para cambiar entre las vistas de actividades y monitores.
    - La Activities Page y la Monitors Page son vistas principales que muestran las funcionalidades del sistema, cada una con su propio conjunto de componentes específicos.

## 📝 Instrucciones para Continuar el Desarrollo

1. **Añadir Nuevas Actividades**
- Para añadir nuevas actividades, edita el componente ActivitiesPageComponent y actualiza la lógica para manejar formularios de actividades. Asegúrate de validar los datos antes de    enviar el formulario.

2. **Editar y Eliminar Actividades**
- El componente ActivityCardComponent debe ser responsable de mostrar la información de cada actividad y permitir su edición o eliminación. Implementa botones de edición y eliminación que disparen las acciones correspondientes.

3. **Asignación de Monitores**
- Para la asignación de monitores, crea un componente MonitorAssignmentComponent que permita seleccionar monitores y asignarlos a las actividades según el tipo de actividad.

4. **Navegación entre Fechas**
- Utiliza un calendario interactivo o botones de navegación para permitir a los usuarios desplazarse entre fechas y ver las actividades programadas.

## 🤝 Contribuir
Si deseas contribuir al proyecto, por favor, realiza un fork de este repositorio y crea una rama con tu contribución. Posteriormente, crea un pull request con los cambios.

## 📄 Licencia
Este proyecto se distribuye bajo la licencia MIT.