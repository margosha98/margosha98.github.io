import React from 'react'
import styles from './Search.module.scss'

import nounIcon from '../../assets/image/noun.png'
import { SearchContext } from '../../App'

function Search() {
    const {searchValue, setSearchValue} = React.useContext(SearchContext)

    return(
        <div className={styles.main}> 
            <input 
            onChange={event => setSearchValue(event.target.value)}
            value = {searchValue}
            className={styles.input} placeholder='Поиск' />
            {searchValue &&
            <img src={nounIcon} onClick={ () => setSearchValue('')} />}   
        </div>
    )
}

export default Search;