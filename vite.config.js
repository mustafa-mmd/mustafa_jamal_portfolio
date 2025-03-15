import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/mustafa_jamla_portfolio/" // Your GitHub repo name
})
