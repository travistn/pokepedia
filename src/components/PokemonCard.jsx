import React from 'react';

import TypeCard from './TypeCard';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={pokemon?.sprites.other['official-artwork'].front_default}
        className='h-[170px] lg:h-[220px]'
      />
      <p className='text-[14px] lg:text-[15px] opacity-70'>{`#${pokemon?.id}`}</p>
      <h4 className='capitalize text-blue-600 font-bold text-[18px] lg:text-[22px]'>
        {pokemon?.name}
      </h4>
      <div className='flex flex-row gap-1 mt-1'>
        {pokemon?.types.map((type) => (
          <TypeCard type={type?.type} key={type?.type.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
