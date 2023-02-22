import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// elementPlus 组件按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({command, mode})=>{
  const env = loadEnv(mode, process.cwd(),'')
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})
