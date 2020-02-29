import styled from "styled-components";


export const FollowingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, .65);
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    width: 260px;
    min-height: 300px;
    max-height: 400px;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    
    @media (min-width: 736px) {
        width: 400px;
    }
`;


export const FirstRow = styled.div`
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    height: 43px;
`;


export const StartEnd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 48px;
`;

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 16px;
    font-weight: 600;
`;

// export const Cancel = styled.button`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: 0 0;
//     border: 0;
//     cursor: pointer;
// `;

export const Cancel = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: 0 0;
    border: 0;
    cursor: pointer;
`;

export const SVG = styled.svg`
    display: block;
    position: relative;
`;

export const SecondRow = styled.nav`
    width: 100%;
    
    & span {
        display: flex;
        justify-content: center;
        flex: 1;
        font-weight: 600;
        border-bottom: 1px solid rgba(0, 0, 0, 0.35);
        padding: 12px 0;
        user-select: none;
    }
`;

export const ThirdRow = styled.div`
    border-radius: 12px;
    display: block;
    min-height: 300px;
    flex: 1 1;
    overflow-y: scroll;
`;


export const ScrollContainer = styled.ul`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ScrollWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
`;

export const UserObject = styled.li`
    padding: 5px 16px;
    box-sizing: border-box;
`;


export const UserObjectInner = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FollowUser = styled.div`
    display: flex;
    align-items: center;
`;


export const UserImage = styled.div`
    margin-right: 12px;
    
    & > div {
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 50%;
    }
    
    & img {
        width: 100%;
        height: 100%;
    }
`;


export const FollowingName = styled.div`

    & a {
        text-decoration: none;
        color: #003569;
        font-weight: 600;
    }
`;


export const FollowToggleButton = styled.button`
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 5px 9px;
    background: 0;
    font-weight: 600;
`;



