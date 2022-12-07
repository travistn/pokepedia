import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TypeCard from '../components/TypeCard';

const Home = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/?limit=18').then((res) => setTypes(res.data.results));
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col mt-8 w-11/12 items-center'>
        <div className='flex flex-row flex-wrap gap-1 flex-1 justify-center'>
          {types?.map((type) => (
            <TypeCard type={type} key={type?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
