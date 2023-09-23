import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), svgr() ],
  build: {
    rollupOptions: {
      external: [
        'react-icons/bs',
        'react-icons/ai',
        'react-icons/hi',
        'react-icons/pi'
      ]
    }
  }
})
