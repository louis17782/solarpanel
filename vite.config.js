import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/solarpanel/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        suministros: resolve(__dirname, 'pages/suministros.html'),  
        // Añade más entradas si tienes otras páginas
      },
    },
  },
});
