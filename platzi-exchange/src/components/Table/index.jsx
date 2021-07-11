import React, { useEffect, useRef, useState } from "react";
import Service from "../../services/services";
import { TableContentWrapper, TableWrapper } from "./styledComponents";

function Table() {
  const [dataApi, setDataApi] = useState()

  useEffect(() => {
    Service.getCoinList().then((data) => {
      console.log(data);
      setDataApi(data)
    });
  }, []);

  return (
    <TableWrapper>
      <TableContentWrapper>
        <p></p>
        <p>Ranking</p>
        <p>Nombre</p>
        <p>Precio</p>
        <p>Cap. de Mercado</p>
        <p>Variacion 24hs</p>
        <p>Buscar...</p>
        {dataApi &&
          dataApi.coins.map((coin) => {
            return( <>
              <img src={coin.item.small} alt='coin'></img>
              <p>{coin.item.coin_id}</p>
              <p>{coin.item.id}</p>
              <p>{(coin.item.price_btc*33940.70).toFixed(2)} USD</p>
              <p>{coin.item.market_cap_rank}</p>
              <p>Variacion 24hs</p>
              <button>Detalle</button>
            </>);
          })}
      </TableContentWrapper>
    </TableWrapper>
  );
}

export default Table;
