import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Paginate.module.scss'

function Paginate({onChangePage}) {
    return (
        <div >
            <ReactPaginate className={styles.container}
                breakLabel="..."
                nextLabel=">"
                onPageChange={ (e) => onChangePage(e)}
                pageRangeDisplayed={5}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    )
} 

export default Paginate;