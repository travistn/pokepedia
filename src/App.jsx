import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import PokedexDirectory from './pages/PokedexDirectory';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:pokeId' element={<Pokemon />} />
        <Route path='/pokedex' element={<PokedexDirectory />} />
      </Routes>
    </>
  );
}

export default App;
