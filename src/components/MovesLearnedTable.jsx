import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import TypeCard from './TypeCard';

const MovesLearnedTable = ({ moves, method }) => {
  const [movesByMethod, setMovesByMethod] = useState([]);
  const [movesData, setMovesData] = useState([]);

  const navigate = useNavigate();

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
          {movesByMethod
            ?.sort((a, b) =>
              a.version_group_details[a.version_group_details.length - 1].level_learned_at <
              b.version_group_details[b.version_group_details.length - 1].level_learned_at
                ? -1
                : 1
            )
            ?.map((move, index) => (
              <tr className='border-b' key={index}>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  {method === 'level-up'
                    ? move.version_group_details[move.version_group_details.length - 1]
                        .level_learned_at
                    : ''}
                </td>
                <td
                  className='p-3 text-left text-[15px] lg:text-[16px] capitalize text-[#4387cf] font-bold hover:underline hover:cursor-pointer'
                  onClick={() => navigate(`/move/${move?.move.name}`)}>
                  {move?.move.name.split('-').join(' ')}
                </td>
                <td className='p-3 text-left'>
                  <TypeCard type={movesData[index]?.type} />
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px] capitalize'>
                  {movesData[index]?.damage_class.name}
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  {movesData[index]?.power !== null ? movesData[index]?.power : 'N/A'}
                </td>
                <td className='p-3 text-left text-[15px] lg:text-[16px]'>
                  {movesData[index]?.accuracy !== null ? movesData[index]?.accuracy : 'N/A'}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovesLearnedTable;
