module.exports = {
  purge: {
    options: {
      safelist: [
        'bg-primary-400', 'bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-indigo-400', 'bg-pink-400', 'bg-red-400', 'w-10', 'stroke-current',
        'text-primary-400', 'text-blue-400', 'text-purple-400', 'text-green-400', 'text-indigo-400', 'text-pink-400', 'text-red-400'
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffc592',
          200: '#ffb97c',
          300: '#ffae66',
          400: '#ffa251',
          500: '#ff973b',
          600: '#ff8b25',
        },
        background: '#0F1535',
        background2: '#1F2345',
        violet: '#801354',
        violet2: '#9B0ABF',
        card_background: '#303653',
        card_background2: '#3E3F64'
      },
      backgroundImage: () => ({
        'landing-pattern': 'url(\'~assets/images/background/landing_bg.svg\')',
        'triangle-pattern': 'url(\'~assets/images/background/triangle_background.svg\')',
        'circle-pattern': 'url(\'~assets/images/background/circle_background.svg\')',
        'rect-pattern': 'url(\'~assets/images/background/reactangle_background.svg\')',
        'ubuntu-xfce-modded': 'url(\'~assets/images/screenshots/ubuntu_xfce.png\')'
      }),
      fontFamily: {
        'sans': ['Open Sans']
      }
    }
  }
}