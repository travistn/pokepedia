import React from 'react';

import { useGetPokemonAbilityQuery } from '../redux/slices/pokemonApi';

const GetPokemonWithAbility = ({ ability }) => {
  const { data: abilityData } = useGetPokemonAbilityQuery(ability);

  return <p>{abilityData?.pokemon.length}</p>;
};

export default GetPokemonWithAbility;
