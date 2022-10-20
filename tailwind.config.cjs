/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'day-cloudy': "url('/img/day/cloudy.webp')",
        'day-rainy': "url('/img/day/rainy.webp')",
        'day-clear': "url('/img/day/clear.webp')",
        'day-snowy': "url('/img/day/snowy.webp')",
        'night-cloudy': "url('/img/night/cloudy.webp')",
        'night-rainy': "url('/img/night/rainy.webp')",
        'night-clear': "url('/img/night/clear.webp')",
        'night-snowy': "url('/img/night/snowy.webp')",
        'day-rainyblur': "url('/img/day/rainyblur.webp')",
        'day-clearblur': "url('/img/day/clearblur.webp')",
        'day-cloudyblur': "url('/img/day/cloudyblur.webp')",
        'day-snowyblur': "url('/img/day/snowyblur.webp')",
        'night-clearblur': "url('/img/night/clearblur.webp')",
        'night-rainyblur': "url('/img/night/rainyblur.webp')",
        'night-cloudyblur': "url('/img/night/cloudyblur.webp')",
        'night-snowyblur': "url('/img/night/snowyblur.webp')"
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
