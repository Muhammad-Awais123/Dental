/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1855F4',
          hover: '#0F44D0',
          light: '#EEF4FF',
          dark: '#0C35A8',
        },
        charcoal: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        secondary: {
          DEFAULT: '#475569',
          light: '#64748B',
        },
        soft: '#F8FAFC',
        borderSoft: '#E2E8F0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
