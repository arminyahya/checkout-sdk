import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom', // 👈 This is the key part
    globals: true,
  },
})