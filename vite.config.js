import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'unreal-ui-next',
          resolveStyle: (name) => {
            return `unreal-ui-next/lib/${name}/style.css`;
          },
          resolveComponent: (name) => {
            return `unreal-ui-next/lib/${name}`;
          },
        }
      ]
    })
  ]
})
