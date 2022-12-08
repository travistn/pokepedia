import React from 'react';

import TypeCard from './TypeCard';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} className='h-[170px]' />
      <p className='text-[14px] opacity-70'>{`#${pokemon?.id}`}</p>
      <h4 className='capitalize text-blue-600 font-bold text-[18px]'>{pokemon?.name}</h4>
      <div className='flex flex-row gap-1 mt-1'>
        {pokemon?.types.map((type) => (
          <TypeCard type={type?.type} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
