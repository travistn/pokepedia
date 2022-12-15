import React from 'react';

const PokedexDirectory = () => {
  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='flex flex-col items-center w-10/12 mt-8 gap-8'>
        <h1 className='text-[20px] font-bold bg-white w-full text-center rounded-md pt-2 pb-2'>
          Pokémon Pokédex
        </h1>
        <p className='bg-white p-4 w-full rounded-md'>
          The Pokédex section has a wealth of information on all the Pokémon creatures from the
          entire game series. On the main list pages you can see the various stats of each Pokémon.
          Click a Pokémon's name to see a detailed page with Pokédex data.
        </p>
      </div>
    </div>
  );
};

export default PokedexDirectory;
