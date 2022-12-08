import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from '../components/PokemonCard';
import TypeCard from '../components/TypeCard';

const Home = () => {
  const [pokemon, setPokemon] = useState();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`).then((res) => setPokemon(res.data));
  }, []);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/?limit=18').then((res) => setTypes(res.data.results));
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col mt-8 w-11/12 items-center gap-8'>
        <div className='bg-gray-200 rounded-[4px] p-4'>
          <h2 className='font-bold'>
            Welcome to PokéPedia!{' '}
            <span className='font-normal'>
              We believe in making Pokémon information as clear and easy to digest as possible.
            </span>
          </h2>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-[18px]'>Pokémon of the day</h2>
          <div className='mt-4'>
            <PokemonCard pokemon={pokemon} />
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 lg:w-[45%]'>
          <h1 className='font-bold text-[18px] lg:text-[20px]'>Pokémon Types</h1>
          <div className='flex flex-row flex-wrap gap-1 flex-1 justify-center'>
            {types?.map((type) => (
              <TypeCard type={type} key={type?.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
