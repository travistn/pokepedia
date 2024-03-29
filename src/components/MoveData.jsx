import React from 'react';

import TypeCard from '../components/TypeCard';
import { getMoveContact } from '../reuseables/getMoveContact';
import { getMoveIntroduction } from '../reuseables/getMoveIntroduction';

const MoveData = ({ move }) => {
  return (
    <main className='flex flex-col gap-2 lg:gap-4'>
      <h1 className='font-bold text-[20px] lg:text-[24px] lg:text-center'>Move Data</h1>
      <div className='flex flex-row gap-4 items-center'>
        <section className='flex flex-col items-end opacity-70 gap-1 lg:gap-2'>
          <p>Type</p>
          <p>Category</p>
          <p>Power</p>
          <p>Accuracy</p>
          <p>PP</p>
          <p>Makes contact?</p>
          <p>Introduced</p>
        </section>
        <section className='flex flex-col gap-1 lg:gap-2'>
          <TypeCard type={move?.type} />
          <p className='capitalize'>{move?.damage_class.name}</p>
          <p>{move?.power !== null ? move?.power : 'N/A'}</p>
          <p>{move?.accuracy !== null ? move?.accuracy : 'N/A'}</p>
          <p>{move?.pp}</p>
          <p>{getMoveContact(move?.damage_class.name)}</p>
          <p>{getMoveIntroduction(move?.generation.name)}</p>
        </section>
      </div>
    </main>
  );
};

export default MoveData;
