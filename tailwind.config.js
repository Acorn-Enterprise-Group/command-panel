/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      colors: {
        ink: {
          950: '#0b0f12',
          900: '#10161a',
          850: '#131a1f',
          800: '#182128',
          700: '#24313a'
        },
        safety: {
          safe: '#34d399',
          caution: '#fbbf24',
          danger: '#fb7185'
        },
        moss: {
          500: '#6ee7b7',
          600: '#34d399'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(110, 231, 183, 0.15), 0 12px 30px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};
