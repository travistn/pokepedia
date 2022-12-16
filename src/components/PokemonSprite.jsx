import React from 'react';

import { useGetPokemonByNameQuery } from '../redux/slices/pokemonApi';

const PokemonSprite = ({ pokemon }) => {
  const { data: pokemonData } = useGetPokemonByNameQuery(pokemon);

  return (
    <>
      <img src={pokemonData?.sprites.front_default} className='h-[90px] w-[90px]' />
    </>
  );
};

export default PokemonSprite;
