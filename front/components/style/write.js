import styled from "styled-components";

export const PostFormContainer = styled.div`
    max-width: 550px;
    margin: 0 auto;
`;

export const PostForm = styled.form`
    padding: 40px;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    margin: 0 0 10px;
    
    & p {
        margin-bottom: 20px;
    }
    
    & input[type=file] {
        width: 100%;
        background: 0 0;
        border: 1px solid #efefef;
        border-radius: 3px;
        box-sizing: border-box;
        color: #262626;
        font-size: 14px;
        padding: 7px 8px 7px;
    }
    
    & textarea {
        width: 100%;
        background: 0 0;
        border: 1px solid #efefef;
        border-radius: 3px;
        box-sizing: border-box;
        color: #262626;
        font-size: 14px;
        padding: 7px 8px 7px;
    }
    
`;

export const Title = styled.div`
    margin: 0 10px 40px;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
`;

export const Preview = styled.div`
    margin-bottom: 30px;
`;


export const Upload = styled.div`
    max-width: 300px;
    height: 300px;
    border: 1px solid #e6e6e6;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const PlusIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 10px;
    border: 1px solid dodgerblue;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & span {
        position: absolute;
        display: block;
        width: 2px;
        height: 30px;
        background: dodgerblue;
    }
    
    & span:nth-child(2) {
       transform: rotate(90deg);
    }
`;

export const SubmitBtn = styled.input`
    background: #3897f0;
    border-color: #3897f0;
    color: #fff;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    outline: none;
    width: 100%;
    padding: 0;
    margin-top: 10px;
`;


