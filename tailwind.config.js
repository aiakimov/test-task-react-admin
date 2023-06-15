/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
      },
      spacing: {
        '96': '24rem',
        '27': '6.75rem',
        '28.5': '7.125rem',
        '3.5': '0.875rem',
        0: '0',
        auto: 'auto',
        full: '100%',
        '10-p': '10%',
        '20-p': '20%',
        '25-p': '25%',
        '40-p': '40%',
        '50-p': '50%',
        auto: 'auto',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
        px: '1px',
        0: '0%',
        '10-p': '10%',
        '16-p': '16%',
        '15-p': '15%',
        '20-p': '20%',
        '24-p': '24%',
        '30-p': '30%',
        '32-p': '32%',
        '33-p': '33.3%',
        '34-p': '34%',
        '40-p': '40%',
        '49-p': '49%',
        '50-p': '50%',
        '60-p': '60%',
        '65-p': '65%',
        '70-p': '70%',
        '75-p': '75%',
        '80-p': '80%',
        '85-p': '85%',
        '90-p': '90%',
        '93-p': '93%',
        '99-p': '99%',
        '160p': '160%',
        '3ch': '3ch',
        half: '50%',
        full: '100%',
        xxl: '1440px'
      },
      colors: {
        main: '#3626A7',
        text: '#151515',
        textGray: '#9195A4',
        gray: '#E7E8EF',
        lightGray: '#EBEBED',
        bgGray: '#B1B5C3'
      },
      fontSize: {
        32: ['32px', '40px'],
        14: ['14px', '20px']
      }

    },
  },
  plugins: [],
}

