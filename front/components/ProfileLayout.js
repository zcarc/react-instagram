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

const ProfileLayout = ({userSessionData, isLoggedIn, mainPosts}) => {

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
                <div>
                    <FirstRow>
                        <UserName>{userSessionData && userSessionData.userNickname}</UserName>
                        {isLoggedIn && <div onClick={onLogout}>로그아웃</div>}
                    </FirstRow>
                    <SecondRow>
                        <li>
                            <RowSpan>게시글</RowSpan>
                            <span>
                                {userSessionData && userSessionData.Posts && userSessionData.Posts.length}
                            </span>
                        </li>
                        <li>
                            {Object.keys(userSessionData.Followers).length !== 0
                                ? <RowSpan><Link href="/followers"><a>팔로워</a></Link></RowSpan>
                                : <RowSpan>팔로워</RowSpan>
                            }

                            <span>
                                {userSessionData && userSessionData.Followers && userSessionData.Followers.length}
                            </span>
                        </li>
                        <li>
                            {Object.keys(userSessionData.Followings).length !== 0
                                ? <RowSpan><Link href="/following"><a>팔로잉</a></Link></RowSpan>
                                : <RowSpan>팔로잉</RowSpan>
                            }
                            <span>
                                {userSessionData && userSessionData.Followings && userSessionData.Followings.length}
                            </span>
                        </li>
                    </SecondRow>
                    <ThirdRow>
                        <span className="on">게시글</span>
                        <span className="">북마크</span>
                    </ThirdRow>
                </div>
            </InnerTop>

            <PictureWrap>

                <div className="segment"/>


                        <div className="row">
                            <div className="outside">
                                <div className="inside">
                                    <img src="https://images.unsplash.com/photo-1584398909393-b005542baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                            </div>
                            <div className="outside">
                                <div className="inside">
                                    <img src="https://images.unsplash.com/photo-1584398909393-b005542baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                            </div>
                            <div className="outside">
                                <div className="inside">
                                    <img src="https://images.unsplash.com/photo-1584398909393-b005542baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                </div>
                            </div>
                        </div>



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