import styled from "styled-components";

export const Container = styled.section`
    background: #fafafa;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const MainContainer = styled.section`
    padding-top: 135px;
    display: flex;
    justify-content: center;
    order: 1;
    
    @media screen and (max-width: 1000px) {
        padding-top: 220px;
    }
    
`;