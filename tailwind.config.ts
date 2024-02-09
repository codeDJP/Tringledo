import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        accent: '#A7D707',
        "accent-700": "#83A80A",
        heading: '#EEE5E0',
        bg: '#0C0F18',
        navg: '#222625',
        para: '#F8F7F1',
        techbg: '#323A38',
        techCol: '#6B6B6B',
        border: '#B2B2B2',
        emailbg: "#D9D9D9"
      },

      // screens: {
      //   xs: "480px",
      //   sm: "768px",
      //   md: "1060px"
      // }
    },
  },
  plugins: [],
}
export default config
