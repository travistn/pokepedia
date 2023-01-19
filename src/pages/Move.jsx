import React from 'react';
import { useParams } from 'react-router-dom';

import MoveData from '../components/MoveData';
import Loading from '../components/Loading';
import { useGetMoveTargetQuery, useGetPokemonMoveQuery } from '../redux/slices/pokemonApi';

const Move = () => {
  const { moveId } = useParams();
  const { data: move, isLoading } = useGetPokemonMoveQuery(moveId);
  const { data: moveTargetData } = useGetMoveTargetQuery(move?.target.name);

  const moveTarget = moveTargetData?.descriptions.find((move) => move.language.name === 'en');

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div
        className={`bg-${move?.type.name} w-10/12 lg:w-7/12 mt-8 flex flex-col p-4 rounded-md items-center`}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='w-full flex flex-col gap-6 lg:gap-8 bg-white rounded-md p-4'>
            <h1 className='capitalize text-center font-bold text-[24px] lg:text-[30px]'>
              {move?.name.split('-').join(' ')}
            </h1>
            <div className='flex flex-col lg:flex-row gap-6 w-full lg:justify-center'>
              <div className='lg:w-full flex flex-col lg:items-center'>
                <MoveData move={move} />
              </div>
              <div className='flex flex-col gap-6 lg:w-full'>
                <div className='flex flex-col gap-2'>
                  <h1 className='font-bold text-[20px] lg:text-[24px]'>Effect</h1>
                  <p className='text-[15px] lg:text-[16px]'>
                    {move?.effect_entries[0].effect.replace('$effect_chance', move?.effect_chance)}
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h1 className='font-bold text-[20px] lg:text-[24px]'>Move Target</h1>
                  <p className='text-[15px] lg:text-[16px]'>{moveTarget?.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Move;
