import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    minify: 'esbuild',
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'HyperplayBrowserSDK',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    }
  },
  plugins: [dts()]
})
