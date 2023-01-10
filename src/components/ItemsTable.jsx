import React from 'react';

import ItemInfo from './ItemInfo';
import ItemSprite from './ItemSprite';

const ItemsTable = ({ items }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-4 text-left text-[15px]'>Name</th>
            <th className='p-4 text-left text-[15px]'>Category</th>
            <th className='p-4 text-left text-[15px]'>Effect</th>
          </tr>
        </thead>
        <tbody>
          {items
            ?.slice(0, 500)
            ?.sort((a, b) => (a?.name < b?.name ? -1 : 1))
            .map((item) => (
              <tr key={item?.name} className='border-b'>
                <td className='capitalize p-4 text-left text-[15px] whitespace-nowrap'>
                  <div className='flex flex-row items-center gap-2'>
                    <ItemSprite item={item?.name} />
                    {item?.name.split('-').join(' ')}
                  </div>
                </td>
                <td className='p-4 text-left text-[15px] whitespace-nowrap'>
                  <ItemInfo item={item?.name} heading='category' />
                </td>
                <td className='p-4 text-left text-[15px]'>
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
