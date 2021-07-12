import React, { useEffect, useRef, useState } from "react";
import Service from "../../services/services";
import TableDataRow from "../TableDataRow";
import TableTitle from "../TableTitle";
import { TableContentWrapper, TableWrapper } from "./styledComponents";

function Table() {
  const [dataApi, setDataApi] = useState();
  const [value, setValue] = useState("");
  const [coinArr, setCoinArr] = useState([])

  useEffect(() => {
    Service.getCoinList().then((data) => {
      console.log(data);
      setDataApi(data);
      setCoinArr(data);
    });
  }, []);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dataApi && setCoinArr(dataApi.filter( coin => coin.id.includes(value))                 )
    console.log(coinArr);
  }, [value])


  console.log(value);

  return (
    <TableWrapper>
      <TableContentWrapper>
        <TableTitle onChange={onChange} value={value} />
        {coinArr &&
          coinArr.map((coin, i) => {
            return (
              <>
                <TableDataRow
                  image={coin.image}
                  i={i + 1}
                  id={coin.id}
                  current_price={coin.current_price}
                  market_cap={coin.market_cap}
                  price_change_percentage_24h={coin.price_change_percentage_24h.toFixed(
                    2
                  )}
                />
              </>
            );
          })}
      </TableContentWrapper>
    </TableWrapper>
  );
}

export default Table;
