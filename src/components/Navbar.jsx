import React from 'react';

import spheal from '../../assets/spheal.png';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center h-[70px] lg:h-[90px] bg-[#E3F2FD]'>
      <h5 className='text-[20px] lg:text-[26px]'>PokéPedia</h5>
      <img src={spheal} className='w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] ml-2' />
    </div>
  );
};

export default Navbar;
