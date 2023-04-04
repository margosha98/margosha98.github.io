import React from 'react';
import styles from './Search.module.scss';

import nounIcon from '../../assets/image/noun.png';
import { SearchContext } from '../../App';
import { debounce } from 'lodash';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const [localSearchValue, setLocalValue] = React.useState('');

  const onInputClick = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const toUpdateSearchValue = React.useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 300),
    [],
  );

  const toChangeSearch = (e) => {
    setLocalValue(e.target.value);
    toUpdateSearchValue(e.target.value);
  };

  return (
    <div className={styles.main}>
      <input
        ref={inputRef}
        onChange={(event) => toChangeSearch(event)}
        value={localSearchValue}
        className={styles.input}
        placeholder="Поиск"
      />
      {searchValue && <img src={nounIcon} onClick={onInputClick} />}
    </div>
  );
}

export default Search;
