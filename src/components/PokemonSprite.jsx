import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPokemonByNameQuery } from '../redux/slices/pokemonApi';

const PokemonSprite = ({ pokemon }) => {
  const { data: pokemonData } = useGetPokemonByNameQuery(pokemon);
  const navigate = useNavigate();

  return (
    <>
      <img
        src={pokemonData?.sprites.front_default}
        className='h-[90px] w-[90px] lg:h-[140px] lg:w-[140px] hover:cursor-pointer'
        onClick={() => navigate(`/pokemon/${pokemonData?.name}`)}
      />
    </>
  );
};

export default PokemonSprite;
