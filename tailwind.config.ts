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
        bg: '#0A0A0B',
        surface: '#131316',
        'surface-hover': '#18181C',
        border: '#1F1F23',
        'text-primary': '#FAFAFA',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
        accent: '#D3FBA3',
        'accent-hover': '#BFEF8A',
        success: '#4ADE80',
      },
      fontFamily: {
        display: ['var(--font-instrument-serif)', 'serif'],
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
