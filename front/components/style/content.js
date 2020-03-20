import styled from "styled-components";
import img from "../../public/background01.png";


export const Inner = styled.div`
    position: relative;
    
    @media screen and (max-width: 1000px) {
        width: 93.5%;
    }
`;

export const ContentsBox = styled.div`
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Contents = styled.article`
    max-width: 614px;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 3px;
    margin-bottom: 60px;
    background: white;
`;

export const Top = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 17px;
`;

export const UserContainer = styled.div`
    display: flex;
`;

export const ProfileImg = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    
    & img {
        width: 100%;
        height: 100%;
    }
`;

export const ProfileUser = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
`;

export const SpriteMoreIcon = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -301px -218px;
    width: 15px;
    height: 3px;
    cursor: pointer;
`;

export const ToggleBox = styled.ul`
    text-align: center;
    position: absolute;
    right: 0;
    top: 20px;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 3px;
    display: none;
`;

export const ToggleBoxLi = styled.li`
    padding: 5px 10px;
    background: white;
`;

export const LiInput = styled.input`
    border: none;
    font-size: inherit;
`;

export const ImgSection = styled.div`
    overflow: hidden;
    
    & img {
        width: 100%;
    }
`;

export const BottomIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

export const LeftIcons = styled.div`
    display: flex;
    
    & > div {
        margin-right: 10px;
        cursor: pointer;
    }
`;

export const SpriteHeartIconOutline = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -52px -261px;
    width: 24px;
    height: 22px;
`;

export const SpriteFullHeartIconOutline = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -26px -261px;
    width: 24px;
    height: 22px;
`;

export const SpriteBubbleIcon = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -239px -202px;
    width: 24px;
    height: 24px;
`;

export const SpriteShareIcon = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -324px -52px;
    width: 21px;
    height: 24px;
`;

export const SpriteBookmarkOutline = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -237px -286px;
    width: 19px;
    height: 24px;
    cursor: pointer;
`;

export const Reactions = styled.div`
    padding: 5px 20px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #262626;
    
    & > span {
        font-weight: 600;
    }
`;


export const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    white-space: pre;
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`;

export const CommentDetail = styled.div`
    display: flex;
`;

export const Nickname = styled.div`
    font-weight: 600;
    margin-right: 10px;
`;

export const SpriteSmallHeartIconOutline = styled.div`
    display: inline-block;
    background: url(${img}) no-repeat -323px -274px;
    width: 12px;
    height: 11px;
`;

export const Timer = styled.div`
    font-size: 10px;
    letter-spacing: 0.2px;
    color: #999;
    border-bottom: 1px solid rgba(0,0,0,0.09);
    padding: 10px 20px;
`;

export const CommentField = styled.div`
    min-height: 56px;
    padding: 0 20px;
    position: relative;
`;

export const CommentFieldInput = styled.input`
    width: 100%;
    height: 56px;
    border: none;
    outline: none;
    background: transparent;
`;

export const UploadBtn = styled.div`
    font-size: 14px;
    color: #3897f0;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 1;
`;


export const ContentMoreContainer = styled.div`
    display: flex;
    height: 15px;
    width: 25px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


export const MoreRow = styled.nav`
    width: 100%;
    cursor: pointer;
    
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

export const SideBox = styled.div`
    width: 300px;
    height: 500px;
    margin-left: 25px;
    
    @media screen and (max-width: 1100px) {
        display: none;
    }
    
    & .first {
        height: 70px;
        display: flex;
        align-items: center;
        margin-left: 5px;
        margin-bottom: 10px;
        
        & > div:first-child {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 12px;
            
            
            & img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        
        & > div:last-child {
            font-size: 14px;
            
            & > div:first-child {
                font-weight: bold;
                margin-bottom: 5px;
             }
            
            & > div:last-child {
                font-size: 12px;
                color: #999;
             }
         }
        
    }
    
    & .second {
        background: antiquewhite;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        background: white;
        border: 1px solid rgba(0,0,0,0.09);
        font-weight: bold;
        
        & .header {
            display: flex;
            justify-content: space-between;
            padding: 15px;
            
            & > div:first-child {
                color: #999;
                font-size: 14px;
            }
            
            & > div:last-child {
                font-size: 12px;
            }

        }
        
        & .userObject {
        
            display: flex;
            padding: 8px 15px;
            height: 150px;
            
            
                & > div:first-child {
                    width: 34px;
                    height: 34px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    & img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                
                & > div:last-child {
                    margin-left: 10px;
                    font-size: 14px;
                    
                        & > div:first-child {
                            margin-bottom: 6px;
                        }
                        
                        & > div:last-child {
                            font-size: 10px;
                            color: #999;
                         }
                }
            }
        
    }
    
    
    & .third {
    
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid rgba(0,0,0,0.09);
        font-weight: bold;
        
        & .header {
            display: flex;
            justify-content: space-between;
            padding: 15px;
            
            & > div:first-child {
                color: #999;
                font-size: 14px;
            }
            
            & > div:last-child {
                font-size: 12px;
            }
        }
        
        & .userObject {
        
            display: flex;
            padding: 8px 15px;
            
                & > div:first-child {
                    width: 34px;
                    height: 34px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    & img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                
                & > div:last-child {
                    margin-left: 10px;
                    font-size: 14px;
                    margin-bottom: 10px;
                    
                        & > div:first-child {
                            margin-bottom: 6px;
                        }
                        
                        & > div:last-child {
                            font-size: 10px;
                            color: #999;
                         }
                }
                
            }
    
    }
`;