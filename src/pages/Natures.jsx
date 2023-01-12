import React from 'react';

import NaturesTable from '../components/NaturesTable';
import { useGetPokemonNaturesQuery } from '../redux/slices/pokemonApi';

const Natures = () => {
  const { data: natures } = useGetPokemonNaturesQuery();

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8'>
        <div className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
          <h1 className='text-[24px] lg:text-[30px] font-bold text-center'>Pokémon Natures</h1>
          <NaturesTable natures={natures?.results} />
        </div>
      </div>
    </div>
  );
};

export default Natures;
