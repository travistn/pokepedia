import React from 'react';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';

const EvolutionChart = ({ evolution }) => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-4 items-center justify-center lg:items-baseline'>
      <p className='capitalize'>{evolution?.chain.species.name}</p>
      {evolution?.chain.evolves_to.map((evo) => (
        <>
          <div className='flex flex-col gap-0 items-center justify-start'>
            <BsArrowDown className='text-[18px] lg:hidden' />
            <BsArrowRight className='hidden lg:flex text-[18px]' />
            <p className='text-[14px]'>{`(Level ${evo?.evolution_details[0].min_level})`}</p>
          </div>
          <p className='capitalize'>{evo?.species.name}</p>
          {evo?.evolves_to.length > 0
            ? evo?.evolves_to.map((thirdEvo) => (
                <>
                  <div className='flex flex-col gap-0 items-center justify-center'>
                    <BsArrowDown className='text-[18px] lg:hidden' />
                    <BsArrowRight className='hidden lg:flex text-[18px]' />
                    <p className='text-[14px]'>{`(Level ${evo?.evolution_details[0].min_level})`}</p>
                  </div>
                  <p className='capitalize'>{thirdEvo?.species.name}</p>
                </>
              ))
            : ''}
        </>
      ))}
    </div>
  );
};

export default EvolutionChart;
