import React from 'react'
import { SearchContext } from '../App';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import Sort from '../components/Sort';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice';



function Main({currentPage}) {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

    let [items, setItems] = React.useState([]);
    let [isLoad, setIsLoad] = React.useState(false);

    const {searchValue} = React.useContext(SearchContext)

    let titlesOfSort = [
      {title: 'rating', name: 'популярности'},
      {title: 'price', name: ' цене'},
      {title: 'title', name: 'алфавиту'}  
    ]
    let [itemOfSort, setNameOfSort] = React.useState(titlesOfSort[1])
    let [categoryId, setCategoryId] = React.useState(0)

    let pathForSort = `&sortBy=${itemOfSort.title}&order=desc`
    let patchForCategory = categoryId ? `&category=${categoryId}` : ``;
    let pathForSearch = `&search=${searchValue}`
    let patchForCurrentPage = `page=${currentPage+1}&limit=${4}`
  
    React.useEffect(() => {
      setIsLoad(true)
      fetch(`https://641af45b9b82ded29d462047.mockapi.io/items?${patchForCurrentPage}${pathForSort}${patchForCategory}${pathForSearch}`)
        .then((res) => res.json())
        .then((json) => {
          setItems(json);
          setIsLoad(false);
        });
    }, [pathForSort, patchForCategory, searchValue, currentPage]);

    return (
        <div className="container">
          <div className="content__top">
            <Categories value={categoryId} onClickToChooseCategory = { (categoryId) => setCategoryId(categoryId)}  />
            <Sort titlesOfSort={titlesOfSort} value={itemOfSort} onClickToSort={(itemOfSort) => setNameOfSort(itemOfSort)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoad
              ? [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />)
              : items.map((pizzaInfo) => <PizzaBlock key={pizzaInfo.id} {...pizzaInfo} />)}
          </div>
        </div>
    )
}

export default Main;
