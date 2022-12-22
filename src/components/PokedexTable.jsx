import React from 'react';
import { useNavigate } from 'react-router-dom';

import PokemonSprite from './PokemonSprite';
import PokedexTypeCard from './PokedexTypeCard';

const PokedexTable = ({ pokedex }) => {
  const navigate = useNavigate();

  return (
    <table className='w-full border-black border-2 bg-white table-auto'>
      <thead className='bg-gray-800'>
        <tr className='text-sm text-white lg:text-[16px]'>
          <th scope='col' className='text-left pl-1'>
            Dex #
          </th>
          <th scope='col' className='text-left pl-6 lg:pl-[5rem]'>
            Sprite
          </th>
          <th scope='col' className='text-left'>
            Pokemon
          </th>
          <th scope='col' className='text-center'>
            Type
          </th>
        </tr>
      </thead>
      <tbody>
        {pokedex?.map((pokemon) => (
          <tr key={pokemon?.pokemon_species.name} className='border-b-2 border-black text-sm'>
            <td className='pl-1 lg:text-[18px]'>#{pokemon?.entry_number}</td>
            <td className='text-center lg:pl-8'>
              <div className='h-[90px] w-[90px] lg:h-[140px] lg:w-[140px] flex flex-col'>
                <PokemonSprite pokemon={pokemon?.pokemon_species.name} />
              </div>
            </td>
            <td
              className='capitalize text-left lg:text-[18px] hover:cursor-pointer  hover:underline hover:text-blue-800'
              onClick={() => navigate(`/pokemon/${pokemon?.pokemon_species.name}`)}>
              {pokemon?.pokemon_species.name}
            </td>
            <td>
              <PokedexTypeCard pokemon={pokemon?.pokemon_species.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokedexTable;
