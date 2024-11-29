import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          text: '#fbeaeb',
          background: '#0b0422',
          primary: '#990000',
          secondary: '#0000bb',
          accent: '#58d9b7',
        },
        light: {
          text: '#130405',
          background: '#fbf4f4',
          primary: '#cc0000',
          secondary: '#4444b5',
          accent: '#bfc17b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
