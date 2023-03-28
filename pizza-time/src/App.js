import React from 'react';
import Header from './components/Header';
import logo from './assets/image/pizza-logo.svg';
import './scss/app.scss';
import Main from './pages';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';

function App() {
  let [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} logo={logo} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main searchValue={searchValue} />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
