export const getStatPercentage = (stat) => {
  return +((stat / 255) * 100).toFixed(0);
};
