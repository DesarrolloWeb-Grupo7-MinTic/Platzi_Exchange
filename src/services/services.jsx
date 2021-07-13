import axios from "axios";

export default class Service {
  static async getCoinList() {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 20,
          price_change_percentage: "24h",
        },
      }
    );
    return data.data;
  }

  static async getCoin(id) {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return data.data;
  }

  static async getCoinHistory(id, vs_currency, from, to) {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range`,
      {
        params: {
          vs_currency: vs_currency,
          from: from,
          to: to,
        },
      }
    );
    return data.data;
  }
}
