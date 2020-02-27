import {
    MainContainer, Inner,
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
            <MainContainer>
                <Inner>

                    <InnerTop>

                        <InnerTopLeft>
                            <InnerTopLeftImgWrap>
                                {/*{% if user_profile.picture %}*/}
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

                        {/*{% for post in post_list %}*/}
                        <Pic>
                            <a href="#"><img src="#" alt=""/></a>
                        </Pic>

                        {/*{% endfor %}*/}

                    </ContentsContainer>

                    <ContentsContainer>
                        {/*{% for post in all_post_list %}*/}
                        {/*{% for bookmark_user in post.bookmark_user_set.all %}*/}
                        <Pic>
                            {/*{% if user == bookmark_user.profile.user%}*/}
                            <a href="#"><img src="#" alt=""/></a>
                            {/*{% endif %}*/}
                        </Pic>
                        {/*{% endfor %}*/}
                        {/*{% endfor %}*/}
                    </ContentsContainer>

                </Inner>
            </MainContainer>



        </>
    );
};

export default Profile;