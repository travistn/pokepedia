import React from 'react';

import { useGetPokemonByNameQuery } from '../redux/slices/pokemonApi';

const PokedexTypeCard = ({ pokemon }) => {
  const { data: pokedexData } = useGetPokemonByNameQuery(pokemon);

  return (
    <div className='w-full text-center'>
      {pokedexData?.types.length > 1 ? (
        <div className='flex flex-row'>
          {pokedexData?.types.map((type) => (
            <p
              key={type?.type.name}
              className={`w-[50%] bg-${type?.type.name} capitalize text-white p-2 lg:text-[16px]`}>
              {type?.type.name}
            </p>
          ))}
        </div>
      ) : (
        <div>
          <p
            className={`w-full bg-${pokedexData?.types[0].type.name} capitalize text-white p-2 lg:text-[16px]`}>
            {pokedexData?.types[0].type.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default PokedexTypeCard;
