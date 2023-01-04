import React from 'react';

import TypeCard from '../components/TypeCard';
import { getMoveContact } from '../reuseables/getMoveContact';
import { getMoveIntroduction } from '../reuseables/getMoveIntroduction';

const MoveData = ({ move }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='font-bold text-[20px]'>Move Data</h1>
      <div className='flex flex-row gap-4 items-center'>
        <div className='flex flex-col items-end opacity-70 gap-1'>
          <p>Type</p>
          <p>Category</p>
          <p>Power</p>
          <p>Accuracy</p>
          <p>PP</p>
          <p>Makes contact?</p>
          <p>Introduced</p>
        </div>
        <div className='flex flex-col gap-1'>
          <TypeCard type={move?.type} />
          <p className='capitalize'>{move?.damage_class.name}</p>
          <p>{move?.power !== null ? move?.power : 'N/A'}</p>
          <p>{move?.accuracy !== null ? move?.accuracy : 'N/A'}</p>
          <p>{move?.pp}</p>
          <p>{getMoveContact(move?.damage_class.name)}</p>
          <p>{getMoveIntroduction(move?.generation.name)}</p>
        </div>
      </div>
    </div>
  );
};

export default MoveData;
