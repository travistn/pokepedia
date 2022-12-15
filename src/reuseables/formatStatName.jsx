export const formatStatName = (stat) => {
  if (stat === 'hp') return 'HP';
  if (stat === 'attack') return 'Attack';
  if (stat === 'defense') return 'Defense';
  if (stat === 'special-attack') return 'Sp. Atk';
  if (stat === 'special-defense') return 'Sp. Def';
  if (stat === 'speed') return 'Speed';
};
