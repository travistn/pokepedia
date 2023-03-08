import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

import { useGetAllPokemonQuery } from '../redux/slices/pokemonApi';
import spheal from '../assets/spheal.png';
import pokeball from '../assets/pokeball.png';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: pokemonList } = useGetAllPokemonQuery();

  const formatResult = (pokemon) => {
    return <p className='capitalize'>{pokemon?.name.split('-').join(' ')}</p>;
  };

  const handleSearchClear = () => {
    return '';
  };

  useEffect(() => {
    setMenuIsOpen(false);
  }, [location]);

  useEffect(() => {
    handleSearchClear();
  }, [location]);

  return (
    <>
      <nav className='h-[70px] lg:h-[90px] bg-[#0d293a] flex flex-row justify-center items-center'>
        <section className='flex flex-row items-center justify-center lg:justify-start w-full lg:px-6 xl:px-0 xl:w-7/12'>
          <GiHamburgerMenu
            color='white'
            className='text-[20px] mr-4 ml-4 lg:hidden'
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
          <section className='flex flex-row items-center lg:pl-4'>
            <h5
              className='text-[20px] lg:text-[28px] text-white cursor-pointer'
              onClick={() => navigate('/')}>
              PokéPedia
            </h5>
            <img
              src={spheal}
              className='w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] ml-2 cursor-pointer'
              onClick={() => navigate('/')}
            />
          </section>
          <ul className='hidden lg:flex flex-row gap-4 ml-10 items-center'>
            <Link to='/pokedex' className='text-white text-[20px] hover:underline'>
              Pokédex
            </Link>
            <Link to='/ability' className='text-white text-[20px] hover:underline'>
              Abilities
            </Link>
            <Link to='/moves' className='text-white text-[20px] hover:underline'>
              Moves
            </Link>
            <Link to='/items' className='text-white text-[20px] hover:underline'>
              Items
            </Link>
            <Link to='/natures' className='text-white text-[20px] hover:underline'>
              Natures
            </Link>
          </ul>
          <section className='w-[40%] lg:w-[25%] ml-auto mr-2 lg:mr-0'>
            <ReactSearchAutocomplete
              items={pokemonList?.results}
              onSelect={(pokemon) => navigate(`/pokemon/${pokemon?.name}`)}
              styling={{ height: '30px' }}
              formatResult={formatResult}
              inputSearchString={handleSearchClear}
            />
          </section>
        </section>
      </nav>
      {menuIsOpen && (
        <nav className='absolute left-0 h-[60%] w-[70%] bg-gray-700 z-50 p-8'>
          <ul className='flex flex-col gap-4 text-white text-[18px]'>
            <li className='flex flex-row items-center gap-2'>
              <img src={pokeball} className='h-[18px]' />
              <Link to='/pokedex'>Pokédex</Link>
            </li>
            <li className='flex flex-row items-center gap-2'>
              <img src={pokeball} className='h-[18px]' />
              <Link to='/ability'>Abilities</Link>
            </li>
            <li className='flex flex-row items-center gap-2'>
              <img src={pokeball} className='h-[18px]' />
              <Link to='/moves'>Moves</Link>
            </li>
            <li className='flex flex-row items-center gap-2'>
              <img src={pokeball} className='h-[18px]' />
              <Link to='/items'>Items</Link>
            </li>
            <li className='flex flex-row items-center gap-2'>
              <img src={pokeball} className='h-[18px]' />
              <Link to='/natures'>Natures</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
