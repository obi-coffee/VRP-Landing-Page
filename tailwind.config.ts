import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'london-fog': '#FAF9F6',
        'rich-black': '#1A1A1A',
        'tast-pink': '#F05881',
        'tast-red': '#EF4056',
        'tast-light-pink': '#F287B7',
        'raspberry-barete': '#A23053',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Times New Roman', 'Times', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        handwritten: ['var(--font-handwritten)', 'cursive'],
        editorial: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
