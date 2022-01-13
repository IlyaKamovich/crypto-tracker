import React, { Fragment, useEffect, useState } from 'react';
import { Search, Sort, CoinItem, Pagination, CoinImg } from 'Components';
import coinHeader from 'Assets/coin-header.png';
import { ICoin, SelectSort } from 'Models';
import { Helpers } from 'Helpers';
import _orderBy from 'lodash/orderBy';
import _filter from 'lodash/filter';
import _map from 'lodash/map';

import 'Styles/_coin-container.scss';

interface Props {
  coins: ICoin[];
  sortKey: string;
}

const CoinContainer: React.FC<Props> = ({ coins, sortKey }) => {
  const [selectSort, setSelectSort] = useState<SelectSort>(SelectSort.default);
  const [search, setSearch] = useState<string>('');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage] = useState<number>(8);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectSort]);

  useEffect(() => {
    Helpers.setBorderColorToPaginationEl(currentPage);
  }, [selectSort, search, currentPage]);

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => setSelectSort(event.target.value as SelectSort);
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  const sortedCoins: ICoin[] = selectSort === SelectSort.default ? coins : _orderBy(coins, [sortKey], selectSort);
  const searchedCoins: ICoin[] = _filter(sortedCoins, (item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const indexOfLastCoin: number = currentPage * coinsPerPage;
  const indexOfFirstCoin: number = indexOfLastCoin - coinsPerPage;
  const currentsCoins: ICoin[] = searchedCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <header className="header">
        <div className="header__content">
          <Search search={search} handleChangeSearch={handleChangeSearch} />
          <Sort selectSort={selectSort} handleChangeSort={handleChangeSort} />
        </div>
      </header>
      <div className="coins">
        <div className="coins__content">
          {searchedCoins && searchedCoins.length ? (
            <Fragment>
              <div className="coins__content-item">
                <p className="coins__content-item__id">#</p>
                <CoinImg alt={coinHeader} source={coinHeader} />
                <p className="coins__content-item__name">Name</p>
                <p className="coins__content-item__symbol">Symbol</p>
                <p className="coins__content-item__price">Price, $</p>
                <p className="coins__content-item__volume">24h Volume, $</p>
                <p className="coins__content-item__marketcap">Mkt Cap, $</p>
                <p className="coins__content-item__price-change">Сhange, %</p>
              </div>
              {_map(currentsCoins, (coin: ICoin, index: number) => (
                <CoinItem
                  key={coin.id}
                  index={index}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              ))}
            </Fragment>
          ) : (
            <h2 className="coins__content-error">Currents coins was not found</h2>
          )}
        </div>
      </div>
      {searchedCoins && searchedCoins.length ? (
        <Pagination coinsPerPage={coinsPerPage} totalCoins={searchedCoins.length} paginate={paginate} currentPage={currentPage} />
      ) : null}
    </Fragment>
  );
};

export { CoinContainer };
