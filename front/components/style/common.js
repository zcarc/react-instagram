import styled from "styled-components";
import {css} from "@emotion/core";

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

export const override = css`
    top: 0;
    left: 0;
    transform: scale(0.3) translateY(-83%) translateX(33%);
`;