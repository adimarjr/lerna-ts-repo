import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'prod'
  const isDev = mode === 'dev'
  const isTest = mode === 'test'

  let build = {}
  if (isProd) {
    build = {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: '@adimarjr/vue-components-lib',
        fileName: 'index',
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        external: [
          'vue',
        ],
        output: {
          globals: {
            'vue': 'Vue',
          },
        },
      },
    }
  }

  let optimizeDeps = {}
  if (isDev) {
    optimizeDeps = {
      exclude: [],
    }
  }

  let test = {}
  if (isTest) {
    test = {
      include: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],
      environment: 'jsdom',
      deps: {
        inline: [
          '@vue',
        ],
      },
      coverage: {
        reporter: [
          'text',
          'text-summary',
          'lcov',
        ],
      },
    }
  }

  return {
    plugins: [vue()],
    optimizeDeps,
    build,
    test,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
    },
  }
})
