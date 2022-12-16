import React from 'react';

import PokemonSprite from './PokemonSprite';
import PokedexTypeCard from './PokedexTypeCard';

const PokedexTable = ({ pokedex }) => {
  return (
    <table className='w-full border-black border-2 bg-white table-auto'>
      <thead className='bg-gray-800'>
        <tr className='text-sm text-white'>
          <th scope='col' className='text-left pl-1'>
            Dex #
          </th>
          <th scope='col' className='text-left pl-6'>
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
            <td className='pl-1'>#{pokemon?.entry_number}</td>
            <td className='text-center'>
              {<PokemonSprite pokemon={pokemon?.pokemon_species.name} />}
            </td>
            <td className='capitalize text-left'>{pokemon?.pokemon_species.name}</td>
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
