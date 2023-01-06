import React, { useState, useEffect } from 'react';

const MovesLearnedTable = ({ moves, method }) => {
  const [movesByMethod, setMovesByMethod] = useState([]);

  useEffect(() => {
    setMovesByMethod(
      moves?.filter(
        (move) =>
          move?.version_group_details[move.version_group_details.length - 1].move_learn_method
            .name === method
      )
    );
  }, [method]);

  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-3 text-left'>Lv.</th>
            <th className='p-3 text-left'>Move</th>
            <th className='p-3 text-left'>Type</th>
            <th className='p-3 text-left'>Cat.</th>
            <th className='p-3 text-left'>Power</th>
            <th className='p-3 text-left'>Acc.</th>
          </tr>
        </thead>
        <tbody>
          {movesByMethod
            ?.sort((a, b) =>
              a.version_group_details[a.version_group_details.length - 1].level_learned_at <
              b.version_group_details[b.version_group_details.length - 1].level_learned_at
                ? -1
                : 1
            )
            ?.map((move) => (
              <tr className='border-b'>
                <td className='p-3 text-right'>
                  {
                    move.version_group_details[move.version_group_details.length - 1]
                      .level_learned_at
                  }
                </td>
                <td className='p-3 text-left'>{move?.move.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovesLearnedTable;
