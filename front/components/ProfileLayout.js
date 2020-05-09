import {
    FirstRow, Inner,
    InnerTop,
    InnerTopLeft,
    InnerTopLeftImgWrap, PictureWrap, RowSpan,
    SecondRow,
    UserName
} from "./style/profile";
import Link from "next/link";
import {useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
import {LOG_OUT_REQUEST, UPDATE_USER_PROFILE_IMAGE_REQUEST} from "../reducers/user";
import {serverURL} from "../config/url";

const ProfileLayout = ({userSessionData, isLoggedIn, mainPosts, followerList, followingList, profileUserInfo}) => {

    // console.log('profileUserInfo ', profileUserInfo.id);

    const profileImageInput = useRef('');

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    const onChangeInput = useCallback((e) => {
        // console.log('e.target.files: ', e.target.files[0]);

        const newFormData = new FormData();
        newFormData.append('image', e.target.files[0]);

        dispatch({
            type: UPDATE_USER_PROFILE_IMAGE_REQUEST,
            data: newFormData,
        });

    }, []);

    const onClickImageUpload = useCallback(() => {
        profileImageInput.current.click();
    }, []);

    return (
        <Inner>
            <InnerTop>
                <InnerTopLeft>
                    <InnerTopLeftImgWrap>
                        {/*<img src="/img/profile_image_default.jpg" alt="post_img"/>*/}

                        {profileUserInfo && profileUserInfo[0]
                            ? userSessionData && userSessionData.id === profileUserInfo[0].id
                                ? userSessionData && userSessionData.userProfileImage
                                    ? <img className='user' onClick={onClickImageUpload}
                                           src={`${serverURL}/fileslist/${userSessionData.userProfileImage}`}
                                           alt="post_img"/>
                                    : <img className='user' onClick={onClickImageUpload} src="/img/profile_image_default.jpg" alt="post_img"/>

                                : profileUserInfo[0] && profileUserInfo[0].userProfileImage
                                    ? <img src={`${serverURL}/fileslist/${profileUserInfo[0].userProfileImage}`}
                                           alt="post_img"/>
                                    : <img src="/img/profile_image_default.jpg" alt="post_img"/>

                            : userSessionData && userSessionData.userProfileImage
                                ? <img className='user' onClick={onClickImageUpload}
                                       src={`${serverURL}/fileslist/${userSessionData.userProfileImage}`}
                                       alt="post_img"/>
                                : <img className='user' onClick={onClickImageUpload} src="/img/profile_image_default.jpg" alt="post_img"/>
                        }

                        {/*{profileUserInfo && profileUserInfo[0] && userSessionData && userSessionData.id === profileUserInfo[0].id*/}
                        {/*    ? profileUserInfo[0] && profileUserInfo[0].userProfileImage*/}
                        {/*        ? <img className='user' src={`profileUserInfo[0].userProfileImage`} alt="post_img"/>*/}
                        {/*        : <img className='user' src="/img/profile_image_default.jpg" alt="post_img"/>*/}

                        {/*    : profileUserInfo[0] && profileUserInfo[0].userProfileImage*/}
                        {/*        ? <img src={`profileUserInfo[0].userProfileImage`} alt="post_img"/>*/}
                        {/*        : <img className='user' src="/img/profile_image_default.jpg" alt="post_img"/>*/}
                        {/*}*/}

                    </InnerTopLeftImgWrap>

                    <input type="file" ref={profileImageInput} onChange={onChangeInput} hidden/>

                </InnerTopLeft>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <FirstRow>
                        <UserName>

                            {profileUserInfo && profileUserInfo[0]
                                ? userSessionData && userSessionData.id === profileUserInfo[0].id
                                    ? userSessionData.userNickname
                                    : profileUserInfo[0].userNickname

                                : userSessionData && userSessionData.userNickname}

                            {/*{userSessionData && userSessionData.userNickname*/}
                            {/*    ? userSessionData && userSessionData.userNickname*/}
                            {/*    : Object.keys(profileUserInfo).length !== 0 && profileUserInfo[0]*/}
                            {/*    && profileUserInfo[0].userNickname*/}
                            {/*}*/}

                            {/*{Object.keys(profileUserInfo).length !== 0 && profileUserInfo[0]*/}
                            {/*    ? profileUserInfo[0].userNickname*/}
                            {/*    : userSessionData && userSessionData.userNickname}*/}

                            {/*{userSessionData && userSessionData && userSessionData.userNickname}*/}
                        </UserName>
                        {isLoggedIn && <div className="logout" onClick={onLogout}>로그아웃</div>}
                    </FirstRow>
                    <SecondRow>
                        <li>
                            <RowSpan>게시글</RowSpan>
                            <span>
                                {Object.keys(profileUserInfo).length !== 0 && profileUserInfo[0]
                                    ? profileUserInfo[0].Posts
                                    : userSessionData && userSessionData.Posts && userSessionData.Posts.length}
                                {/*{userSessionData && userSessionData.Posts && userSessionData.Posts.length}*/}

                            </span>
                        </li>
                        <li>

                            {profileUserInfo && profileUserInfo[0]
                                ? userSessionData && userSessionData.id === profileUserInfo[0].id
                                    ? followerList && Object.keys(followerList).length !== 0
                                        ? <RowSpan><Link href="/followers"><a>팔로워</a></Link></RowSpan>
                                        : <RowSpan>팔로워</RowSpan>
                                    : <RowSpan>팔로워</RowSpan>
                                : userSessionData && userSessionData.id
                                    ? followerList && Object.keys(followerList).length !== 0
                                        ? <RowSpan><Link href="/followers"><a>팔로워</a></Link></RowSpan>
                                        : <RowSpan>팔로워</RowSpan>
                                    : <RowSpan>팔로워</RowSpan>
                            }

                            {/*{userSessionData && userSessionData.Followers && Object.keys(userSessionData.Followers).length !== 0*/}
                            {/*    ? <RowSpan><Link href="/followers"><a>팔로워</a></Link></RowSpan>*/}
                            {/*    : <RowSpan>팔로워</RowSpan>*/}
                            {/*}*/}

                            <span>
                                {followerList && followerList.length}
                                {/*{userSessionData && userSessionData.Followers && userSessionData.Followers.length}*/}
                            </span>
                        </li>
                        <li>

                            {profileUserInfo && profileUserInfo[0]
                                ? userSessionData && userSessionData.id === profileUserInfo[0].id
                                    ? followingList && Object.keys(followingList).length !== 0
                                        ? <RowSpan><Link href="/following"><a>팔로잉</a></Link></RowSpan>
                                        : <RowSpan>팔로잉</RowSpan>
                                    : <RowSpan>팔로잉</RowSpan>
                                : userSessionData && userSessionData.id
                                    ? followingList && Object.keys(followingList).length !== 0
                                        ? <RowSpan><Link href="/following"><a>팔로잉</a></Link></RowSpan>
                                        : <RowSpan>팔로잉</RowSpan>
                                    : <RowSpan>팔로잉</RowSpan>
                            }

                            {/*{userSessionData && userSessionData.Followings && Object.keys(userSessionData.Followings).length !== 0*/}
                            {/*    ? <RowSpan><Link href="/following"><a>팔로잉</a></Link></RowSpan>*/}
                            {/*    : <RowSpan>팔로잉</RowSpan>*/}
                            {/*}*/}
                            <span>
                                {followingList && followingList.length}
                            </span>
                            {/*<span>*/}
                            {/*    {userSessionData && userSessionData.Followings && userSessionData.Followings.length}*/}
                            {/*</span>*/}
                        </li>
                    </SecondRow>
                    {/*<ThirdRow>*/}
                    {/*    <span>게시글</span>*/}
                    {/*</ThirdRow>*/}
                </div>
            </InnerTop>

            <PictureWrap>

                <div className="segment"/>

                {mainPosts && mainPosts.reduce((acc, value, index) => {
                    if (index % 3 === 0) {
                        acc[index] = [];
                        acc[index].push(value);

                    } else {
                        acc[acc.length - 1].push(value);
                    }
                    return acc;
                }, []).map((v, i) => {
                    return (
                        <div className="row" key={i}>
                            {v.map((s, i) => {
                                return (
                                    <div className="outside" key={i}>
                                        <div className="inside">
                                            <Link href={{pathname: 'post', query: {id: s.id}}} as={`/post/${s.id}`}>
                                                <a>
                                                    {s.Images && s.Images[0] && s.Images[0].src
                                                        ? <img
                                                            src={`${serverURL}/fileslist/${s.Images[0].src}`}/>
                                                        : <img src="/img/image-not-available.jpg" alt="post_img"/>
                                                    }
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )
                })}

            </PictureWrap>
        </Inner>
    );
};

export default ProfileLayout;