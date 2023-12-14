import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import million from 'million/compiler';
 
export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), eslint()],
});
