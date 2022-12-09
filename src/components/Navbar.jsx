import React from 'react';
import { useNavigate } from 'react-router-dom';

import spheal from '../assets/spheal.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-row justify-center items-center h-[70px] lg:h-[90px] bg-[#0d293a]'>
      <h5
        className='text-[20px] lg:text-[26px] text-white cursor-pointer'
        onClick={() => navigate('/')}>
        PokéPedia
      </h5>
      <img
        src={spheal}
        className='w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] ml-2 cursor-pointer'
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default Navbar;
