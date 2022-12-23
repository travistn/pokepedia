import React from 'react';

import { useGetPokemonAbilityQuery } from '../redux/slices/pokemonApi';

const GetAbilityDescription = ({ ability }) => {
  const { data: abilityData } = useGetPokemonAbilityQuery(ability);

  const findAbility = abilityData?.effect_entries.find((entry) => entry?.language.name === 'en');

  return (
    <>
      <p>{findAbility?.effect}</p>
    </>
  );
};

export default GetAbilityDescription;
