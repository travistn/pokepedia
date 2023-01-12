export const getBerryFlavors = (berry) => {
  if (berry === 'spicy') return 'Attack';
  if (berry === 'dry') return 'Special Attack';
  if (berry === 'sweet') return 'Speed';
  if (berry === 'bitter') return 'Special Defense';
  if (berry === 'sour') return 'Defense';
};
