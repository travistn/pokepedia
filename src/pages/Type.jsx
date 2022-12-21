import React from 'react';
import { useParams } from 'react-router-dom';

import TypeAttackDefense from '../components/TypeAttackDefense';
import TypePokemonCard from '../components/TypePokemonCard';
import { useGetPokemonTypeQuery } from '../redux/slices/pokemonApi';

const Type = () => {
  const { typeId } = useParams();
  const { data: type } = useGetPokemonTypeQuery(typeId);

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-10/12 lg:w-7/12 mt-8 rounded-md flex flex-col p-4 gap-8 items-center'>
        <h1
          className={`flex flex-row items-center justify-center capitalize text-[26px] lg:text-[34px] font-bold bg-white text-${type?.name} w-full pt-2 pb-2 rounded-md`}>
          {type?.name}
          <span className='lowercase text-gray-400 text-[22px] lg:text-[26px] font-normal'>
            {'(type)'}
          </span>
        </h1>
        <div className='flex flex-row w-full items-center justify-center bg-white rounded-md gap-4 pt-2 pb-2'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-[20px] lg:text-[22px]'>{type?.pokemon.length}</h1>
            <p className='flex flex-row gap-1 text-[14px] justify-center flex-wrap'>
              <span className='capitalize'>{type?.name}</span>
              <span>type Pokémon</span>
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-[20px] lg:text-[22px]'>{type?.moves.length}</h1>
            <p className='flex flex-row gap-1 text-[14px] justify-center flex-wrap'>
              <span className='capitalize'>{type?.name}</span>
              <span>type moves</span>
            </p>
          </div>
        </div>
        <div className='p-4 bg-white rounded-md w-full'>
          <TypeAttackDefense type={type} />
        </div>
        <div className='bg-white rounded-md w-full p-8'>
          <h1 className={`capitalize text-center text-[22px] font-bold text-${type?.name}`}>
            {type?.name} Pokémon
          </h1>
          <div className='flex flex-col gap-6 mt-6'>
            {type?.pokemon.map((pokemon) => (
              <TypePokemonCard pokemon={pokemon?.pokemon.name} key={pokemon?.pokemon.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
