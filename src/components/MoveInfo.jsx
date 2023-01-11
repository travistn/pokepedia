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

    if (category === 'pp') {
      return moveData?.pp !== null ? <p>{moveData?.pp}</p> : <p>{'N/A'}</p>;
    }

    if (category === 'effect') {
      return moveData?.effect_entries.length > 0 ? (
        <p>{moveData?.effect_entries[0].short_effect}</p>
      ) : (
        ''
      );
    }
  };

  return <>{getMoveInfo(category)}</>;
};

export default MoveInfo;
