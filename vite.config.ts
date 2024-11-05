import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      inject({
         $: 'ymaps3',
         ymaps3: 'ymaps3',
      }),
      react(),
   ],
});
