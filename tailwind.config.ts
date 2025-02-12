import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pyellow: '#FFC107',
        porange: '#FE5716',
        sgreen: '#4CAF50',
        sblue: '#1E3A5F',
        nwhite: '#FFFFFF',
        ngrey: '#333333',
        error: '#FF0000',
      },
    },
  },
  plugins: [],
} satisfies Config
