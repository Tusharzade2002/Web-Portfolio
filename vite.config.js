import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site at /Web-Portfolio/, so assets must resolve from there.
  base: '/Web-Portfolio/',
})
