import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TypeCard from './TypeCard';

const MovesLearnedTable = ({ moves, method }) => {
  const [movesByMethod, setMovesByMethod] = useState([]);
  const [movesData, setMovesData] = useState([]);

  useEffect(() => {
    const getMoves = async () => {
      movesByMethod?.map(
        async (move) =>
          await axios
            .get(`https://pokeapi.co/api/v2/move/${move.move.name}`)
            .then((res) => setMovesData((current) => [...current, res.data]))
      );
    };
    getMoves();
  }, [movesByMethod]);

  useEffect(() => {
    setMovesByMethod(
      moves?.filter(
        (move) =>
          move?.version_group_details[move.version_group_details.length - 1].move_learn_method
            .name === method
      )
    );
  }, [moves, method]);

  return (
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b'>
          <tr>
            <th className='p-3 text-left text-[15px]'>Lv.</th>
            <th className='p-3 text-left text-[15px]'>Move</th>
            <th className='p-3 text-left text-[15px]'>Type</th>
            <th className='p-3 text-left text-[15px]'>Cat.</th>
            <th className='p-3 text-left text-[15px]'>Power</th>
            <th className='p-3 text-left text-[15px]'>Acc.</th>
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
            ?.map((move, index) => (
              <tr className='border-b'>
                <td className='p-3 text-left text-[15px]'>
                  {
                    move.version_group_details[move.version_group_details.length - 1]
                      .level_learned_at
                  }
                </td>
                <td className='p-3 text-left text-[15px] capitalize '>
                  {move?.move.name.split('-').join(' ')}
                </td>
                <td>
                  <TypeCard type={movesData[index]?.type} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovesLearnedTable;
