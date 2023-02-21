import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import TypeCard from './TypeCard';

const TypeAttackDefense = ({ type }) => {
  return (
    <main className='flex flex-col gap-4 w-full'>
      <section className='flex flex-col gap-4'>
        <h1 className='font-bold text-[22px] lg:text-[26px]'>Attack pros & cons</h1>
        <section className='flex flex-row'>
          <AiFillCheckCircle className='text-[#4caf50] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
          <p className='ml-2 capitalize text-[15px] lg:text-[17px]'>
            {type?.name} <span className='lowercase'>moves are super-effective against:</span>
          </p>
        </section>
        <section className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
          {type?.damage_relations.double_damage_to.map((type) => (
            <TypeCard type={type} key={type?.name} />
          ))}
        </section>
        <section className='flex flex-row'>
          <AiFillCloseCircle className='text-[#f54f43] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
          <p className='ml-2 capitalize text-[15px] lg:text-[17px]'>
            {type?.name} <span className='lowercase'>moves are not very effective against:</span>
          </p>
        </section>
        <section className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
          {type?.damage_relations.half_damage_to.map((type) => (
            <TypeCard type={type} key={type?.name} />
          ))}
        </section>
        {type?.damage_relations.no_damage_to.length > 0 ? (
          <>
            <section className='flex flex-row'>
              <AiFillCloseCircle className='text-[#f54f43] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
              <p className='ml-2 capitalize text-[15px] lg:text-[17px]'>
                {type?.name} <span className='lowercase'>moves have no effect on:</span>
              </p>
            </section>
            <section className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
              {type?.damage_relations.no_damage_to.map((type) => (
                <TypeCard type={type} key={type?.name} />
              ))}
            </section>
          </>
        ) : (
          ''
        )}
      </section>
      <section className='flex flex-col gap-4'>
        <h1 className='font-bold text-[22px] lg:text-[26px]'>Defense pros & cons</h1>
        <section className='flex flex-row'>
          <AiFillCheckCircle className='text-[#4caf50] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
          <p className='ml-2 text-[15px] lg:text-[17px]'>
            These types are not very effective against
            <span className='capitalize'>{` ${type?.name} Pokémon:`}</span>
          </p>
        </section>
        <section className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
          {type?.damage_relations.half_damage_from.map((type) => (
            <TypeCard type={type} key={type?.name} />
          ))}
        </section>
        <section className='flex flex-row'>
          <AiFillCloseCircle className='text-[#f54f43] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
          <p className='ml-2 text-[15px] lg:text-[17px]'>
            These types are super-effective against
            <span className='capitalize'>{` ${type?.name} Pokémon:`}</span>
          </p>
        </section>
        <section className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
          {type?.damage_relations.double_damage_from.map((type) => (
            <TypeCard type={type} key={type?.name} />
          ))}
        </section>
        {type?.damage_relations.no_damage_from.length > 0 ? (
          <>
            <section className='flex flex-row'>
              <AiFillCheckCircle className='text-[#4caf50] text-[18px] lg:text-[20px] mt-[0.1rem] w-[30px]' />
              <p className='ml-2 text-[15px] lg:text-[17px]'>
                These types have no effect on
                <span className='capitalize'>{` ${type?.name} Pokémon:`}</span>
              </p>
            </section>
            <section className='flex flex-row flex-wrap gap-2 ml-7 lg:ml-9'>
              {type?.damage_relations.no_damage_from.map((type) => (
                <TypeCard type={type} key={type?.name} />
              ))}
            </section>
          </>
        ) : (
          ''
        )}
      </section>
    </main>
  );
};

export default TypeAttackDefense;
