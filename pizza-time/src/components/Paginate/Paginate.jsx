import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paginate.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/filterSlice';

function Paginate() {
  const dispatch = useDispatch();

  return (
    <div>
      <ReactPaginate
        className={styles.container}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setCurrentPage(e.selected))}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Paginate;
