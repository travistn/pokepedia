export const formatRegionName = (region) => {
  if (region === 'kanto') return 'kanto';
  if (region === 'johto') return 'original-johto';
  if (region === 'hoenn') return 'hoenn';
  if (region === 'sinnoh') return 'original-sinnoh';
  if (region === 'unova') return 'original-unova';
  if (region === 'kalos') return 'kalos-central';
  if (region === 'alola') return 'original-alola';
};

export const formatRegionTitle = (region) => {
  if (region === 'kanto') return 'Kanto Pokédex (Generation I)';
  if (region === 'johto') return 'Johto Pokédex (Generation II)';
  if (region === 'hoenn') return 'Hoenn Pokédex (Generation III)';
  if (region === 'sinnoh') return 'Sinnoh Pokédex (Generation IV)';
  if (region === 'unova') return 'Unova Pokédex (Generation V)';
  if (region === 'kalos') return 'Kalos Pokédex (Generation VI)';
  if (region === 'alola') return 'Alola Pokédex (Generation VII)';
};
