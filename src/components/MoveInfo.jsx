import React from 'react';

import TypeCard from './TypeCard';
import { useGetPokemonMoveQuery } from '../redux/slices/pokemonApi';

const MoveInfo = ({ move, category }) => {
  const { data: moveData } = useGetPokemonMoveQuery(move);

  const getMoveInfo = (category) => {
    if (category === 'move') {
      return <p className='capitalize'>{moveData?.name.split('-').join(' ')}</p>;
    }

    if (category === 'type') {
      return (
        <div>
          <TypeCard type={moveData?.type} />
        </div>
      );
    }

    if (category === 'category') {
      return <p className='capitalize'>{moveData?.damage_class.name}</p>;
    }

    if (category === 'power') {
      return moveData?.power !== null ? <p>{moveData?.power}</p> : <p>{'N/A'}</p>;
    }

    if (category === 'accuracy') {
      return moveData?.accuracy !== null ? <p>{moveData?.accuracy}</p> : <p>{'N/A'}</p>;
    }
  };

  return <>{getMoveInfo(category)}</>;
};

export default MoveInfo;
