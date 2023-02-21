import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPokemonByNameQuery } from '../redux/slices/pokemonApi';

const TypePokemonCard = ({ pokemon }) => {
  const { data: pokemonData } = useGetPokemonByNameQuery(pokemon);
  const navigate = useNavigate();

  return (
    <article className='flex flex-row items-center lg:w-[180px]'>
      <img
        src={pokemonData?.sprites.front_default}
        className='h-[70px] lg:h-[80px] hover:cursor-pointer lg:hover:opacity-80'
        onClick={() => navigate(`/pokemon/${pokemonData?.name}`)}
      />
      <section className='flex flex-col ml-2'>
        <p
          className='capitalize text-[16px] font-bold text-[#3a80cd] hover:cursor-pointer hover:underline'
          onClick={() => navigate(`/pokemon/${pokemonData?.name}`)}>
          {pokemonData?.name}
        </p>
        <p
          className='text-[14px] opacity-80 hover:cursor-pointer hover:underline'
          onClick={() => navigate(`/pokemon/${pokemonData?.name}`)}>{`#${pokemonData?.id}`}</p>
        <section className='flex flex-row gap-1'>
          {pokemonData?.types.map((type) => (
            <p
              key={type?.type.name}
              className={`capitalize text-${type?.type.name} text-[15px] hover:cursor-pointer hover:underline`}
              onClick={() => navigate(`/type/${type?.type.name}`)}>
              {type?.type.name}
            </p>
          ))}
        </section>
      </section>
    </article>
  );
};

export default TypePokemonCard;
