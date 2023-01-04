import React from 'react';
import { useParams } from 'react-router-dom';

import MoveData from '../components/MoveData';
import { useGetMoveTargetQuery, useGetPokemonMoveQuery } from '../redux/slices/pokemonApi';

const Move = () => {
  const { moveId } = useParams();
  const { data: move } = useGetPokemonMoveQuery(moveId);
  const { data: moveTargetData } = useGetMoveTargetQuery(move?.target.name);

  const moveTarget = moveTargetData?.descriptions.find((move) => move.language.name === 'en');

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8'>
        <div className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
          <h1 className='capitalize text-center font-bold text-[24px]'>
            {move?.name.split('-').join(' ')}
          </h1>
          <MoveData move={move} />
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-[20px]'>Effect</h1>
            <p className='text-[15px]'>{move?.effect_entries[0].effect}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-[20px]'>Move Target</h1>
            <p className='text-[15px]'>{moveTarget?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Move;
