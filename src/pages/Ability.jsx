import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPokemonAbilityQuery } from '../redux/slices/pokemonApi';

const Ability = () => {
  const { abilityId } = useParams();
  const { data: ability } = useGetPokemonAbilityQuery(abilityId);

  const abilityEffect = ability?.effect_entries.find((entry) => entry?.language.name === 'en');

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8'>
        <div className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
          <h1 className='capitalize text-[22px] font-bold text-center'>
            {ability?.name.split('-').join(' ')}
            <span className='lowercase text-[20px] opacity-60'>{' (ability)'}</span>
          </h1>
          <div className='flex flex-col gap-2'>
            <h1 className='text-[20px] font-bold'>Effect</h1>
            <p className='text-[15px]'>{abilityEffect?.effect}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ability;
