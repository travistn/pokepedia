import React from 'react';
import { useParams } from 'react-router-dom';

import PokemonAbilityTable from '../components/PokemonAbilityTable';
import Loading from '../components/Loading';
import { useGetPokemonAbilityQuery } from '../redux/slices/pokemonApi';

const Ability = () => {
  const { abilityId } = useParams();
  const { data: ability, isLoading } = useGetPokemonAbilityQuery(abilityId);

  const abilityEffect = ability?.effect_entries.find((entry) => entry?.language.name === 'en');

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8'>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
              <h1 className='capitalize text-[24px] lg:text-[30px] font-bold text-center'>
                {ability?.name.split('-').join(' ')}
                <span className='lowercase text-[20px] lg:text-[24px] opacity-60'>
                  {' (ability)'}
                </span>
              </h1>
              <div className='flex flex-col gap-2'>
                <h1 className='text-[20px] lg:text-[26px] font-bold'>Effect</h1>
                <p className='text-[15px] lg:text-[16px]'>{abilityEffect?.effect}</p>
              </div>
            </div>
            <div className='flex flex-col gap-4 bg-white rounded-md p-4'>
              <h1 className='font-bold text-[20px] lg:text-[26px]'>
                Pokémon with{' '}
                <span className='capitalize'>{ability?.name.split('-').join(' ')}</span>
              </h1>
              <PokemonAbilityTable
                pokemon={ability?.pokemon.filter((ability) => ability?.is_hidden === false)}
              />
            </div>
            <div className='flex flex-col gap-4 bg-white rounded-md p-4'>
              <h1 className='font-bold text-[20px] lg:text-[26px] capitalize'>
                {`${ability?.name.split('-').join(' ')} `}
                <span className='lowercase'>as a hidden ability</span>
              </h1>
              <PokemonAbilityTable
                pokemon={ability?.pokemon.filter((ability) => ability?.is_hidden === true)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Ability;
