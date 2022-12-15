import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPokeDexQuery } from '../redux/slices/pokemonApi';

const Pokedex = () => {
  const { pokeRegion } = useParams();

  const { data: pokedex } = useGetPokeDexQuery(pokeRegion);

  return <div></div>;
};

export default Pokedex;
