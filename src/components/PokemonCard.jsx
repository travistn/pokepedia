import React from 'react';
import { useNavigate } from 'react-router-dom';

import TypeCard from './TypeCard';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <article className='flex flex-col items-center'>
      <img
        src={pokemon?.sprites.other['official-artwork'].front_default}
        className='h-[170px] lg:h-[220px] hover:cursor-pointer hover:opacity-90'
        onClick={() => navigate(`/pokemon/${pokemon?.name}`)}
      />
      <p
        className='text-[14px] lg:text-[15px] opacity-70 hover:underline hover:cursor-pointer'
        onClick={() => navigate(`/pokemon/${pokemon?.id}`)}>
        {`#${pokemon?.id}`}
      </p>
      <h1
        className='capitalize text-blue-600 font-bold text-[18px] lg:text-[22px] hover:underline hover:cursor-pointer'
        onClick={() => navigate(`/pokemon/${pokemon?.name}`)}>
        {pokemon?.name}
      </h1>
      <article className='flex flex-row gap-1 mt-1'>
        {pokemon?.types.map((type) => (
          <TypeCard type={type?.type} key={type?.type.name} />
        ))}
      </article>
    </article>
  );
};

export default PokemonCard;
