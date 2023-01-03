import React from 'react';

import TypeCard from '../components/TypeCard';

const MoveData = ({ move }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='font-bold text-[18px]'>Move Data</h1>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col items-end'>
          <p>Type</p>
          <p>Category</p>
          <p>Power</p>
          <p>Accuracy</p>
          <p>PP</p>
          <p>Makes contact?</p>
        </div>
        <div className='flex flex-col'>
          <TypeCard type={move?.type} />
          <p className='capitalize'>{move?.damage_class.name}</p>
          <p>{move?.power}</p>
          <p>{move?.accuracy}</p>
          <p>{move?.pp}</p>
          <p>{move?.damage_class.name === 'special' ? 'No' : 'Yes'}</p>
        </div>
      </div>
    </div>
  );
};

export default MoveData;
