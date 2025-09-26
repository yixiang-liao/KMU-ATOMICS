import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kmu-atomics/',            // 部署在根目錄就用預設 '/'
  build: { outDir: 'dist' }
})
