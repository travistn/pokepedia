import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPokemonTypeQuery } from '../redux/slices/pokemonApi';

const Type = () => {
  const { typeId } = useParams();

  const { data: type } = useGetPokemonTypeQuery(typeId);

  return <div></div>;
};

export default Type;
