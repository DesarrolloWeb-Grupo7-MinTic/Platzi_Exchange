import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Service from "../../services/services";
import Header from "../Header";
import InfoTable from "../InfoTable";
import moment from "moment";
import { Line } from "react-chartjs-2";
import {
  CoinWrapper,
  NameSymbolWrapper,
  TopSectionWrapper,
  InfoWrapper,
  ButtonsWrapper,
  GraphDiv,
  DetailPageWrapper,
} from "./styledComponents";

function DetailPage() {
  const { id } = useParams();
  const dataApi = useRef({});
  const dataChart = useRef();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();
  const [btnControl, setBtnControl] = useState(true);
  const actualTime = +new Date();
  const oneMonthAgo = moment().subtract(1, "months").unix();
  const labels = useRef([]);
  const data = {
    labels: labels.current,
    datasets: [
      {
        label: dataApi.current.name,
        data: dataChart.current,
        fill: false,
        backgroundColor: "#68D391",
        borderColor: "#68d391c6",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    Promise.all([
      Service.getCoin(id),
      Service.getCoinHistory(id, "usd", oneMonthAgo, actualTime),
    ]).then((data) => {
      dataApi.current = data[0];

      labels.current = data[1].prices.map((priceArr) => {
        let temp = new Date(priceArr[0]);
        return temp.toLocaleString().split(",")[0];
      });
      dataChart.current = data[1].prices.map((priceArr) => {
        return priceArr[1];
      });
      console.log(labels.current);
      setLoading((prevState) => !prevState);
    });
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClickBtn = () => {
    setBtnControl((prevState) => !prevState);
  };

  return (
    <DetailPageWrapper>
      <Header />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <TopSectionWrapper>
            <CoinWrapper>
              <img src={dataApi.current.image.large} alt={id} />
              <NameSymbolWrapper>
                <p className='nameSymbolWrapper__name'>
                  {dataApi.current.name}
                </p>
                <p className='nameSymbolWrapper__symbol'>
                  {dataApi.current.symbol}
                </p>
              </NameSymbolWrapper>
            </CoinWrapper>
            <InfoWrapper>
              <InfoTable
                ranking={dataApi.current.coingecko_rank}
                current_price={dataApi.current.market_data.current_price.usd}
                low_price={dataApi.current.market_data.low_24h.usd}
                high_price={dataApi.current.market_data.high_24h.usd}
                variation_24={dataApi.current.market_data.market_cap_change_percentage_24h.toFixed(
                  2
                )}
              />
            </InfoWrapper>
            <ButtonsWrapper>
              <button onClick={onClickBtn}>
                {btnControl
                  ? `${dataApi.current.symbol.toUpperCase()} a USD`
                  : `USD a ${dataApi.current.symbol.toUpperCase()}`}
              </button>
              <input
                type='number'
                placeholder={
                  btnControl
                    ? `Valor en ${dataApi.current.symbol.toUpperCase()}`
                    : `Valor en USD`
                }
                onChange={onChange}
                className='ButtonsWrapper__input_buscar'
              />
              <p className='ButtonsWrapper__p'>
                {!btnControl
                  ? value &&
                    `${(
                      value / dataApi.current.market_data.current_price.usd 
                    ).toFixed(5)} ${dataApi.current.symbol.toUpperCase()}`
                  : value &&
                    `${(
                      value * dataApi.current.market_data.current_price.usd
                    ).toFixed(2)} USD`}
              </p>
            </ButtonsWrapper>
          </TopSectionWrapper>
          <GraphDiv style={{ width: "80%", height: "auto" }}>
            <Line data={data} options={options} />
          </GraphDiv>
        </>
      )}
    </DetailPageWrapper>
  );
}

export default DetailPage;
