import React from 'react';

import ItemsTable from '../components/ItemsTable';
import { useGetPokemonItemsQuery } from '../redux/slices/pokemonApi';

const Items = () => {
  const { data: items } = useGetPokemonItemsQuery();

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8'>
        <div className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
          <h1 className='text-[24px] font-bold text-center'>Pokémon Items</h1>
          <ItemsTable items={items?.results} />
        </div>
      </div>
    </div>
  );
};

export default Items;
