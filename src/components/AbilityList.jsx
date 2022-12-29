import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import GetAbilityDescription from '../reuseables/GetAbilityDescription';
import GetPokemonWithAbility from '../reuseables/GetPokemonWithAbility';
import { useGetPokemonAbilitiesQuery } from '../redux/slices/pokemonApi';

const AbilityList = () => {
  const [abilities, setAbilities] = useState([]);
  const [isDescending, setIsDescending] = useState(false);
  const [search, setSearch] = useState('');

  const { data: abilitiesData } = useGetPokemonAbilitiesQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const getAbility = async () => {
      abilitiesData?.results.map(
        async (ability) =>
          await axios
            .get(`https://pokeapi.co/api/v2/ability/${ability?.name}`)
            .then((res) => setAbilities((current) => [...current, res.data]))
      );
    };
    getAbility();
  }, []);

  return (
    <div className='overflow-x-auto'>
      <input
        placeholder='Search for an ability...'
        onChange={(e) => setSearch(e.currentTarget.value)}
        className='pl-3 text-[15px] lg:text-[17px] rounded-md border-2 border-gray-300 h-[30px] lg:h-[40px]'
      />
      <table className='w-full mt-4'>
        <thead className='border-b'>
          <tr>
            <th
              scope='col'
              className='text-[15px] lg:text-[17px] font-bold text-gray-900 p-3 text-left flex flex-row items-center gap-2'>
              Name
              {!isDescending ? (
                <AiFillCaretDown
                  onClick={() => setIsDescending(!isDescending)}
                  className='hover:cursor-pointer'
                />
              ) : (
                <AiFillCaretUp
                  onClick={() => setIsDescending(!isDescending)}
                  className='hover:cursor-pointer'
                />
              )}
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
          {abilities
            ?.slice(0, 327)
            .filter((ability) =>
              search !== ''
                ? ability?.name.startsWith(search) && ability?.effect_entries.length > 0
                : ability?.effect_entries.length > 0
            )
            .sort((a, b) =>
              !isDescending
                ? a?.name.split('-').join(' ') < b?.name.split('-').join(' ')
                  ? -1
                  : 1
                : a?.name.split('-').join(' ') > b?.name.split('-').join(' ')
                ? -1
                : 1
            )
            .map((ability, index) => (
              <tr className='border-b' key={index}>
                <td
                  className='p-3 text-[15px] lg:text-[17px] font-bold capitalize hover:cursor-pointer hover:underline'
                  onClick={() => navigate(`/ability/${ability?.name}`)}>
                  {ability?.name.split('-').join(' ')}
                </td>
                <td className='p-3 text-[15px] lg:text-[17px] text-center'>
                  <GetPokemonWithAbility ability={ability?.name} />
                </td>
                <td className='p-3 text-[15px] lg:text-[16px]'>
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
