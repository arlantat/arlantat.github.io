import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--color-background)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'highlight': 'var(--color-highlight)',
        'error': 'var(--color-error)',
        'background-light': 'var(--color-background-light)',
      },
    },
  },
  plugins: [],
}
export default config
