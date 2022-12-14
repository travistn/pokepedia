/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#aaaa99',
        fire: '#ff4422',
        water: '#3399ff',
        electric: '#ffcc33',
        grass: '#77cc55',
        ice: '#96D9D6',
        fighting: '#bb5544',
        poison: '#aa5599',
        ground: '#ddbb55',
        flying: '#8899ff',
        psychic: '#ff5599',
        bug: '#aabb22',
        rock: '#bbaa66',
        ghost: '#6666bb',
        dragon: '#7766ee',
        dark: '#775544',
        steel: '#aaaabb',
        fairy: '#ee99ee',
        'sky-blue': '#d2e1f2',
        'dark-light-blue': '#ACC8E5',
      },
      backgroundImage: {
        'poke-bg': 'url(../src/assets/poke-bg.png)',
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text)-./,
    },
  ],
  plugins: [],
};
