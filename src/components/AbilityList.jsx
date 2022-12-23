import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GetAbilityDescription from '../reuseables/GetAbilityDescription';
import GetPokemonWithAbility from '../reuseables/GetPokemonWithAbility';
import { useGetPokemonAbilitiesQuery } from '../redux/slices/pokemonApi';

const AbilityList = () => {
  const { data: abilities } = useGetPokemonAbilitiesQuery();

  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th
              scope='col'
              className='text-[15px] lg:text-[17px] font-bold text-gray-900 p-3 text-left'>
              Name
            </th>
            <th
              scope='col'
              className='text-[15px] lg:text-[17px] font-bold text-gray-900 p-3 text-left'>
              Pokémon
            </th>
            <th
              scope='col'
              className='text-[15px] lg:text-[17px] font-bold text-gray-900 p-3 text-left'>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {abilities?.results
            .slice(0, 327)
            .sort((a, b) => (a?.name.split('-').join(' ') < b?.name.split('-').join(' ') ? -1 : 1))
            .map((ability) => (
              <tr className='border-b' key={ability?.name}>
                <td className='p-3 text-[15px] font-bold capitalize'>
                  {ability?.name.split('-').join(' ')}
                </td>
                <td className='p-3 text-[15px] text-center'>
                  <GetPokemonWithAbility ability={ability?.name} />
                </td>
                <td className='p-3 text-[15px]'>
                  <GetAbilityDescription ability={ability?.name} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbilityList;
