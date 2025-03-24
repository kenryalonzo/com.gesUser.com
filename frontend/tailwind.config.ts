// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{html,js,ts}'],
    darkMode: 'class',
    theme: {
      extend: {
        animation: {
          'pop-in': 'pop-in 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite'
        },
        keyframes: {
          'pop-in': {
            '0%': { transform: 'scale(0)', opacity: '0' },
            '80%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)', opacity: '1' }
          },
          'ping-slow': {
            '75%, 100%': { transform: 'scale(2)', opacity: '0' }
          }
        }
      }
    },
    plugins: []
  }