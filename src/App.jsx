import './scss/app.scss';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart'

export const SearchContext = createContext();

function App() {

  const [searchInput, setSearchInput] = useState('');

  return (


    <SearchContext.Provider value={{searchInput, setSearchInput}}>
      <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart.html' element={<Cart />} />
          </Routes>
      </div>
    </div>
    </SearchContext.Provider>
  );
}

export default App;
