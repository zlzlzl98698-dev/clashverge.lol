import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          accent: 'var(--bg-accent)',
          observatory: 'var(--bg-observatory)',
          'observatory-card': 'var(--bg-observatory-card)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        brand: {
          DEFAULT: 'var(--color-brand)',
          hover: 'var(--color-brand-hover)',
          light: 'var(--bg-accent)',
          dark: '#1E40AF',
        },
        border: {
          DEFAULT: 'var(--border-color)',
          observatory: 'var(--border-observatory)',
        },
      },
      fontFamily: {
        sans: [
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Noto Sans SC"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(23, 32, 51, 0.04), 0 1px 2px -1px rgba(23, 32, 51, 0.04)',
        'card-hover': '0 12px 28px -6px rgba(37, 99, 235, 0.10), 0 4px 10px -2px rgba(23, 32, 51, 0.05)',
        observatory: '0 16px 36px -8px rgba(7, 12, 24, 0.45)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
    },
  },
  plugins: [typography],
};
