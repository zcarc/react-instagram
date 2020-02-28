import styled from "styled-components";


export const Inner = styled.section`
    width:935px;
    position: relative;
`;


export const InnerTop = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

export const InnerTopLeft = styled.div`
    width: 40%;
`;

export const InnerTopLeftImgWrap  = styled.div`
    width: 152px;
    height: 152px;
    overflow:hidden;
    border-radius: 50%;
    margin: 0 auto;

    & img {
        width: 100%;
        height: 100%;
    }
`;

export const FirstRow  = styled.div`
    display: flex;
    align-items: center;

    & a {
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
        color: #262626;
        padding: 3px 20px;
        font-weight: 600;
        vertical-align: text-bottom;
        text-decoration: none;
        box-sizing: border-box;
    }
`;

export const UserName  = styled.div`
    font-size: 35px;
    font-weight: 200;
    padding-right: 25px;
`;

export const SecondRow  = styled.ul`
    display: flex;
    height: 50px;
    padding: 18px 0;
    font-size: 15px;
    font-weight: 600;

    & li {
        margin-right: 35px;
    }
`;


export const ThirdRow  = styled.p`
    & span {
        display:inline-block;
        cursor: pointer;
        position:relative;

        :nth-child(1) {
            margin-right: 50px;
        }

        :after {
            content:'';
            width:0;
            height:1px;
            position:absolute;
            left:0;
            bottom:-5px;
            transition:all 0.5s;
            background:#dd2d76;
        }

    }
    
    & span.on:after {
        width:100%;
    }
`;

export const ContentsContainer  = styled.div`
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;

    & .active {
        display: flex;
    }

    @media screen and (max-width:1000px) {
        justify-content: center;
    }
`;


export const Pic  = styled.div`
    max-width:300px;
    max-height:300px;
    overflow:hidden;
    margin-bottom: 18px;

    & img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width:1000px) {
        margin:10px;
    }


`;

