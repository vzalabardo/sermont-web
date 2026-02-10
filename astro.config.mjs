import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Para GitHub Pages: si tu repo se llama "sermont-web", 
// la URL será: https://zalakito.github.io/sermont-web/
// Si usas dominio personalizado (www.sermont.es), deja base sin definir

export default defineConfig({
  site: 'https://vzalabardo.github.io',  // GitHub Pages domain
  base: '/sermont-web',                  // Nombre del repositorio
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});