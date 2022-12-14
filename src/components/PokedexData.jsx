import React from 'react';

import TypeCard from './TypeCard';
import { decimeterToFeet } from '../reuseables/decimeterToFeet';
import { hectogramsToPounds } from '../reuseables/hectogramsToPounds';

const PokedexData = ({ pokemon, species }) => {
  console.log(pokemon);

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-center text-[20px] font-bold'>Pokédex Data</h1>
      <p>
        National No.<span className='font-bold'> {pokemon?.id}</span>
      </p>
      <div className='flex flex-row gap-1 items-center'>
        Type:
        {pokemon?.types.map((type) => (
          <TypeCard type={type.type} key={type?.type.name} />
        ))}
      </div>
      <p>Species: {species?.genera.find((item) => item.language.name === 'en').genus}</p>
      <p>Height: {decimeterToFeet(pokemon?.height)} ft.</p>
      <p>Weight: {hectogramsToPounds(pokemon?.weight)} lbs.</p>
      <div className='flex flex-row items-center'>
        <p>Abilities:</p>
        <div className='flex flex-col ml-2'>
          {pokemon?.abilities.map((ability, index) => (
            <p key={index} className='capitalize'>
              {ability?.ability.name.split('-').join(' ') +
                (ability?.is_hidden === true ? '(hidden ability)' : '')}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexData;
