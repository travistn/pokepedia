import React from 'react';

import AbilityList from '../components/AbilityList';

const AbilityDirectory = () => {
  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <main className='w-10/12 lg:w-7/12 mt-8 flex flex-col gap-8'>
        <section className='w-full flex flex-col gap-6 bg-white rounded-md p-4'>
          <h1 className='text-[24px] lg:text-[28px] font-bold text-center'>Pokémon Abilities</h1>
          <p className='text-[15px] lg:text-[16px]'>
            Each ability from the Pokémon games is listed below, along with a short description and
            how many Pokémon can have that ability. Click an ability name to see the Pokémon that
            can learn it.
          </p>
        </section>
        <section className='w-full flex flex-col gap-4 bg-white rounded-md p-4'>
          <h2 className='text-[20px] lg:text-[26px] font-bold text-center'>Ability List</h2>
          <AbilityList />
        </section>
      </main>
    </div>
  );
};

export default AbilityDirectory;
