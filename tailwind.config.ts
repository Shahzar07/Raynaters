import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F7F3',
        surface: '#FFFFFF',
        'surface-hover': '#F1F0EC',
        border: '#D9D6CF',
        'text-primary': '#171313',
        'text-secondary': '#514B48',
        'text-muted': '#786F6A',
        accent: '#E94B35',
        'accent-hover': '#C83C2A',
        success: '#2F7D5A',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        grid: '1100px',
        text: '800px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      fontSize: {
        'h1-d': ['88px', { lineHeight: '1.02', letterSpacing: '-0.04em', fontWeight: '500' }],
        'h1-m': ['48px', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '500' }],
        'h2-d': ['56px', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '500' }],
        'h2-m': ['36px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '500' }],
        'stat-d': ['160px', { lineHeight: '0.95', letterSpacing: '-0.05em', fontWeight: '500' }],
        'stat-m': ['88px', { lineHeight: '0.95', letterSpacing: '-0.05em', fontWeight: '500' }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'marquee-reverse-slow': 'marquee-reverse 60s linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
