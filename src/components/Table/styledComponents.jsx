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
    width: 70%;
    grid-template-columns: 5% 10% 10% 15% 20% 15% 15% ;
    justify-items: center;
    align-items: center;
    p{
        font-weight: 700;
        font-size: 14px;
    }
`;