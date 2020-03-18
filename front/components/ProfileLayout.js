import {
    ContentsContainer,
    FirstRow, Inner,
    InnerTop,
    InnerTopLeft,
    InnerTopLeftImgWrap, Pic, PictureWrap, RowSpan,
    SecondRow,
    ThirdRow,
    UserName
} from "./style/profile";
import Link from "next/link";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {LOG_OUT_REQUEST} from "../reducers/user";

const ProfileLayout = ({userSessionData, isLoggedIn, mainPosts, followerList, followingList, profileUserInfo}) => {

    console.log('profileUserInfo ', profileUserInfo.id);


    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (
        <Inner>
            <InnerTop>
                <InnerTopLeft>
                    <InnerTopLeftImgWrap>
                        <img src="/img/profile_image_default.jpg" alt="post_img"/>
                    </InnerTopLeftImgWrap>
                </InnerTopLeft>
                <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
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
                        {isLoggedIn && <div onClick={onLogout}>로그아웃</div>}
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
                                        :<RowSpan>팔로워</RowSpan>
                                    : <RowSpan>팔로워</RowSpan>
                                : userSessionData && userSessionData.id
                                    ? followerList && Object.keys(followerList).length !== 0
                                        ? <RowSpan><Link href="/followers"><a>팔로워</a></Link></RowSpan>
                                        :<RowSpan>팔로워</RowSpan>
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
                                        :<RowSpan>팔로잉</RowSpan>
                                    : <RowSpan>팔로워</RowSpan>
                                : userSessionData && userSessionData.id
                                    ? followingList && Object.keys(followingList).length !== 0
                                        ? <RowSpan><Link href="/following"><a>팔로잉</a></Link></RowSpan>
                                        :<RowSpan>팔로잉</RowSpan>
                                    : <RowSpan>팔로워</RowSpan>
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
                                                    <img src={`http://localhost:8080/fileslist/${s.Images && s.Images[0].src}`}/>
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

            <ContentsContainer className="active">


                {/*<Pic>*/}
                {/*    <a href="#"><img src="/img/profile_image_default.jpg" alt="post_img"/></a>*/}
                {/*</Pic>*/}

            </ContentsContainer>
            <ContentsContainer>
                <Pic>
                    <a href="#"><img src="#" alt=""/></a>
                </Pic>
            </ContentsContainer>
        </Inner>
    );
};

export default ProfileLayout;