import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Assignment/" : "/",
  plugins: [react()],
  build: {sourcemap: true,},
})
