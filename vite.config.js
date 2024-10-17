import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Allows access from your local network (phone)
    port: 5173,        // Default port for Vite, or change it if needed
  }
})
