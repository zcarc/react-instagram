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

const ProfileLayout = ( {userSessionData} ) => {

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
                                {userSessionData && userSessionData.Posts && userSessionData.Posts.length}
                            </span>
                        </li>
                        <li>
                            <span><Link href="/followers"><a>팔로워</a></Link></span>
                            <span>
                                {userSessionData && userSessionData.Followers && userSessionData.Followers.length}
                            </span>
                        </li>
                        <li>
                            <span><Link href="/following"><a>팔로잉</a></Link></span>
                            <span>
                                {userSessionData && userSessionData.Followings && userSessionData.Followings.length}
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