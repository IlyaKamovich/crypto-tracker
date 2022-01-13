export interface ICoin {
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: Date;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: 1;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: {
    currency: string;
    percentage: number;
    times: number;
  };
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface IRoute {
  exact: boolean;
  path: string;
  component: React.FC<{}>;
}

export interface IUseFetch {
  loading: boolean;
  coins: ICoin[];
  error: boolean;
  errorMessage: string;
  getDataAsync: (url: string) => Promise<void>;
}

export enum SelectSort {
  default = 'default',
  asc = 'asc',
  desc = 'desc',
}
