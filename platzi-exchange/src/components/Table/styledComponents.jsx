import styled from "styled-components";

export const TableWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
`;

export const TableContentWrapper = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: 5% 10% 10% 10% 20% 20% 25% ;
    justify-items: center;
    p{
        font-weight: 700;
        font-size: 14px;
    }
`;