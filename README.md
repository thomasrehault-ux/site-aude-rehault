# Site Aude Rehault

Site vitrine Astro statique. Domaine définitif : **https://auderehault.fr/**.

## Démarrage

```bash
npm ci
npm run dev
```

## Commandes

```bash
npm run build
npm run preview
```

## Déploiement Cloudflare Pages

- Dépôt : `thomasrehault-ux/site-aude-rehault` ; branche de production : `main`.
- Commande : `npm run build` ; dossier publié : `dist` ; racine : racine du dépôt.
- Node.js 22, via `.nvmrc`.
- Ne pas définir `SITE_BASE_PATH` sur Cloudflare.

Les URL canoniques, l’image de partage, `robots.txt` et `sitemap.xml` désignent le domaine définitif. Les aperçus `pages.dev` portent un en-tête `noindex`. `public/_redirects` contient les correspondances avec les anciennes pages. Une page 404 évite de servir l’accueil à toute URL inconnue.

Le workflow GitHub Pages conserve `SITE_BASE_PATH=/site-aude-rehault` pour préserver cet aperçu :

https://thomasrehault-ux.github.io/site-aude-rehault/

La sauvegarde DNS, la bascule et les points encore ouverts sont consignés dans [docs/mise-en-ligne.md](docs/mise-en-ligne.md).
