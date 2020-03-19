import {useSelector} from "react-redux";
import {SideBox} from "./style/content";
import React from "react";



const SideboxLayout = () => {


    const userSessionData = useSelector(state => state.user.userSessionData);

    return (
        <SideBox>

            <div className='first'>
                {userSessionData && Object.keys(userSessionData).length !== 0
                    ? (
                        <>
                            <div>
                                {userSessionData.userProfileImage
                                    ?
                                    <img src={`http://localhost:8080/fileslist/${userSessionData.userProfileImage}`} alt=""/>
                                    : <img src="/img/profile_image_default.jpg" alt=""/>
                                }
                            </div>
                            <div>
                                <div>{userSessionData.userId}</div>
                                <div>{userSessionData.userNickname}</div>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <div>
                                <img src="/img/profile_image_default.jpg" alt=""/>
                            </div>
                            <div>
                                <div>Guest</div>
                                <div></div>
                            </div>
                        </>
                    )
                }

            </div>

            <div className='second'>
                <div className='header'>
                    <div>스토리</div>
                    <div>모두 보기</div>
                </div>
                <div className='userObject'>
                    <div><img src="/img/food.jpg" alt=""/></div>
                    <div>
                        <div>Doja cat</div>
                        <div>1시간 전</div>
                    </div>
                </div>
            </div>

            <div className='third'>
                <div className='header'>
                    <div>회원님을 위한 추천</div>
                    <div>모두 보기</div>
                </div>
                <div className='userObject'>
                    <div><img src="/img/food.jpg" alt=""/></div>
                    <div>
                        <div>Kiana Ledé</div>
                        <div>1시간 전</div>
                    </div>
                </div>
            </div>
        </SideBox>
    );
};

export default SideboxLayout;