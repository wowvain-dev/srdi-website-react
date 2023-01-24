/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/flowbite-react/**/*.{js, tsx, jsx, ts}"
    ],
    theme: {
      extend: {},
      colors: {
        'red': {
            1: '#fff1f0',
            2: '#ffccc7',
            3: '#ffa39e',
            4: '#ff7875',
            5: '#ff4d4f',
            6: '#f5222d',
            7: '#cf1322',
            8: '#a8071a',
            9: '#820014',
            10: '#5c0011'
        },
        'volcano': {
            1: '#fff2e8',
            2: '#ffd8bf'
        }
      },
      fontFamily: {
        'sans': ['Montserrat']
      }
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }