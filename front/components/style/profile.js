import styled from "styled-components";


export const Inner = styled.section`
    width:835px;
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
    margin: 0 25% 0 auto;
    

    & img {
        width: 100%;
        height: 100%;
    }
    
    & .user {
        cursor: pointer;
    }
`;

export const FirstRow  = styled.div`
    display: flex;
    align-items: center;

    & .logout {
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
        cursor: pointer;
    }
`;

export const UserName  = styled.div`
    font-size: 35px;
    font-weight: 200;
    padding-right: 25px;
`;

export const SecondRow  = styled.ul`
    display: flex;
    align-items: center;
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

    }

`;

export const ContentsContainer  = styled.div`
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;

    &.active {
        display: flex;
    }

    @media screen and (max-width:1000px) {
        justify-content: center;
    }
`;

export const PictureWrap  = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   
   & .segment {
        border-top: 1px solid #dbdbdb;
        margin: 0 auto 50px auto;
        width: 100%;
   }
   
   & .row {
        display: flex;
        margin-bottom: 28px;
   }
   
   & .outside {
        margin-right: 28px;
   }
   
   & .outside:last-child {
        margin-right: 0px;
   }
   
   & .inside {
        height: 270px;
        width: 259.67px;
        overflow: hidden;
   }
   
   & img {
        height: 100%;
        width: 100%
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

export const RowSpan  = styled.span`
    margin-right: 3px;
    
    & a {
        color: black;
    }
`;