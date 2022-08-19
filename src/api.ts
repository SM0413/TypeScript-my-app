const BASE_URL = `https://api.coinpaprika.com/v1`;
const GetCoin_URL = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfoData(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickersData(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(`${GetCoin_URL}${coinId}`).then((response) => response.json());
}

export function fetchPrice(coinId: string) {
  return fetch(`${GetCoin_URL}${coinId}`).then((response) => response.json());
}
