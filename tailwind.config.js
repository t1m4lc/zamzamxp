/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          from: '#FF6B35',
          to: '#F7931E',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            h1: {
              color: '#0f172a',
              fontWeight: '800',
            },
            h2: {
              color: '#0f172a',
              fontWeight: '700',
            },
            h3: {
              color: '#0f172a',
              fontWeight: '600',
            },
            strong: {
              color: '#0f172a',
              fontWeight: '600',
            },
            a: {
              color: '#f97316',
              '&:hover': {
                color: '#ea580c',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
