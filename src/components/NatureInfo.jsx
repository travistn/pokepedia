import React from 'react';

import { useGetPokemonNatureQuery } from '../redux/slices/pokemonApi';

const NatureInfo = ({ nature, stat }) => {
  const { data: natureData } = useGetPokemonNatureQuery(nature);

  const getStatEffect = (nature, stat) => {
    if (nature?.increased_stat === null) return <p>None</p>;

    if (stat === 'increase')
      return (
        <p className='capitalize text-blue-700'>
          {nature?.increased_stat?.name.split('-').join(' ')}
        </p>
      );

    if (stat === 'decrease')
      return (
        <p className='capitalize text-red-600'>
          {nature?.decreased_stat?.name.split('-').join(' ')}
        </p>
      );
    if (nature?.increased_stat === null) {
      return <p>None</p>;
    }
  };

  return <>{getStatEffect(natureData, stat)}</>;
};

export default NatureInfo;
