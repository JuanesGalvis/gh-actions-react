import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://juanesgalvis.github.io/gh-actions-react/',
  plugins: [react()]
})
