# ToDo App

Hice este proyecto como una tarea de prueba técnica.

Quiero contaros por que elegí Next.js Framework. Tuve tiempo para pensar cómo me gustaba hacer esta tarea. Y entendí que con Vue.JS y Typescript no tenía ningún problema. Conozco las características del Framework Vue3 y del ecosistema. Pero quería usar esta tarea para aprender algo nuevo. Pues decidí arriesgarme y elegí Next.Js, MaterialUI y Typescript. Hablo de riesgo porque siempre existe la posibilidad de perder mucho tiempo trabajando con tecnología desconocida. Siempre hay muchas trampas.

Ya tenia hecha una aplicación TuDo similar, como proyecto para un bootcamp. Lo implementé usando React, React Bootstrap, Redux, Thanks. Por lo tanto, en esta tarea, decidí no usar Redux, tratando implementar todo de la manera más sencilla posible. Quizás este sea mi error, el proyecto resultó no ser tan simple, uso muchos componentes. Entonces, en el último momento, intenté agregar Redux al proyecto. Pero no tuve suficiente tiempo para implementar todo. De momento, en la segunda rama del git, están mis desarrollos relacionados con la implementación de Redux en el proyecto.

## Reto

Tuve algunos aspectos obligatorios para realizar el proyecto:

- Utilizar Git
- Utilizar [json-server](https://github.com/typicode/json-server) para generar una REST API
- Hacer el READ.ME

**Puntos extras no obligatorios**:

- Desplegarlo en algún hosting
- Hacer tests

**Funcionalidades**:

- Login y logout
- Crear tareas
- Ver tareas
- Actualizar tareas
- Eliminar tareas

### Implementación

**Stack**:

| Package        | Version |
| -------------- | ------- |
| next           | 12.1.6  |
| react          | 18.1.0  |
| nextjs-auth0   | 1.9.0   |
| @mui/material  | 5.8.3   |
| @emotion/react | 11.9.3  |
| notistack      | 2.0.5   |
| uuid           | 8.3.2   |
| eslint         | 8.1.17  |
| typescript     | 4.7.3   |
| jest           | 28.1.1  |

<br>

Utilicé librería de componentes [Material UI](https://mui.com/material-ui/getting-started/overview/).

Para implementar _login_ y _logout_ utilicé Auth0 Next.js SDK [@auth0/nextjs-auth0](https://github.com/auth0/nextjs-auth0)

El usuario puede conectarse y desconectarse de la aplicación. También puede ir a su página de perfil y ver sus datos: Nombre, Apellido, correo electrónico, nickname.
Si el usuario no está autenticado, no puede entrar a la aplicación.

Al ingresar a la aplicación, el usuario tiene la oportunidad de **crear** una tarea. Introduciendo el nombre y la descripción de la tarea. Como una simple validación, el botón de enviar está deshabilitado mientras los campos de entrada están vacíos.

El usuario también **ve** las tarjetas divididas en tres columnas según su estado:

- To Do
- En progreso
- Terminadas

Cada tarjeta tiene un botón para **eliminar** esta tarea.

Hay un campo de selección que permite **cambiar el estado** de la tarea. Después del cambio, la tarjeta se mueve a la columna correspondiente.

También hay un botón para actualizar la tarea, que abre una modal donde el usuario puede **editar** el nombre o la descripción de la tarea.

También se muestra la hora en que se creó la tarea.

### Backend

Como se recomienda, usé [json-server](https://github.com/typicode/json-server) para generar una REST API.

Decidí no incluirlo en el repositorio de frontend y lo agregué a un repositorio separado [repo con server](https://github.com/alext100/todo-list-server).

Pero también conecté otro mockAPI, **Mockend** que genera objetos para mí de acuerdo con el esquema dado. Esta API permite realizar todas las peticiones posibles. Aquí hay una página con tareas generadas según el esquema: [MockEnd](https://mockend.com/alext100/todo-list/tasks)

### CI/CD

- Utilizo GitHub Workflows para automatizar pruebas de la calidad del código de seguridad mediante una solución en la nube de SonarCloud. [Ver informe de prueba](https://sonarcloud.io/summary/overall?id=todo-list)

- También he configurado el hosting automático del sitio en las plataformas https://netlify.com y https://vercel.com/.

### Testing

Para tests unitarios uso **Jest** y Testing Library

### Getting Started

Para clonar el repositorio:

```bash
git clone https://github.com/alext100/todo-list.git
```

Para clonar el repositorio de json-server:

```bash
git clone https://github.com/alext100/todo-list-server.git
```

Para iniciar el servidor del desarrollador de Front:

```bash
npm run dev
```

Para iniciar el servidor del desarrollador de Back:

```bash
npm run start
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

En el proyecto, uso .env.local, pero para que no tengáis problemas con este archivo, agregué enlaces directos al API al código.

#### Components

```bash
components
| ├── CreateTask
| | └── CreateTask.tsx
| ├── Footer
| | └── Footer.tsx
| ├── HandleUser
| | ├── HandleUser.tsx
| ├── Header
| | └── Header.tsx
| ├── NotLoggedInUserView
| | └── NotLoggedInUserView.tsx
| ├── TaskCard
| | ├── CardActionsSelect.tsx
| | └── TaskCard.tsx
| ├── TasksContainer
| | └── TasksContainer.tsx
| ├── Transitions
| | └── Transition.tsx
| └── UpdateTaskDialog
| └── UpdateTaskDialog.tsx
```

![2022-06-16_021838](https://user-images.githubusercontent.com/83639312/173963216-26411b84-a8d6-4d57-a222-dda1e5276814.png)

