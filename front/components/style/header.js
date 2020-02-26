import styled, {createGlobalStyle} from "styled-components";
import img from "../../public/background01.png";


export const GlobalStyle = createGlobalStyle`
    body {
        background: #fafafa;
    }
`;

export const Container = styled.section`
    background: #fafafa;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Header = styled.header`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    background:white;
    border-bottom:1px solid rgba(0,0,0,0.1);
`;


export const Inner = styled.section`
    position: relative;
    width: 935px;
    height: 77px;
    margin: 0 auto;
    cursor: pointer;
    display:flex;
    justify-content: space-between;
    align-items: center;
    transition:all 1s;
    
    @media screen and (max-width: 1000px) {
        width: 97.5%;
    }
`;

export const A = styled.a`
    color: transparent;
`;


export const Sprite_insta_icon = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -53px -235px;
    width: 22px;
    height: 22px;
    position: relative;
    margin-right: 30px;
    vertical-align: middle;
    cursor: pointer;
    
    &:after {
        content: '';
        width: 1px;
        height: 28px;
        background: #000;
        position: absolute;
        right: -15px;
        top: -4px;
    }
`;

export const Sprite_write_logo = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -94px -72px;
    width: 103px;
    height: 29px;
    vertical-align: middle;
    transform: translateY(3px);
    transition: all 0.4s 0.2s ease;
    position: relative;
`;

export const SearchFieldInput = styled.input.attrs(_ => ({
    placeholder: "검색",
}))`
    width: 185px;
    height: 28px;
    background: #fafafa;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    padding: 3px 30px;
    color: #999;
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    outline: none;
    
    &::placeholder {
        font-size: 0;
        color: gray;
        text-indent: 10px;
    }
    
    &:focus {
        + div > {
            span:nth-child(1) {
                transform:translateX(-85px);
            }
        
            span:nth-child(2) {
                display: none;
            }
        } 
        
        ::placeholder {
            font-size: 15px;
        }
    } 
`;

export const FakeField = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: gray;
    pointer-events: none;
`;


export const SearchIcon = styled.span`
    display: inline-block;
    background: url(${img}) no-repeat -337px -246px;
    width: 10px;
    height: 10px;
`;

export const RightIcons = styled.div`
    width: 132px;
    display: flex;
    justify-content: space-between;
`;


export const Sprite_camera_icon = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -271px -104px;
    width: 24px;
    height: 22px;
`;

export const Sprite_compass_icon = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -130px -286px;
    width: 23px;
    height: 23px;
`;

export const Sprite_heart_icon_outline = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -52px -261px;
    width: 24px;
    height: 22px;
`;

export const Sprite_user_icon_outline = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -272px -182px;
    width: 22px;
    height: 24px;
`;




