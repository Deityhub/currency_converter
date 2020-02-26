import {SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT} from './constants';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: Number(amount),
});
