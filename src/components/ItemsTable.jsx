import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import ItemInfo from './ItemInfo';
import ItemSprite from './ItemSprite';

const ItemsTable = ({ items }) => {
  const [isDescending, setIsDescending] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className='overflow-x-auto'>
      <input
        placeholder='Search for an item...'
        onChange={(e) => setSearch(e.currentTarget.value.toLowerCase())}
        className='pl-3 text-[15px] lg:text-[17px] rounded-md border-2 border-gray-300 h-[30px] lg:h-[40px] lg:w-4/12 mb-2'
      />
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-4 text-left text-[15px] lg:text-[16px] flex flex-row items-center gap-2'>
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
            <th className='p-4 text-left text-[15px] lg:text-[16px]'>Category</th>
            <th className='p-4 text-left text-[15px] lg:text-[16px]'>Effect</th>
          </tr>
        </thead>
        <tbody>
          {items
            ?.slice(0, 500)
            .filter((item) => (search !== '' ? item?.name.startsWith(search) : item))
            ?.sort((a, b) =>
              !isDescending ? (a?.name < b?.name ? -1 : 1) : a?.name > b?.name ? -1 : 1
            )
            .map((item) => (
              <tr key={item?.name} className='border-b'>
                <td className='capitalize p-4 text-left text-[15px] lg:text-[16px] whitespace-nowrap text-[#427bcc] font-bold'>
                  <div className='flex flex-row items-center gap-2'>
                    <ItemSprite item={item?.name} />
                    {item?.name.split('-').join(' ')}
                  </div>
                </td>
                <td className='p-4 text-left text-[15px] lg:text-[16px] whitespace-nowrap'>
                  <ItemInfo item={item?.name} heading='category' />
                </td>
                <td className='p-4 text-left text-[15px] lg:text-[16px]'>
                  <ItemInfo item={item?.name} heading='effect' />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
