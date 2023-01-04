export const getMoveIntroduction = (generation) => {
  if (generation === 'generation-i') return 'Generation 1';
  if (generation === 'generation-ii') return 'Generation 2';
  if (generation === 'generation-iii') return 'Generation 3';
  if (generation === 'generation-iv') return 'Generation 4';
  if (generation === 'generation-v') return 'Generation 5';
  if (generation === 'generation-vi') return 'Generation 6';
  if (generation === 'generation-vii') return 'Generation 7';
  if (generation === 'generation-viii') return 'Generation 8';
};

export default getMoveIntroduction;
