import React from "react";

import "Styles/_pagination.scss";

const Pagination = ({ coinsPerPage, totalCoins, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClickPaginatePrev = () => paginate(currentPage - 1);
  const onClickPaginateNext = () => paginate(currentPage + 1);

  const disabledPrevButton = currentPage <= 1;
  const disabledNextButton = currentPage === pageNumbers.length;

  return (
    <div className="pagination">
      <div className="pagination__content">
        <button
          disabled={disabledPrevButton}
          onClick={onClickPaginatePrev}
          className="pagination__content__list-item pagination__content-button"
        >
          Prev
        </button>
        <ul className="pagination__content__list">
          {pageNumbers.map((number) => (
            <li onClick={() => paginate(number)} key={number} className="pagination__content__list-item">
              <a href="#">{number}</a>
            </li>
          ))}
        </ul>
        <button
          disabled={disabledNextButton}
          onClick={onClickPaginateNext}
          className="pagination__content__list-item pagination__content-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { Pagination };
