import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import PokedexDirectory from './pages/PokedexDirectory';
import Pokedex from './pages/Pokedex';
import Type from './pages/Type';
import AbilityDirectory from './pages/AbilityDirectory';
import Ability from './pages/Ability';
import Move from './pages/Move';
import Items from './pages/Items';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:pokeId' element={<Pokemon />} />
        <Route path='/pokedex' element={<PokedexDirectory />} />
        <Route path='/pokedex/:pokeRegion' element={<Pokedex />} />
        <Route path='/type/:typeId' element={<Type />} />
        <Route path='/ability' element={<AbilityDirectory />} />
        <Route path='/ability/:abilityId' element={<Ability />} />
        <Route path='/move/:moveId' element={<Move />} />
        <Route path='/items' element={<Items />} />
      </Routes>
    </>
  );
}

export default App;
