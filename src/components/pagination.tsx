import React, { useState, useEffect } from 'react';
import _map from 'lodash/map';

import 'Styles/_pagination.scss';

interface Props {
  coinsPerPage: number;
  totalCoins: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({ coinsPerPage, totalCoins, paginate, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const pageNumbersLength = Math.ceil(totalCoins / coinsPerPage);
    const pageNumbers = Array.from({ length: pageNumbersLength }, (_, i) => i + 1);
    setPageNumbers(pageNumbers);
  }, []);

  const onClickPaginatePrev = (): void => paginate(currentPage - 1);
  const onClickPaginateNext = (): void => paginate(currentPage + 1);

  const disabledNextButton: boolean = currentPage === pageNumbers.length;
  const disabledPrevButton: boolean = currentPage <= 1;

  return (
    <div className="pagination">
      <div className="pagination__content">
        <button disabled={disabledPrevButton} onClick={onClickPaginatePrev} className="pagination__content__list-item pagination__content-button">
          Prev
        </button>
        <ul className="pagination__content__list">
          {_map(pageNumbers, (pageNumber) => (
            <li onClick={() => paginate(pageNumber)} key={pageNumber} className="pagination__content__list-item">
              <a href="#">{pageNumber}</a>
            </li>
          ))}
        </ul>
        <button disabled={disabledNextButton} onClick={onClickPaginateNext} className="pagination__content__list-item pagination__content-button">
          Next
        </button>
      </div>
    </div>
  );
};

export { Pagination };
