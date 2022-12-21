import React from 'react';
import { useParams } from 'react-router-dom';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import TypeCard from '../components/TypeCard';
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
          <span className='lowercase text-gray-400 text-[22px] font-normal'>{'(type)'}</span>
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
        <div className='flex flex-col gap-4 p-4 bg-white rounded-md w-full'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-[22px] lg:text-[26px]'>Attack pros & cons</h1>
            <div className='flex flex-row'>
              <AiFillCheckCircle className='text-[#4caf50] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
              <p className='ml-2 capitalize text-[15px] lg:text-[17px]'>
                {type?.name} <span className='lowercase'>moves are super-effective against:</span>
              </p>
            </div>
            <div className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
              {type?.damage_relations.double_damage_to.map((type) => (
                <TypeCard type={type} key={type?.name} />
              ))}
            </div>
            <div className='flex flex-row'>
              <AiFillCloseCircle className='text-[#f54f43] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
              <p className='ml-2 capitalize text-[15px] lg:text-[17px]'>
                {type?.name}{' '}
                <span className='lowercase'>moves are not very effective against:</span>
              </p>
            </div>
            <div className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
              {type?.damage_relations.half_damage_to.map((type) => (
                <TypeCard type={type} key={type?.name} />
              ))}
            </div>
            {type?.damage_relations.no_damage_to.length > 0 ? (
              <>
                <div className='flex flex-row'>
                  <AiFillCloseCircle className='text-[#f54f43] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
                  <p className='ml-2 capitalize text-[15px] lg:text-[17px]'>
                    {type?.name} <span className='lowercase'>moves have no effect on:</span>
                  </p>
                </div>
                <div className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
                  {type?.damage_relations.no_damage_to.map((type) => (
                    <TypeCard type={type} key={type?.name} />
                  ))}
                </div>
              </>
            ) : (
              ''
            )}
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-[22px] lg:text-[26px]'>Defense pros & cons</h1>
            <div className='flex flex-row'>
              <AiFillCheckCircle className='text-[#4caf50] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
              <p className='ml-2 text-[15px] lg:text-[17px]'>
                These types are not very effective against
                <span className='capitalize'>{` ${type?.name} Pokémon:`}</span>
              </p>
            </div>
            <div className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
              {type?.damage_relations.half_damage_from.map((type) => (
                <TypeCard type={type} key={type?.name} />
              ))}
            </div>
            <div className='flex flex-row'>
              <AiFillCloseCircle className='text-[#f54f43] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
              <p className='ml-2 text-[15px] lg:text-[17px]'>
                These types are super-effective against
                <span className='capitalize'>{` ${type?.name} Pokémon:`}</span>
              </p>
            </div>
            <div className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
              {type?.damage_relations.double_damage_from.map((type) => (
                <TypeCard type={type} key={type?.name} />
              ))}
            </div>
            {type?.damage_relations.no_damage_from.length > 0 ? (
              <>
                <div className='flex flex-row'>
                  <AiFillCheckCircle className='text-[#4caf50] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
                  <p className='ml-2 text-[15px] lg:text-[17px]'>
                    These types have no effect on
                    <span className='capitalize'>{` ${type?.name} Pokémon:`}</span>
                  </p>
                </div>
                <div className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
                  {type?.damage_relations.no_damage_from.map((type) => (
                    <TypeCard type={type} key={type?.name} />
                  ))}
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
