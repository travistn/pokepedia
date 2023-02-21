import React from 'react';

import MovesTable from '../components/MovesTable';
import Loading from '../components/Loading';
import { useGetPokemonMovesQuery } from '../redux/slices/pokemonApi';

const Moves = () => {
  const { data: moves, isLoading } = useGetPokemonMovesQuery();

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <main className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8 items-center'>
        {isLoading ? (
          <Loading />
        ) : (
          <section className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
            <h1 className='font-bold text-[24px] lg:text-[30px] text-center'>Pokémon Moves</h1>
            <MovesTable moves={moves?.results} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Moves;
