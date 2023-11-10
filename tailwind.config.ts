import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/common/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
export default config
