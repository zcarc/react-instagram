import {useSelector} from "react-redux";
import {SideBox} from "./style/content";
import React from "react";
import {serverURL} from "../config/url";



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
                                    <img src={`${serverURL}/fileslist/${userSessionData.userProfileImage}`} alt=""/>
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
                    <div><img src="https://dancingastro-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/TheWeekndHeartlessVideo.jpg" alt=""/></div>
                    <div>
                        <div>The Weeknd</div>
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
                    <div><img src="https://s3.eu-west-1.amazonaws.com/media.tcm.ie/media/images/imported/active/1f0bd2a6-0ada-4fff-8955-312f5d2824bd__d9467b42-6f01-4d4b-a1a5-9ce443f43b71.jpg" alt=""/></div>
                    <div>
                        <div>Dua Lipa</div>
                        <div>2시간 전</div>
                    </div>
                </div>
            </div>
        </SideBox>
    );
};

export default SideboxLayout;