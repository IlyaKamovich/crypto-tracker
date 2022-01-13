import { Coins, NotFound } from 'Pages';
import { IRoute } from 'Models';

export const ROUTES: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: Coins,
  },
  {
    exact: false,
    path: '*',
    component: NotFound,
  },
];

export const API_INTERVAL: number = 60000;

export const END_POINT: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

export const SORT_KEY: string = 'current_price';

export const SORTED_ITEMS: string[] = ['default', 'asc', 'desc'];
