import React from 'react';

import ItemInfo from './ItemInfo';

const ItemsTable = ({ items }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-3 text-left text-[15px]'>Name</th>
            <th className='p-3 text-left text-[15px]'>Category</th>
            <th className='p-3 text-left text-[15px]'>Effect</th>
          </tr>
        </thead>
        <tbody>
          {items
            ?.slice(0, 500)
            ?.sort((a, b) => (a?.name < b?.name ? -1 : 1))
            .map((item) => (
              <tr key={item?.name} className='border-b'>
                <td className='capitalize p-3 text-left text-[15px] whitespace-nowrap'>
                  {item?.name.split('-').join(' ')}
                </td>
                <td className='p-3 text-left text-[15px] whitespace-nowrap'>
                  <ItemInfo item={item?.name} heading='category' />
                </td>
                <td className='p-3 text-left text-[15px]'>
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
