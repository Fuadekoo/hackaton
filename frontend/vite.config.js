import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // the backend server  /backend=http://localhost:56000
  server:{
    proxy:{
      '/backend':{
        target:'http://localhost:12000',
        secure:false,
      },
    }
  },
  plugins: [react()],
})
