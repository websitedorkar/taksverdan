import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './forms/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  prefix: "",
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: "15px",
      // default breakpoints but with 40px removed
      screens: {
        sm: '480px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1300px',
      },
    },

    fontFamily: {
      'sans': ['var(--font-roboto)'],
      'serif': ['var(--font-roboto)'],
      // 'mono': ['var(--font-quicksand)'],
      // 'display': ['var(--font-quicksand)'],
      'body': ['var(--font-roboto)'],
      'roboto': ['var(--font-roboto)'],
      'inter': ['var(--font-inter)'],
      'poppins': ['var(--font-poppins)'],
      'open-sans': ['var(--font-open-sans)'],
    },

    lineHeight: {
      '5': '1',
      '6': '1.1',
      '7': '1.2',
      '8': '1.3',
      '9': '1.4',
      '10': '1.5',
      '11': '1.6',
      '12': '1.7',
      '13': '1.8',
      '14': '2',
    },

    fontSize: {
      xxs: '13px',
      xs: '14px',
      sm: '15px',
      base: '16px',
      'lg': '18px',
      'xl': '21px',
      '2xl': '25px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '44px',
      '6xl': '62px',
    },
    extend: {
      colors: {
        'light': '#F8F8F8',
        'border': '#E6EAF5',
        'dark': '#303030',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-dotted-pattern.svg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config