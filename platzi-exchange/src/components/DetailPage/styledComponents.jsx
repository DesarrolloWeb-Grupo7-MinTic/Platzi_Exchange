import styled from "styled-components";

export const DetailPageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const TopSectionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%
`;

export const CoinWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const NameSymbolWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-right: 10px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: center;
  align-items: center;
  min-width: 20%;
  .align-right {
    margin-left: auto;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
`;

export const GraphDiv = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  justify-content: center;
  align-items: center;
`;
