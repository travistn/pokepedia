import React from 'react';

import { formatStatName } from '../reuseables/formatStatName';
import { getStatPercentage } from '../reuseables/getStatPercentage';

const BaseStats = ({ pokemon }) => {
  return (
    <main className='flex flex-col gap-1 lg:gap-2 w-full'>
      <h1 className='text-center font-bold text-[20px] lg:text-[24px] mb-1'>Base Stats</h1>
      {pokemon?.stats.map((stat) => (
        <article className='flex flex-row gap-1' key={stat?.stat.name}>
          <article className={`flex flex-row items-center w-8/12 bg-${stat?.stat.name} pl-2 pr-2`}>
            <p className='font-bold text-[15px] lg:text-[17px]'>
              {formatStatName(stat?.stat.name)}
            </p>
            <p className='flex flex-row ml-auto font-bold text-[15px] lg:text-[17px]'>
              {stat?.base_stat}
            </p>
          </article>
          <article className={`bg-${stat?.stat.name} w-full p-1`}>
            <div
              className={`bg-${stat?.stat.name}-inner h-full border-[1px] border-${stat?.stat.name}-border`}
              style={{ width: `${getStatPercentage(stat?.base_stat)}%` }}
            />
          </article>
        </article>
      ))}
      <section className='flex flex-row pl-2 pr-2 font-bold text-[15px] lg:text-[17px] w-[40.2%]'>
        <p>Total</p>
        <p className='ml-auto'>
          {pokemon?.stats
            .map((stat) => stat?.base_stat)
            .reduce((prevStat, currentStat) => prevStat + currentStat, 0)}
        </p>
      </section>
    </main>
  );
};

export default BaseStats;
