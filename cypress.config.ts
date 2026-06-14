import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    //baseUrl: 'http://localhost:3000',
    baseUrl: 'http://localhost:5173', // Vite frontend
  },
});
