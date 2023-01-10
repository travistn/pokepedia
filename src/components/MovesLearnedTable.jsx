import React from 'react';
import { useNavigate } from 'react-router-dom';

import MoveInfo from './MoveInfo';

const MovesLearnedTable = ({ moves, method }) => {
  const navigate = useNavigate();

  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>
              {method === 'level-up' ? 'Lvl' : 'TM'}
            </th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Move</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Type</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Cat.</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Power</th>
            <th className='p-3 text-left text-[15px] lg:text-[16px]'>Acc.</th>
          </tr>
        </thead>
        <tbody>
          {moves
            ?.filter(
              (move) =>
                move?.version_group_details[move.version_group_details.length - 1].move_learn_method
                  .name === method
            )
            ?.sort((a, b) =>
              a.version_group_details[a.version_group_details.length - 1].level_learned_at <
              b.version_group_details[b.version_group_details.length - 1].level_learned_at
                ? -1
                : 1
            )
            .map((move) => (
              <tr key={move?.move.name} className='border-b'>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  {method === 'level-up'
                    ? move.version_group_details[move.version_group_details.length - 1]
                        .level_learned_at
                    : ''}
                </td>
                <td
                  className='p-3 text-left text-[15px] lg:text-[16px] text-[#427bcc] font-bold hover:underline hover:cursor-pointer'
                  onClick={() => navigate(`/move/${move?.move.name}`)}>
                  <MoveInfo move={move?.move.name} category='move' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.move.name} category='type' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.move.name} category='category' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.move.name} category='power' />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  <MoveInfo move={move?.move.name} category='accuracy' />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovesLearnedTable;
