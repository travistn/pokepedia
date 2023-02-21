import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import {
  useGetPokemonByNameQuery,
  useGetPokemonGenerationQuery,
  useGetPokemonSpeciesQuery,
  useGetPokeDexQuery,
  useGetPokemonEvolutionQuery,
} from '../redux/slices/pokemonApi';
import PokedexData from '../components/PokedexData';
import BaseStats from '../components/BaseStats';
import MovesLearnedTable from '../components/MovesLearnedTable';
import EvolutionChart from '../components/EvolutionChart';
import Loading from '../components/Loading';

const Pokemon = () => {
  const [previousPokemon, setPreviousPokemon] = useState();
  const [nextPokemon, setNextPokemon] = useState();

  const { pokeId } = useParams();
  const navigate = useNavigate();

  const { data: pokemon, isLoading } = useGetPokemonByNameQuery(pokeId);
  const { data: generation } = useGetPokemonGenerationQuery(pokemon?.id);
  const { data: species } = useGetPokemonSpeciesQuery(pokemon?.id);
  const { data: pokedex } = useGetPokeDexQuery('national');
  const { data: evolution } = useGetPokemonEvolutionQuery(species?.evolution_chain.url.slice(42));

  useEffect(() => {
    setPreviousPokemon(
      pokedex?.pokemon_entries.find((poke) => poke?.entry_number === pokemon?.id - 1)
    );
    setNextPokemon(pokedex?.pokemon_entries.find((poke) => poke?.entry_number === pokemon?.id + 1));
  }, [pokedex, pokemon]);

  return (
    <div className='min-h-screen flex flex-col items-center bg-sky-blue lg:bg-poke-bg bg-no-repeat bg-contain'>
      <main
        className={`bg-${pokemon?.types[0].type.name} w-10/12 lg:w-7/12 mt-8 rounded-md flex flex-col p-4 gap-4 items-center`}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <section className='flex flex-col items-center bg-white rounded-md p-4 w-full'>
              <section className='flex flex-row items-center w-full'>
                <section
                  className='mr-auto flex flex-row items-center gap-2'
                  onClick={() => navigate(`/pokemon/${previousPokemon?.pokemon_species.name}`)}>
                  {pokemon?.id !== 1 ? (
                    <BiLeftArrowAlt className='lg:text-[18px] hover:cursor-pointer' />
                  ) : (
                    ''
                  )}
                  <p className='text-[15px] lg:text-[17px] capitalize hover:cursor-pointer hover:underline'>
                    {pokemon?.id !== 1
                      ? `#${previousPokemon?.entry_number} ${previousPokemon?.pokemon_species.name}`
                      : ''}
                  </p>
                </section>
                <section
                  className='ml-auto flex flex-row items-center gap-2'
                  onClick={() => navigate(`/pokemon/${nextPokemon?.pokemon_species.name}`)}>
                  <p className='text-[15px] lg:text-[17px] capitalize hover:cursor-pointer hover:underline'>{`#${nextPokemon?.entry_number} ${nextPokemon?.pokemon_species.name}`}</p>
                  <BiRightArrowAlt className='lg:text-[18px] hover:cursor-pointer' />
                </section>
              </section>
              <h1 className='capitalize text-[24px] lg:text-[30px] font-bold text-center mt-4'>
                {pokemon?.name}
              </h1>
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
                {generation?.names.find((item) => item.language.name === 'en').name}. It is known as
                the {species?.genera.find((item) => item.language.name === 'en').genus}.
              </p>
            </section>
            <section className='flex flex-col lg:flex-row gap-4 w-full'>
              <section className='bg-white w-full rounded-md p-4'>
                <PokedexData pokemon={pokemon} species={species} />
              </section>
              <section className='bg-white w-full rounded-md p-4'>
                <BaseStats pokemon={pokemon} />
              </section>
            </section>
            <section className='bg-white w-full rounded-md p-4'>
              <h2 className='text-center font-bold mb-4 text-[20px] lg:text-[24px]'>
                Evolution Chain
              </h2>
              {evolution?.chain.evolves_to.length > 0 ? (
                <EvolutionChart evolution={evolution} />
              ) : (
                <p className='capitalize lg:text-[17px] text-center'>
                  {evolution?.chain.species.name}
                  <span className='lowercase'>{' does not evolve.'}</span>
                </p>
              )}
            </section>
            <section className='bg-white w-full rounded-md p-4'>
              <h2 className='text-center font-bold text-[20px] lg:text-[24px] mb-4'>
                Moves Learned by Level Up
              </h2>
              <MovesLearnedTable moves={pokemon?.moves} method='level-up' />
            </section>
            <section className='bg-white w-full rounded-md p-4'>
              <h2 className='text-center font-bold text-[20px] lg:text-[24px] mb-4'>
                Moves Learned by TM (Technical Machine)
              </h2>
              <MovesLearnedTable moves={pokemon?.moves} method='machine' />
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Pokemon;
