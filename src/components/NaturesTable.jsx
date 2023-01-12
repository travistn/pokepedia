import React from 'react';

import NatureInfo from './NatureInfo';

const NaturesTable = ({ natures }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-4 text-left text-[15px] lg:text-[16px]'>Name</th>
            <th className='p-4 text-left text-[15px] lg:text-[16px]'>Increases</th>
            <th className='p-4 text-left text-[15px] lg:text-[16px]'>Decreases</th>
          </tr>
        </thead>
        <tbody>
          {natures
            ?.slice(0, 24)
            .sort((a, b) => (a?.name < b?.name ? -1 : 1))
            .map((nature) => (
              <tr key={nature?.name} className='border-b'>
                <td className='p-4 text-left text-[15px] lg:text-[16px] capitalize font-bold'>
                  {nature?.name}
                </td>
                <td className='p-4 text-left text-[15px] lg:text-[16px]'>
                  <NatureInfo nature={nature?.name} stat='increase' />
                </td>
                <td className='p-4 text-left text-[15px] lg:text-[16px]'>
                  <NatureInfo nature={nature?.name} stat='decrease' />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default NaturesTable;
