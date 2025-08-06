import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // ← Esto habilita test(), describe(), expect()
    environment: 'jsdom', 
     setupFiles: './src/setupTests.js'
  }
})
