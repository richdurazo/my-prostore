import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // optional if you're using /app dir
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
