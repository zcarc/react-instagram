import {
    ContentsContainer,
    FirstRow, Inner,
    InnerTop,
    InnerTopLeft,
    InnerTopLeftImgWrap, Pic, RowSpan, RowSpanNoneEvents,
    SecondRow,
    ThirdRow,
    UserName
} from "./style/profile";
import Link from "next/link";

const ProfileLayout = ({userSessionData}) => {

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