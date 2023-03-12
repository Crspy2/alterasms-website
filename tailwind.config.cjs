/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'neon': ['Tilt\\ Neon', 'cursive'],
      'warp': ['Tilt\\ Warp', 'cursive'],
      'discord': ['Nunito\\ Sans', 'sans-serif'],
      'discordCode': ['DiscordCodeBlock', 'monospace']
    },
    extend: {
      boxShadow: {
        'bg': '0 5px 36px 0px rgba(0, 0, 0, .3)',
        'sub': '0 5px 36px 0px rgba(0, 0, 0, .15)',
        'profile': '0 5px 36px 0px rgba(115, 109, 109)',
        'footer-logo': '0 4px 6px -1px rgba(69, 110, 50, 0.8), 0 2px 4px -1px rgba(69, 110, 50, 0.06)',
      },
      animation: {
        'hover': 'mover 2s infinite alternate'
      },
      keyframes: {
        mover: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' },
        }
      }
    }
  },
  plugins: [],
}