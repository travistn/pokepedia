export const getPokemonGenderRatio = (genderRate) => {
  if (genderRate !== -1) {
    return (
      <div className='flex flex-row font-normal'>
        <p className='text-blue-600'>{((8 - genderRate) / 8) * 100}% male</p>
        <span>{`, `}</span>
        <p className='text-pink-500 ml-1'>{(genderRate / 8) * 100}% female</p>
      </div>
    );
  } else {
    return 'Genderless';
  }
};
