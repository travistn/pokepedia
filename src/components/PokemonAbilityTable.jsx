import React from 'react';
import { useNavigate } from 'react-router-dom';

import PokemonSprite from './PokemonSprite';

const PokemonAbilityTable = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <table className='w-full'>
      <thead className='border-b'>
        <tr>
          <th
            scope='col'
            className='text-[15px] lg:text-[17px] font-bold text-gray-900 px-6 py-4 text-left'>
            #
          </th>
          <th
            scope='col'
            className='text-[15px] lg:text-[17px] font-bold text-gray-900 px-6 py-4 text-left'>
            Sprite
          </th>
          <th
            scope='col'
            className='text-[15px] lg:text-[17px] font-bold text-gray-900 px-6 py-4 text-left'>
            Pokémon
          </th>
        </tr>
      </thead>
      <tbody>
        {pokemon?.map((poke) => (
          <tr className='border-b' key={poke?.pokemon.name}>
            <td
              className='px-6 py-4 text-[15px] lg:text-[17px] text-gray-900 hover:cursor-pointer hover:underline'
              onClick={() => navigate(`/pokemon/${poke?.pokemon.name}`)}>
              {poke?.pokemon.url.substring(34).split('/').join('')}
            </td>
            <td>
              <div className='h-[70px] w-[70px] lg:h-[90px] lg:w-[90px]'>
                <PokemonSprite pokemon={poke?.pokemon.name} />
              </div>
            </td>
            <td
              className='text-[15px] lg:text-[17px] capitalize text-[#3a80cd] font-bold px-6 py-4 hover:cursor-pointer hover:underline'
              onClick={() => navigate(`/pokemon/${poke?.pokemon.name}`)}>
              {poke?.pokemon.name.split('-').join(' ')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonAbilityTable;
