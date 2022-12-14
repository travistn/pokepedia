import React from 'react';
import { useParams } from 'react-router-dom';

import {
  useGetPokemonByNameQuery,
  useGetPokemonGenerationQuery,
  useGetPokemonSpeciesQuery,
} from '../redux/slices/pokemonApi';
import PokedexData from '../components/PokedexData';

const Pokemon = () => {
  const { pokeId } = useParams();

  const { data: pokemon } = useGetPokemonByNameQuery(pokeId);
  const { data: generation } = useGetPokemonGenerationQuery(pokemon?.id);
  const { data: species } = useGetPokemonSpeciesQuery(pokemon?.id);

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div
        className={`bg-${pokemon?.types[0].type.name} w-10/12 lg:w-7/12 mt-8 rounded-md flex flex-col p-4 gap-4 items-center`}>
        <div className='flex flex-col items-center bg-white rounded-md p-4 w-full'>
          <h2 className='capitalize text-[24px] lg:text-[30px] font-bold'>{pokemon?.name}</h2>
          <img
            src={pokemon?.sprites.other['official-artwork'].front_default}
            className='h-[240px] lg:h-[300px]'
          />
          <p className='lg:text-[18px]'>
            <span className='capitalize'>{pokemon?.name}</span> is a{' '}
            {pokemon?.types.map((type, index) => (
              <span key={index} className={`capitalize text-${type?.type.name}`}>
                {(index ? '/' : '') + type?.type.name}
              </span>
            ))}{' '}
            type pokemon introduced in{' '}
            {generation?.names.find((item) => item.language.name === 'en').name}. It is known as the{' '}
            {species?.genera.find((item) => item.language.name === 'en').genus}.
          </p>
        </div>
        <div className='bg-white w-full rounded-md p-4'>
          <PokedexData pokemon={pokemon} species={species} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
