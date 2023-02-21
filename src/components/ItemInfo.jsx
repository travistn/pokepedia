import React from 'react';

import { useGetPokemonItemQuery } from '../redux/slices/pokemonApi';

const ItemInfo = ({ item, heading }) => {
  const { data: itemData } = useGetPokemonItemQuery(item);

  const getItemEffect = (item) => {
    if (item?.effect_entries.length === 0) return '';
    if (item?.effect_entries.length > 0) return item?.effect_entries[0].short_effect;
  };

  return (
    <>
      {heading === 'category' ? (
        <p className='capitalize'>{itemData?.category.name.split('-').join(' ')}</p>
      ) : (
        <p>{getItemEffect(itemData)}</p>
      )}
    </>
  );
};

export default ItemInfo;
