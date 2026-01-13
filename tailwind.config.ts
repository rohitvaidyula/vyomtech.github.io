import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005B5F',
        accent: '#D9A240',
        text: '#2A2E32',
        muted: '#4D5360',
        bg: '#FFFFFF',
        surface: '#F8F7F5'
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Noto Sans', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'lg-body': ['1.125rem', { lineHeight: '1.7' }],
        'sm-body': ['1rem', { lineHeight: '1.6' }]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem'
      },
      maxWidth: {
        'content': '65ch',
        'wide': '80rem'
      },
      borderRadius: {
        'subtle': '0.375rem'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#2A2E32',
            fontFamily: 'Noto Sans, system-ui, sans-serif',
            h1: {
              color: '#005B5F',
              fontFamily: 'Sora, system-ui, sans-serif',
              fontWeight: '700'
            },
            h2: {
              color: '#005B5F',
              fontFamily: 'Sora, system-ui, sans-serif',
              fontWeight: '600'
            },
            h3: {
              color: '#005B5F',
              fontFamily: 'Sora, system-ui, sans-serif',
              fontWeight: '600'
            },
            a: {
              color: '#D9A240',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            },
            strong: {
              color: '#005B5F'
            },
            code: {
              color: '#D9A240',
              backgroundColor: '#F8F7F5',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            blockquote: {
              borderLeftColor: '#D9A240',
              color: '#4D5360'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}

export default config
