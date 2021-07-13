import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Service from "../../services/services";
import Header from "../Header";
import InfoTable from "../InfoTable";
import { Line } from "react-chartjs-2";
import {
  CoinWrapper,
  NameSymbolWrapper,
  TopSectionWrapper,
  InfoWrapper,
  ButtonsWrapper,
  GraphDiv,
  DetailPageWrapper
} from "./styledComponents";

function DetailPage() {
  const { id } = useParams();
  const dataApi = useRef([{}]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
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
    Service.getCoin(id).then((data) => {
      dataApi.current = data;
      setLoading((prevState) => !prevState);
    });
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  console.log(dataApi.current);

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
                <p>{dataApi.current.name}</p>
                <p>{dataApi.current.symbol}</p>
              </NameSymbolWrapper>
            </CoinWrapper>
            <InfoWrapper>
              <InfoTable
                ranking={dataApi.current.ranking}
                current_price={dataApi.current.market_data.current_price.usd}
                low_price={dataApi.current.market_data.low_24h.usd}
                high_price={dataApi.current.market_data.high_24h.usd}
                variation_24={dataApi.current.market_data.market_cap_change_percentage_24h.toFixed(
                  2
                )}
              />
            </InfoWrapper>
            <ButtonsWrapper>
              <button>{dataApi.current.symbol.toUpperCase()} a USD</button>
              <input
                type='number'
                placeholder='Valor en USD'
                onChange={onChange}
              />
              <p>
                {value
                  ? value * dataApi.current.market_data.current_price.usd
                  : 0}
              </p>
            </ButtonsWrapper>
          </TopSectionWrapper>
          <GraphDiv style={{ width: "80%", height: "auto" }}>
            <Line data={data} options={options} />
          </GraphDiv>
        </>
      )}

      <h1>{id}</h1>
    </DetailPageWrapper>
  );
}

export default DetailPage;
