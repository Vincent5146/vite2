import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  base: "./", //打包路徑
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  //啟動配置
  server: {
    host: "0.0.0.0",
    port: 8000,
    open: true,
    https: false,
    proxy: {},
  },
  // build後移除console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
