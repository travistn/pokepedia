import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import {
  useGetPokemonByNameQuery,
  useGetPokemonGenerationQuery,
  useGetPokemonSpeciesQuery,
  useGetPokeDexQuery,
} from '../redux/slices/pokemonApi';
import PokedexData from '../components/PokedexData';
import BaseStats from '../components/BaseStats';
import MovesLearnedTable from '../components/MovesLearnedTable';

const Pokemon = () => {
  const [previousPokemon, setPreviousPokemon] = useState();
  const [nextPokemon, setNextPokemon] = useState();

  const { pokeId } = useParams();
  const navigate = useNavigate();

  const { data: pokemon } = useGetPokemonByNameQuery(pokeId);
  const { data: generation } = useGetPokemonGenerationQuery(pokemon?.id);
  const { data: species } = useGetPokemonSpeciesQuery(pokemon?.id);
  const { data: pokedex } = useGetPokeDexQuery('national');

  useEffect(() => {
    setPreviousPokemon(
      pokedex?.pokemon_entries.find((poke) => poke?.entry_number === pokemon?.id - 1)
    );
    setNextPokemon(pokedex?.pokemon_entries.find((poke) => poke?.entry_number === pokemon?.id + 1));
  }, [pokedex, pokemon]);

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <div
        className={`bg-${pokemon?.types[0].type.name} w-10/12 lg:w-7/12 mt-8 rounded-md flex flex-col p-4 gap-4 items-center`}>
        <div className='flex flex-col items-center bg-white rounded-md p-4 w-full'>
          <div className='flex flex-row items-center w-full'>
            <div
              className='mr-auto flex flex-row items-center gap-2'
              onClick={() => navigate(`/pokemon/${previousPokemon?.pokemon_species.name}`)}>
              <BiLeftArrowAlt className='lg:text-[18px] hover:cursor-pointer' />
              <p className='text-[15px] lg:text-[17px] capitalize hover:cursor-pointer hover:underline'>
                {`#${previousPokemon?.entry_number} ${previousPokemon?.pokemon_species.name}`}
              </p>
            </div>
            <div
              className='ml-auto flex flex-row items-center gap-2'
              onClick={() => navigate(`/pokemon/${nextPokemon?.pokemon_species.name}`)}>
              <p className='text-[15px] lg:text-[17px] capitalize hover:cursor-pointer hover:underline'>{`#${nextPokemon?.entry_number} ${nextPokemon?.pokemon_species.name}`}</p>
              <BiRightArrowAlt className='lg:text-[18px] hover:cursor-pointer' />
            </div>
          </div>
          <h2 className='capitalize text-[24px] lg:text-[30px] font-bold text-center mt-4'>
            {pokemon?.name}
          </h2>
          <img
            src={pokemon?.sprites.other['official-artwork'].front_default}
            className='h-[240px] lg:h-[300px]'
          />
          <p className='lg:text-[18px]'>
            <span className='capitalize'>{pokemon?.name}</span> is a{' '}
            {pokemon?.types.map((type, index) => (
              <span
                key={index}
                className={`capitalize text-${type?.type.name} hover:underline hover:cursor-pointer`}
                onClick={() => navigate(`/type/${type?.type.name}`)}>
                {(index ? '/' : '') + type?.type.name}
              </span>
            ))}{' '}
            type pokemon introduced in{' '}
            {generation?.names.find((item) => item.language.name === 'en').name}. It is known as the{' '}
            {species?.genera.find((item) => item.language.name === 'en').genus}.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 w-full'>
          <div className='bg-white w-full rounded-md p-4'>
            <PokedexData pokemon={pokemon} species={species} />
          </div>
          <div className='bg-white w-full rounded-md p-4'>
            <BaseStats pokemon={pokemon} />
          </div>
        </div>
        <div className='bg-white w-full rounded-md p-4'>
          <h1 className='text-center font-bold text-[18px] lg:text-[24px] mb-4'>
            Moves Learned by Level Up
          </h1>
          <MovesLearnedTable moves={pokemon?.moves} method='level-up' />
        </div>
        <div className='bg-white w-full rounded-md p-4'>
          <h1 className='text-center font-bold text-[18px] lg:text-[24px] mb-4'>
            Moves Learned by TM (Technical Machine)
          </h1>
          <MovesLearnedTable moves={pokemon?.moves} method='machine' />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
