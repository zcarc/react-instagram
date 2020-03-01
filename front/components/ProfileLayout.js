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

const ProfileLayout = () => {

    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'LOG_IN',
            data: {
                nickname: 'profile01',
                Post: [],
                Followings: [],
                Followers: [],
            },
        });
    }, []);

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
                        <UserName>{user && user.nickname}</UserName>
                        <a href="#">로그아웃</a>
                    </FirstRow>
                    <SecondRow>
                        <li>
                            <span>게시물</span>
                            <span> {user.Post && user.Post.length}</span>
                        </li>
                        <li>
                            <span><Link href="/followers"><a>팔로워</a></Link></span>
                            <span> {user.Followers && user.Followers.length}</span>
                        </li>
                        <li>
                            <span><Link href="/following"><a>팔로잉</a></Link></span>
                            <span> {user.Followings && user.Followings.length}</span>
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