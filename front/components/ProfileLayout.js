import {useEffect} from 'react';
import {
    ContentsContainer,
    FirstRow, Inner,
    InnerTop,
    InnerTopLeft,
    InnerTopLeftImgWrap, Pic,
    SecondRow,
    ThirdRow,
    UserName
} from "./style/profile";
import Link from "next/link";
import {useSelector, useDispatch} from "react-redux";
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_USER_REQUEST} from "../reducers/user";

const ProfileLayout = ({id}) => {

    const {userSessionData, followerList, followingList} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {

        // dispatch({
        //     type: LOAD_USER_REQUEST,
        //     data: id,
        // });

        if(id) {
            dispatch({
                type: LOAD_FOLLOWINGS_REQUEST,
                data: id,
            });

            dispatch({
                type: LOAD_FOLLOWERS_REQUEST,
                data: id,
            });
        }



    }, [id]);

    return (
        <Inner>
            <InnerTop>
                <InnerTopLeft>
                    <InnerTopLeftImgWrap>
                        <img src="#" alt=""/>
                    </InnerTopLeftImgWrap>
                </InnerTopLeft>
                <div>
                    <FirstRow>
                        <UserName>{userSessionData && userSessionData.userNickname}</UserName>
                        <a href="#">로그아웃</a>
                    </FirstRow>
                    <SecondRow>
                        <li>
                            <span>게시물</span>
                            <span>
                                { userSessionData && userSessionData.Posts &&userSessionData.Posts.length }
                            </span>
                        </li>
                        <li>
                            <span><Link href="/followers"><a>팔로워</a></Link></span>

                            <span>
                                { userSessionData && userSessionData.Followers && userSessionData.Followers.length }
                                {/*{id && followerList && followerList.length*/}
                                {/*    ? followerList.length*/}
                                {/*    : 0*/}
                                {/*}*/}
                            </span>
                        </li>
                        <li>
                            <span><Link href="/following"><a>팔로잉</a></Link></span>
                            <span>
                                {userSessionData && userSessionData.Followings && userSessionData.Followings.length }
                                {/*{id && followingList && followingList.length*/}
                                {/*    ? followingList.length*/}
                                {/*    : 0*/}
                                {/*}*/}
                            </span>
                        </li>
                    </SecondRow>
                    <ThirdRow>
                        <span className="on">내가쓴글</span>
                        <span className="">북마크</span>
                    </ThirdRow>
                </div>
            </InnerTop>
            <ContentsContainer className="active">
                <Pic>
                    <a href="#"><img src="#" alt=""/></a>
                </Pic>
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