import React from 'react';
import Header from './components/Header';
import logo from './assets/image/pizza-logo.svg';
import './scss/app.scss';
import Main from './pages/Main';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Paginate from './components/Paginate/Paginate';
export const SearchContext = React.createContext();

function App() {
  let [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header logo={logo} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Paginate />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
