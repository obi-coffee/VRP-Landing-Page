import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'london-fog': '#FBF9F3',
        'rich-black': '#2D2D2D',
        'tast-pink': '#F05881',
        'tast-red': '#EF4056',
        'tast-light-pink': '#F287B7',
        'tast-mauve': '#A12F52',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        serif: ['Times New Roman', 'Times', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        handwritten: ['var(--font-handwritten)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
