import React from 'react';
//import classes from "./Pagination.module.css";

const Pagination = ({pagesArray, currentPage, changePage}) => {
    return (
        <div className={'page-button-wrapper'}>
            {pagesArray.map(p =>
                <span className={currentPage === p ? 'page-button current-page' : 'page-button'}
                      key={p}
                      onClick={() => changePage(p)}
                >
                       {p}
                   </span>)}
        </div>
    );
};

export default Pagination;