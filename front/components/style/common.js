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

export const Spinner = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    
    & :before, :after {
        content: '';
        position: absolute;
        border-radius: 50%;
    }
    
    & :before {
        width: 100%;
        height: 100%;
        left: 0;
        background: linear-gradient(-45deg, #b80d57, #f8615a, #ffd868);
        animation: spinner .5s infinite linear;
        
    }
    
    & :after {
        width: 90%;
        height: 90%;
        background: #fafafa;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }
`;

export const SpinnerSmall = styled.div`
    position: relative;
    width: 18px;
    height: 18px;
    
    & :before, :after {
        content: '';
        position: absolute;
        border-radius: 50%;
    }
    
    & :before {
        width: 100%;
        height: 100%;
        left: 0;
        background: linear-gradient(-45deg, #b80d57, #f8615a, #ffd868);
        animation: spinner .5s infinite linear;
        
    }
    
    & :after {
        width: 65%;
        height: 65%;
        background: #3897f0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }
`;


export const SpinnerSmallComment = styled(SpinnerSmall)`
    position: relative;
    width: 20px;
    height: 20px;
    
    & :after {
        width: 50%;
        height: 50%;
        background: #fff;
        transform: translate(-50%, -50%);
    }
`;

export const SpinnerSmallWrite = styled(SpinnerSmall)`
    & :after {
        top: 53%;
        left: 51.1%;
    }
`;