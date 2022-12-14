import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPokemonByNameQuery, useGetPokemonGenerationQuery } from '../redux/slices/pokemonApi';

const Pokemon = () => {
  const { pokeId } = useParams();

  const { data: pokemon } = useGetPokemonByNameQuery(pokeId);
  const { data: generation } = useGetPokemonGenerationQuery(pokemon?.id);

  return (
    <div className='h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='bg-white w-10/12 mt-8 rounded-md flex flex-col items-center p-4 gap-4'>
        <h2 className='capitalize text-[22px] font-bold'>{pokemon?.name}</h2>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} className='h-[240px]' />
        <p>
          <span className='capitalize'>{pokemon?.name}</span> is a{' '}
          {pokemon?.types.map((type, index) => (
            <span key={index} className={`capitalize text-${type?.type.name}`}>
              {(index ? '/' : '') + type?.type.name}
            </span>
          ))}{' '}
          type pokemon introduced in{' '}
          {generation?.names.find((item) => item.language.name === 'en').name}.
        </p>
      </div>
    </div>
  );
};

export default Pokemon;
