import {
    Inner,
    InnerTop, InnerTopLeft, InnerTopLeftImgWrap, FirstRow, UserName, SecondRow, ThirdRow,
    ContentsContainer, Pic
} from "../components/style/profile";

const dummy = {
    nickname: 'insta',
    post: [],
    follower: [],
    following: [],
};

const Profile = () => {
    return (
        <>
            <Inner>
                <InnerTop>
                    <InnerTopLeft>
                        <InnerTopLeftImgWrap>
                            <img src="#" alt=""/>
                        </InnerTopLeftImgWrap>
                    </InnerTopLeft>
                    <div>
                        <FirstRow>
                            <UserName>{dummy.nickname}</UserName>
                            <a href="#">로그아웃</a>
                        </FirstRow>
                        <SecondRow>
                            <li>
                                <span>게시물</span>
                                <span> {dummy.post.length}</span>
                            </li>
                            <li>
                                <span>팔로워</span>
                                <span> {dummy.follower.length}</span>
                            </li>
                            <li>
                                <span>팔로우</span>
                                <span> {dummy.following.length}</span>
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
        </>
    );
};

export default Profile;