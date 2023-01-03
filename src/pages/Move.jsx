import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPokemonMoveQuery } from '../redux/slices/pokemonApi';

const Move = () => {
  const { moveId } = useParams();
  const { data: move } = useGetPokemonMoveQuery(moveId);

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8'>
        <div className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
          <h1 className='capitalize text-center font-bold text-[24px]'>
            {move?.name.split('-').join(' ')}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Move;
