import React from 'react';

import NaturesTable from '../components/NaturesTable';
import Loading from '../components/Loading';
import { useGetPokemonNaturesQuery, useGetBerryFlavorsQuery } from '../redux/slices/pokemonApi';
import { getBerryFlavors } from '../reuseables/getBerryFlavors';

const Natures = () => {
  const { data: natures, isLoading } = useGetPokemonNaturesQuery();
  const { data: berryFlavors } = useGetBerryFlavorsQuery();

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <main className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8 items-center'>
        {isLoading ? (
          <Loading />
        ) : (
          <section className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
            <h1 className='text-[24px] lg:text-[30px] font-bold text-center'>Pokémon Natures</h1>
            <section className='flex flex-col lg:flex-row w-full gap-8 mt-4 lg:mt-8'>
              <section className='flex flex-col gap-8 lg:w-[55%] lg:pl-4'>
                <section className='flex flex-col gap-4'>
                  <h2 className='font-bold text-[20px] lg:text-[28px]'>Description</h2>
                  <p className='text-[15px] lg:text-[16px]'>
                    Rather than just being a superficial personality, Natures actually affect the
                    growth of a Pokémon. Each nature increases one of its stats by 10% and decreases
                    one by 10% (by the time it reaches level 100). Five natures increase and
                    decrease the same stat and therefore have no effect.
                  </p>
                  <p className='text-[15px] lg:text-[16px]'>
                    In most cases it is preferable to have a nature that decreases either Attack or
                    Special Attack for Pokémon whose strengths are the opposite type of attack.
                  </p>
                </section>
                <section className='flex flex-col gap-4'>
                  <h2 className='font-bold text-[20px] lg:text-[28px]'>Berries</h2>
                  <p className='text-[15px] lg:text-[16px]'>
                    A Pokémon's nature also determines the berries it likes and dislikes. Each type
                    of berry is linked to one stat:
                  </p>
                  <section className='flex flex-col gap-1'>
                    {berryFlavors?.results.map((berry) => (
                      <section
                        className='flex flex-row gap-1 text-[15px] lg:text-[16px]'
                        key={berry?.name}>
                        <p className='capitalize'>{`• ${berry?.name} -`}</p>
                        {getBerryFlavors(berry?.name)}
                      </section>
                    ))}
                  </section>
                  <p className='text-[15px] lg:text-[16px]'>
                    The berry a Pokémon likes is the corresponding flavour of its raised stat, while
                    the berry it dislikes is the flavour of its lowered stat.
                  </p>
                  <p className='text-[15px] lg:text-[16px]'>
                    For example, a Pokémon of Sassy nature will like Bitter berries (Special Defense
                    is raised) and dislike Sweet berries (Speed is lowered).
                  </p>
                </section>
              </section>
              <article className='flex flex-col gap-4 lg:w-[45%]'>
                <h2 className='font-bold text-[20px] lg:text-[28px]'>Natures</h2>
                <NaturesTable natures={natures?.results} />
              </article>
            </section>
          </section>
        )}
      </main>
    </div>
  );
};

export default Natures;
