export const getMoveContact = (category) => {
  if (category === 'special') return 'No';
  if (category === 'physical') return 'Yes';
  if (category === 'status') return 'N/A';
};
