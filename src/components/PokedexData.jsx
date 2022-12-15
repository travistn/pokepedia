import React from 'react';

import TypeCard from './TypeCard';
import { decimeterToFeet } from '../reuseables/decimeterToFeet';
import { hectogramsToPounds } from '../reuseables/hectogramsToPounds';
import { getPokemonGenderRatio } from '../reuseables/getPokemonGenderRatio';

const PokedexData = ({ pokemon, species }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-center text-[20px] lg:text-[24px] font-bold'>Pokédex Data</h1>
      <p className='font-bold lg:text-[18px]'>
        National No.<span className='font-normal'> {pokemon?.id}</span>
      </p>
      <div className='flex flex-row gap-1 items-center'>
        <p className='font-bold lg:text-[18px]'>Type:</p>
        {pokemon?.types.map((type) => (
          <TypeCard type={type.type} key={type?.type.name} />
        ))}
      </div>
      <p className='flex flex-row gap-1 font-bold lg:text-[18px]'>
        Species:
        <span className='font-normal'>
          {species?.genera.find((item) => item.language.name === 'en').genus}
        </span>
      </p>
      <p className='flex flex-row gap-1 font-bold lg:text-[18px]'>
        Height:
        <span className='font-normal'>{decimeterToFeet(pokemon?.height)} ft.</span>
      </p>
      <p className='flex flex-row gap-1 font-bold lg:text-[18px]'>
        Weight:
        <span className='font-normal'>{hectogramsToPounds(pokemon?.weight)} lbs.</span>
      </p>
      <div className='flex flex-row items-center'>
        <p className='font-bold lg:text-[18px]'>Abilities:</p>
        <div className='flex flex-col ml-2'>
          {pokemon?.abilities.map((ability, index) => (
            <p key={index} className='capitalize'>
              {ability?.ability.name.split('-').join(' ') +
                (ability?.is_hidden === true ? '(hidden ability)' : '')}
            </p>
          ))}
        </div>
      </div>
      <p className='flex flex-row gap-1 font-bold lg:text-[18px]'>
        Capture rate:
        <span className='font-normal'>{species?.capture_rate}</span>
      </p>
      <div className='flex flex-row'>
        <div className='flex flex-row gap-1 font-bold lg:text-[18px]'>
          Gender: {getPokemonGenderRatio(species?.gender_rate)}
        </div>
      </div>
    </div>
  );
};

export default PokedexData;
