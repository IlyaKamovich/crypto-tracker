import React, { Fragment, useEffect, useState } from "react";
import { orderBy } from "lodash";
import { Header, Search, Sort, CoinsWrapper, CoinNotFound, CoinItem, Pagination, CoinHeader } from "Components";
import { Helders } from "Helpers";

const CoinList = ({ coins }) => {
  const [selectSort, setSelectSort] = useState("default");
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(8);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectSort]);

  useEffect(() => {
    Helders.setBorderColorToPaginationEl(currentPage);
  }, [selectSort, search, currentPage]);

  const handleChangeSort = ({ target }) => setSelectSort(target.value);
  const handleChangeSearch = ({ target }) => setSearch(target.value);

  const sortedCoins = selectSort === "default" ? coins : orderBy(coins, ["current_price"], selectSort);
  const searchedCoins = sortedCoins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentsCoins = searchedCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <Header>
        <Search search={search} handleChangeSearch={handleChangeSearch} />
        <Sort selectSort={selectSort} handleChangeSort={handleChangeSort} />
      </Header>
      <CoinsWrapper>
        {searchedCoins && searchedCoins.length ? <CoinHeader /> : null}
        {searchedCoins && searchedCoins.length ? (
          currentsCoins.map((coin, index) => (
            <CoinItem
              key={coin.id}
              index={index}
              name={coin.name}
              id={coin.id}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          ))
        ) : (
          <CoinNotFound />
        )}
      </CoinsWrapper>
      {searchedCoins && searchedCoins.length ? (
        <Pagination coinsPerPage={coinsPerPage} totalCoins={searchedCoins.length} paginate={paginate} currentPage={currentPage} />
      ) : null}
    </Fragment>
  );
};

export { CoinList };
