/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'day-cloudy': "url('/src/img/day/cloudy.webp')",
        'day-rainy': "url('/src/img/day/rainy.webp')",
        'day-clear': "url('/src/img/day/clear.webp')",
        'day-snowy': "url('/src/img/day/snowy.webp')",
        'night-cloudy': "url('/src/img/night/cloudy.webp')",
        'night-rainy': "url('/src/img/night/rainy.webp')",
        'night-clear': "url('/src/img/night/clear.webp')",
        'night-snowy': "url('/src/img/night/snowy.webp')",
        'day-rainyblur': "url('/src/img/day/rainyblur.webp')",
        'day-clearblur': "url('/src/img/day/clearblur.webp')",
        'day-cloudyblur': "url('/src/img/day/cloudyblur.webp')",
        'day-snowyblur': "url('/src/img/day/snowyblur.webp')",
        'night-clearblur': "url('/src/img/night/clearblur.webp')",
        'night-rainyblur': "url('/src/img/night/rainyblur.webp')",
        'night-cloudyblur': "url('/src/img/night/cloudyblur.webp')",
        'night-snowyblur': "url('/src/img/night/snowyblur.webp')"
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
