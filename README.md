# Conexión Bolivia Visas

Sitio web estático para asesoría de visas a Bolivia desde Cusco. Construido con [Astro](https://astro.build) y desplegado en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub llamado `conexion-bolivia-visas`.
2. Conecta este proyecto y haz push a `main`:

```bash
git init
git add .
git commit -m "Initial site setup"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/conexion-bolivia-visas.git
git push -u origin main
```

3. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Tras el primer push, el workflow `.github/workflows/deploy.yml` publicará el sitio.

## Dominio personalizado

Cuando tengas el dominio del cliente:

1. En GitHub Pages, agrega el dominio en **Settings → Pages → Custom domain**.
2. Crea `public/CNAME` con el dominio (por ejemplo `www.tudominio.com`).
3. Actualiza `site` y `base` en `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://www.tudominio.com",
  base: "/",
});
```

4. Configura DNS en el registrador del dominio apuntando a GitHub Pages.

## Formulario de contacto

El formulario en `/contacto/` usa [Formspree](https://formspree.io). Crea una cuenta gratuita, obtén tu endpoint y reemplaza la URL en `src/pages/contacto/index.astro`.

## Estructura

- `src/pages/index.astro` — Inicio
- `src/pages/servicios/` — Servicios y FAQ
- `src/pages/contacto/` — Formulario y datos de contacto
- `src/layouts/BaseLayout.astro` — Layout compartido
