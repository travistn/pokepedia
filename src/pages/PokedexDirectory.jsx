import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexDirectory = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='flex flex-col items-center w-10/12 mt-8 gap-8 lg:w-7/12 lg:bg-dark-light-blue rounded-md lg:p-8'>
        <div className='w-full flex flex-col bg-white rounded-md p-4'>
          <h1 className='text-[22px] lg:text-[26px] font-bold text-center'>Pokémon Pokédex</h1>
          <p className='mt-4'>
            The Pokédex section has a wealth of information on all the Pokémon creatures from the
            entire game series. On the main list pages you can see the various stats of each
            Pokémon. Click a Pokémon's name to see a detailed page with Pokédex data.
          </p>
        </div>
        <div className='w-full bg-white rounded-md flex flex-col p-4 gap-4 lg:w-[60%]'>
          <h1 className='font-bold text-[20px] lg:text-[24px] text-center'>Native Pokédexes</h1>
          <p>
            Each game has a native Pokédex with the Pokémon from that region. The national dex lists
            all Pokémon in their original order.
          </p>
          <div className='flex flex-col gap-2'>
            <p
              className='font-bold hover:cursor-pointer hover:underline lg:text-[18px]'
              onClick={() => navigate('/pokedex/kanto')}>
              Generation I{' '}
              <span className='text-[15px] lg:-[16px] font-normal opacity-70'>{'(Kanto)'}</span>
            </p>
            <p
              className='font-bold hover:cursor-pointer hover:underline lg:text-[18px]'
              onClick={() => navigate('/pokedex/johto')}>
              Generation II{' '}
              <span className='text-[15px] lg:-[16px] font-normal opacity-70'>{'(Johto)'}</span>
            </p>
            <p
              className='font-bold hover:cursor-pointer hover:underline lg:text-[18px]'
              onClick={() => navigate('/pokedex/hoenn')}>
              Generation III{' '}
              <span className='text-[15px] lg:-[16px] font-normal opacity-70'>{'(Hoenn)'}</span>
            </p>
            <p
              className='font-bold hover:cursor-pointer hover:underline lg:text-[18px]'
              onClick={() => navigate('/pokedex/sinnoh')}>
              Generation IV{' '}
              <span className='text-[15px] lg:-[16px] font-normal opacity-70'>{'(Sinnoh)'}</span>
            </p>
            <p
              className='font-bold hover:cursor-pointer hover:underline lg:text-[18px]'
              onClick={() => navigate('/pokedex/unova')}>
              Generation V{' '}
              <span className='text-[15px] lg:-[16px] font-normal opacity-70'>{'(Unova)'}</span>
            </p>
            <p
              className='font-bold hover:cursor-pointer hover:underline lg:text-[18px]'
              onClick={() => navigate('/pokedex/kalos')}>
              Generation VI{' '}
              <span className='text-[15px] lg:-[16px] font-normal opacity-70'>{'(Kalos)'}</span>
            </p>
            <p
              className='font-bold hover:cursor-pointer hover:underline lg:text-[18px]'
              onClick={() => navigate('/pokedex/alola')}>
              Generation VII{' '}
              <span className='text-[15px] lg:-[16px] font-normal opacity-70'>{'(Alola)'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexDirectory;
