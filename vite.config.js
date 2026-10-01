import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/crescendo-security-website/',
  plugins: [react()],
})