import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import spheal from '../assets/spheal.png';
import pokeball from '../assets/pokeball.png';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMenuIsOpen(false);
  }, [location]);

  return (
    <>
      <div className='h-[70px] lg:h-[90px] bg-[#0d293a] flex flex-row justify-center'>
        <div className='flex flex-row items-center justify-center lg:justify-start w-[80%] lg:w-7/12'>
          <GiHamburgerMenu
            color='white'
            className='text-[20px] mr-8 lg:hidden'
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
          <div className='flex flex-row items-center lg:pl-4'>
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
          </div>
          <div className='hidden lg:flex flex-row gap-4 ml-10'>
            <Link to='/pokedex' className='text-white text-[20px] hover:underline'>
              Pokédex
            </Link>
            <Link to='/ability' className='text-white text-[20px] hover:underline'>
              Abilities
            </Link>
          </div>
        </div>
      </div>
      {menuIsOpen && (
        <div className='absolute left-0 h-[60%] w-[70%] bg-gray-700 z-50 p-8'>
          <div className='flex flex-col gap-4 text-white text-[18px]'>
            <div className='flex flex-row items-center gap-2'>
              <img src={pokeball} className='h-[18px]' />
              <Link to='/pokedex'>Pokédex</Link>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <img src={pokeball} className='h-[18px]' />
              <Link to='/ability'>Abilities</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
