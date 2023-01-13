import React from 'react';
import { useParams } from 'react-router-dom';

import PokedexTable from '../components/PokedexTable';
import Loading from '../components/Loading';
import { useGetPokeDexQuery } from '../redux/slices/pokemonApi';
import { formatRegionName, formatRegionTitle } from '../reuseables/formatRegionName';

const Pokedex = () => {
  const { pokeRegion } = useParams();
  const { data: pokedex, isLoading } = useGetPokeDexQuery(formatRegionName(pokeRegion));

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div className='w-11/12 lg:w-7/12 flex flex-col items-center mt-8'>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='rounded-md w-full bg-white p-4 lg:p-12'>
            <h1 className='font-bold text-[18px] lg:text-[26px] text-center mb-8'>
              {formatRegionTitle(pokeRegion)}
            </h1>
            <PokedexTable pokedex={pokedex?.pokemon_entries} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
