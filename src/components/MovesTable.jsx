import React from 'react';

import MoveInfo from './MoveInfo';

const MovesTable = ({ moves }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Name</th>
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
            ?.slice(0, 50)
            .sort((a, b) => (a?.name < b?.name ? -1 : 1))
            .map((move) => (
              <tr key={move?.name} className='border-b'>
                <td className='p-3 text-left text-[15px] lg:text-[16px] capitalize whitespace-nowrap'>
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
    </div>
  );
};

export default MovesTable;
