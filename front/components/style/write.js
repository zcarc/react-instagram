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
    cursor: pointer;
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

export const ImageClose = styled.div`
    display: flex;
    position: absolute;
    top: 6px;
    right: 6px;
    justify-content: center;
    align-items: center;
    width: 17px;
    height: 17px;
    cursor: pointer;
    
    & span {
        display: block;
        height: 12px;
        position: absolute;
        border: 1px solid red;
        border-radius: 15px
    }
    
    & span:first-child {
        transform: rotate(45deg);
    }
    
    & span:last-child {
        transform: rotate(-45deg);
    }
`;
