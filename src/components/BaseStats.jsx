import React from 'react';

import { formatStatName } from '../reuseables/formatStatName';
import { getStatPercentage } from '../reuseables/getStatPercentage';

const BaseStats = ({ pokemon }) => {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <h1 className='text-center font-bold text-[20px]'>Base Stats</h1>
      {pokemon?.stats.map((stat) => (
        <div className='flex flex-row gap-1' key={stat?.stat.name}>
          <div className={`flex flex-row items-center w-8/12 bg-${stat?.stat.name} pl-2 pr-2`}>
            <p className='font-bold text-[15px]'>{formatStatName(stat?.stat.name)}</p>
            <p className='flex flex-row ml-auto font-bold text-[15px]'>{stat?.base_stat}</p>
          </div>
          <div className={`bg-${stat?.stat.name} w-full p-1`}>
            <div
              className={`bg-${stat?.stat.name}-inner h-full border-[1px] border-${stat?.stat.name}-border`}
              style={{ width: `${getStatPercentage(stat?.base_stat)}%` }}
            />
          </div>
        </div>
      ))}
      <div className='flex flex-row pl-2 pr-2 font-bold text-[15px] w-[40.2%]'>
        <p>Total</p>
        <p className='ml-auto'>
          {pokemon?.stats
            .map((stat) => stat?.base_stat)
            .reduce((prevStat, currentStat) => prevStat + currentStat, 0)}
        </p>
      </div>
    </div>
  );
};

export default BaseStats;
