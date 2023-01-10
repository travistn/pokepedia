import React from 'react';

import { useGetPokemonItemQuery } from '../redux/slices/pokemonApi';

const ItemSprite = ({ item }) => {
  const { data: itemData } = useGetPokemonItemQuery(item);

  return (
    <>
      <img src={itemData?.sprites.default} />
    </>
  );
};

export default ItemSprite;
