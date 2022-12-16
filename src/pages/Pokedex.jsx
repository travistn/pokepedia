import React from 'react';
import { useParams } from 'react-router-dom';

import PokedexTable from '../components/PokedexTable';
import { useGetPokeDexQuery } from '../redux/slices/pokemonApi';
import { formatRegionName } from '../reuseables/formatRegionName';

const Pokedex = () => {
  const { pokeRegion } = useParams();

  const { data: pokedex } = useGetPokeDexQuery(formatRegionName(pokeRegion));

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-11/12 flex flex-col items-center'>
        <div className='mt-8 rounded-md w-full bg-white p-4'>
          <PokedexTable pokedex={pokedex?.pokemon_entries} />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
