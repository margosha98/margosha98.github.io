import React from 'react';
import { SearchContext } from '../App';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import Sort from '../components/Sort';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSort } from '../redux/filterSlice';

let titlesOfSort = [
  { title: 'rating', name: 'популярности' },
  { title: 'price', name: ' цене' },
  { title: 'title', name: 'алфавиту' },
];

function Main() {
  let [items, setItems] = React.useState([]);
  let [isLoad, setIsLoad] = React.useState(false);

  const { categoryId, itemOfSort, currentPage } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);

  let pathForSort = `&sortBy=${itemOfSort.title}&order=desc`;
  let patchForCategory = categoryId ? `&category=${categoryId}` : ``;
  let pathForSearch = `&search=${searchValue}`;

  React.useEffect(() => {
    setIsLoad(true);
    axios
      .get(
        `https://641af45b9b82ded29d462047.mockapi.io/items?page=${
          currentPage + 1
        }&limit=4${pathForSort}${patchForCategory}${pathForSearch}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoad(false);
      });
  }, [pathForSort, patchForCategory, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickToChooseCategory={(categoryId) => dispatch(setCategoryId(categoryId))}
        />
        <Sort
          titlesOfSort={titlesOfSort}
          value={itemOfSort}
          onClickToSort={(itemOfSort) => dispatch(setSort(itemOfSort))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoad
          ? [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((pizzaInfo) => <PizzaBlock key={pizzaInfo.id} {...pizzaInfo} />)}
      </div>
    </div>
  );
}

export default Main;
