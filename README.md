# RegaloCumpleanosPapa

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Deploy en Cloudflare Pages

El proyecto se publica como sitio estático en [Cloudflare Pages](https://pages.cloudflare.com), conectado a este repositorio de GitHub.

Configura el proyecto en **Workers & Pages → tu proyecto → Settings → Builds & deployments** con estos valores:

| Campo | Valor |
| --- | --- |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist/regalo-cumpleanos-papa/browser` |
| Root directory | `/` (vacío) |
| Environment variable `NODE_VERSION` | `24` |

Notas:

- El directorio de salida es la carpeta `browser` dentro de `dist/`: ahí queda el `index.html` que Cloudflare sirve como portada, junto a los bundles `main-*.js` y `styles-*.css`.
- `public/_headers` y `public/_redirects` se copian a la salida del build y los aplica Cloudflare automáticamente: cachear para siempre los assets con hash, no cachear el `index.html` y devolver la app (`200`) en rutas desconocidas en lugar de un 404.
- `.node-version` fija la versión de Node del build. Si el build falla con un error de versión, añade también la variable de entorno `NODE_VERSION` en el panel.
- Cada `push` a la rama principal dispara un despliegue nuevo.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
