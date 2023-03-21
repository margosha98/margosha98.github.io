import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import logo from './assets/image/pizza-logo.svg';
import './scss/app.scss';

import pizzas from './assets/pizzaInfo.json';

function App() {
  return (
    <div className="wrapper">
      <Header logo={logo} />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizzaInfo) => (
              <PizzaBlock {...pizzaInfo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
