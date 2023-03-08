import React from 'react';

import PokemonCard from '../components/PokemonCard';
import TypeCard from '../components/TypeCard';
import { useGetPokemonByNameQuery, useGetPokemonTypesQuery } from '../redux/slices/pokemonApi';

const Home = () => {
  const { data: pokemon } = useGetPokemonByNameQuery('spheal');
  const { data: types } = useGetPokemonTypesQuery();

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <main className='flex flex-col mt-8 w-10/12 items-center gap-8 lg:bg-dark-light-blue lg:p-8 lg:rounded-md xl:w-7/12'>
        <section className='bg-white rounded-md p-4 w-full lg:text-center lg:w-11/12'>
          <h1 className='font-bold lg:text-[20px]'>
            Welcome to PokéPedia!{' '}
            <span className='font-normal lg:text-[18px]'>
              We believe in making Pokémon information as clear and easy to digest as possible.
            </span>
          </h1>
        </section>
        <section className='flex flex-col items-center bg-white w-full rounded-md p-4 lg:w-[60%]'>
          <h2 className='font-bold text-[18px] lg:text-[22px]'>Pokémon of the day</h2>
          <div className='mt-4'>
            <PokemonCard pokemon={pokemon} />
          </div>
        </section>
        <article className='flex flex-col items-center gap-4 lg:w-[60%] bg-white rounded-md p-4 lg:pt-8 lg:pb-8'>
          <h2 className='font-bold text-[18px] lg:text-[22px]'>Pokémon Types</h2>
          <article className='flex flex-row flex-wrap gap-1 flex-1 justify-center'>
            {types?.results?.map((type) => (
              <TypeCard type={type} key={type?.name} />
            ))}
          </article>
        </article>
      </main>
    </div>
  );
};

export default Home;
