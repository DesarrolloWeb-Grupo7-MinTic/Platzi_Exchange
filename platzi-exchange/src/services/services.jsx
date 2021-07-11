import axios from "axios";

export default class Service {

   static async getCoinList()  {
    const data = await axios.get("https://api.coingecko.com/api/v3/search/trending")
    return data.data;
  };
}
