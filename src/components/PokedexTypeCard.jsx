import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPokemonByNameQuery } from '../redux/slices/pokemonApi';

const PokedexTypeCard = ({ pokemon }) => {
  const { data: pokedexData } = useGetPokemonByNameQuery(pokemon);
  const navigate = useNavigate();

  return (
    <div className='w-full text-center'>
      {pokedexData?.types.length > 1 ? (
        <section className='flex flex-row'>
          {pokedexData?.types.map((type) => (
            <p
              key={type?.type.name}
              className={`w-[50%] bg-${type?.type.name} capitalize text-white p-2 lg:text-[16px] hover:cursor-pointer`}
              onClick={() => navigate(`/type/${type?.type.name}`)}>
              {type?.type.name}
            </p>
          ))}
        </section>
      ) : (
        <section>
          <p
            className={`w-full bg-${pokedexData?.types[0].type.name} capitalize text-white p-2 lg:text-[16px] hover:cursor-pointer`}
            onClick={() => navigate(`/type/${pokedexData?.types[0].type.name}`)}>
            {pokedexData?.types[0].type.name}
          </p>
        </section>
      )}
    </div>
  );
};

export default PokedexTypeCard;
