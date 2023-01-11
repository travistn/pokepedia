import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';

import PokemonSprite from './PokemonSprite';

const EvolutionChart = ({ evolution }) => {
  const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center lg:items-baseline'>
      <div className='flex flex-row items-center justify-center'>
        <PokemonSprite pokemon={evolution?.chain.species.name} />
        <p
          className='capitalize font-bold lg:text-[17px] hover:cursor-pointer hover:underline'
          onClick={() => navigate(`/pokemon/${evolution?.chain.species.name}`)}>
          {evolution?.chain.species.name}
        </p>
      </div>
      {evolution?.chain.evolves_to.map((evo) => (
        <>
          <div className='flex flex-col gap-0 items-center justify-start'>
            <BsArrowDown className='text-[18px] lg:hidden' />
            <BsArrowRight className='hidden lg:flex lg:text-[20px]' />
            <p className='text-[14px]'>{`(Level ${evo?.evolution_details[0].min_level})`}</p>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <PokemonSprite pokemon={evo?.species.name} />
            <p
              className='capitalize font-bold lg:text-[17px] hover:cursor-pointer hover:underline'
              onClick={() => navigate(`/pokemon/${evo?.species.name}`)}>
              {evo?.species.name}
            </p>
          </div>
          {evo?.evolves_to.length > 0
            ? evo?.evolves_to.map((thirdEvo) => (
                <>
                  <div className='flex flex-col gap-0 items-center justify-center'>
                    <BsArrowDown className='text-[18px] lg:hidden' />
                    <BsArrowRight className='hidden lg:flex lg:text-[20px]' />
                    <p className='text-[14px]'>{`(Level ${thirdEvo?.evolution_details[0].min_level})`}</p>
                  </div>
                  <div className='flex flex-row items-center justify-center'>
                    <PokemonSprite pokemon={thirdEvo?.species.name} />
                    <p
                      className='capitalize font-bold lg:text-[17px] hover:cursor-pointer hover:underline'
                      onClick={() => navigate(`/pokemon/${thirdEvo?.species.name}`)}>
                      {thirdEvo?.species.name}
                    </p>
                  </div>
                </>
              ))
            : ''}
        </>
      ))}
    </div>
  );
};

export default EvolutionChart;
