import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import MoveInfo from './MoveInfo';

const MovesTable = ({ moves }) => {
  const [search, setSearch] = useState('');
  const [isDescending, setIsDescending] = useState(false);

  const navigate = useNavigate();

  return (
    <main className='overflow-x-auto'>
      <input
        placeholder='Search for a move...'
        onChange={(e) => setSearch(e.currentTarget.value.toLowerCase())}
        className='pl-3 text-[15px] lg:text-[17px] rounded-md border-2 border-gray-300 h-[30px] lg:h-[40px] lg:w-4/12 mb-2'
      />
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-3 text-left text-[15px] lg:text-[16px] flex flex-row items-center gap-2'>
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
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Type</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Category</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Power</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Accuracy</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>PP</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Effect</th>
          </tr>
        </thead>
        <tbody>
          {moves
            ?.filter((move) => (!search !== '' ? move?.name.startsWith(search) : move))
            .sort((a, b) =>
              !isDescending ? (a?.name < b?.name ? -1 : 1) : a?.name > b?.name ? -1 : 1
            )
            .map((move, index) => (
              <tr key={index} className='border-b'>
                <td
                  className='p-3 text-left text-[15px] lg:text-[16px] capitalize text-[#427bcc] font-bold hover:underline hover:cursor-pointer'
                  onClick={() => navigate(`/move/${move?.name}`)}>
                  {move?.name.split('-').join(' ')}
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.name} category='type' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.name} category='category' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.name} category='power' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.name} category='accuracy' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.name} category='pp' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.name} category='effect' />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default MovesTable;
