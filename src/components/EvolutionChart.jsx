import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';

import PokemonSprite from './PokemonSprite';

const EvolutionChart = ({ evolution }) => {
  const navigate = useNavigate();

  const getEvolveMethod = (method) => {
    if (method?.min_level !== null) return `Level ${method?.min_level}`;
    if (method?.min_happiness !== null) return 'High Friendship';
    if (method?.item !== null) return method?.item.name.split('-').join(' ');
    if (method?.trigger.name === 'trade') return 'Trade';
    if (method?.known_move !== null) return method?.known_move.name.split('-').join(' ');
  };

  return (
    <main className='w-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center lg:items-baseline lg:flex-wrap'>
      <section className='flex flex-row items-center justify-center'>
        <PokemonSprite pokemon={evolution?.chain.species.name} />
        <p
          className='capitalize font-bold lg:text-[17px] hover:cursor-pointer hover:underline'
          onClick={() => navigate(`/pokemon/${evolution?.chain.species.name}`)}>
          {evolution?.chain.species.name}
        </p>
      </section>
      {evolution?.chain.evolves_to.map((evo) => (
        <Fragment key={evo?.species.name}>
          <section className='flex flex-col gap-0 items-center justify-start'>
            <BsArrowDown className='text-[18px] lg:hidden' />
            <BsArrowRight className='hidden lg:flex lg:text-[20px]' />
            <p className='text-[14px] capitalize'>{getEvolveMethod(evo?.evolution_details[0])}</p>
          </section>
          <section className='flex flex-row items-center justify-center'>
            <PokemonSprite pokemon={evo?.species.name} />
            <p
              className='capitalize font-bold lg:text-[17px] hover:cursor-pointer hover:underline'
              onClick={() => navigate(`/pokemon/${evo?.species.name}`)}>
              {evo?.species.name}
            </p>
          </section>
          {evo?.evolves_to.length > 0
            ? evo?.evolves_to.map((thirdEvo) => (
                <Fragment key={thirdEvo?.species.name}>
                  <section className='flex flex-col gap-0 items-center justify-center'>
                    <BsArrowDown className='text-[18px] lg:hidden' />
                    <BsArrowRight className='hidden lg:flex lg:text-[20px]' />
                    <p className='text-[14px] capitalize'>
                      {getEvolveMethod(thirdEvo?.evolution_details[0])}
                    </p>
                  </section>
                  <section className='flex flex-row items-center justify-center'>
                    <PokemonSprite pokemon={thirdEvo?.species.name} />
                    <p
                      className='capitalize font-bold lg:text-[17px] hover:cursor-pointer hover:underline'
                      onClick={() => navigate(`/pokemon/${thirdEvo?.species.name}`)}>
                      {thirdEvo?.species.name}
                    </p>
                  </section>
                </Fragment>
              ))
            : ''}
        </Fragment>
      ))}
    </main>
  );
};

export default EvolutionChart;
