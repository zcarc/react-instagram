import styled from "styled-components";
import background_origin from "../../public/img/background_origin.png";
import home_phones from "../../public/img/home_phones.png";


export const RegisterMainContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 935px;
    margin: 45px auto 0;
    padding-bottom: 250px;
`;

// Left

export const Left = styled.div`
    background-image: url(${home_phones});
    height: 618px;
    position: relative;
    width: 440px;
    margin-right: -23px;
    margin-bottom: 60px;
    transform: scale(0.9,0.9);
`;

export const LeftContainer = styled.div`
    margin: 99px 0 0 151px;
    position: relative;
`;

export const Slide = styled.img`
    height: 427px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 240px;
    transition: opacity 1.5s ease-in;
    
    &.show {
        opacity: 1;
    }
`;


// Right

export const Right = styled.div`
    max-width: 320px;
    height: 100%;
`;


export const RightFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 1px;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;


export const RightFormContainerTitleImg = styled.div`
    background: url(${background_origin}) no-repeat -98px 0;
    height: 51px;
    width: 175px;
    margin: 22px auto 12px;
`;

export const RightFormContainerFormSection = styled.div`
    margin-bottom: 20px;
`;

export const FormReg = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormTitle = styled.h2`
    font-weight: 600;
    line-height: 20px;
    font-size: 17px;
    margin: 0 40px 15px;
    color: #999;
    text-align: center;
`;

export const FormContainer = styled.div`
    margin: 0 40px 6px;
`;

export const FormInnder = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    box-sizing: border-box;
    color: #262626;
    display: flex;
    font-size: 14px;
    position: relative;
`;

export const FormInputField = styled.input`
    background: #fafafa;
    border: 0;
    flex-grow: 1;
    outline: 0;
    overflow: hidden;
    padding: 9px 80px 7px 8px;
    text-overflow: ellipsis;
    font-size: 12px;
    
    &::placeholder {
        color: #999;
        font-size: 12px;
    }
`;

export const FormSubmitButton = styled.button`
    border: 1px solid transparent;
    background-color: #3897f0;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    padding: 5px 9px;
    text-overflow: ellipsis;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 30px;
`;

export const FormTermsText = styled.p`
    color: #999;
    font-size: 13px;
    margin: 10px 63px;
    text-align: center;
    
    & span {
        font-weight: 600;
    }
`;


export const RightLoginContainer = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 0;
    margin-bottom: 10px;
`;

export const LoginInner = styled.div`
    font-size: 13px;
    color: #262626;
    margin: 15px;
    text-align: center;
    
    & a {
        color: #3897f0;
        text-decoration: none;
    }
    
    & a:visited {
        color: #3897f0;
    }
`;


export const RightAppsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RightAppsText = styled.p`
    font-size: 13px;
    color: #262626;
    margin: 10px 20px;
    text-align: center;
`;

export const RightAppsIcons = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    
    & a:nth-child(1) {
        margin-right: 8px;
    }
    
    & img {
        height: 40px;
        cursor: pointer;
    }
`;

