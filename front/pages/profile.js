import {
    MainContainer, Inner,
    InnerTop, InnerTopLeft, InnerTopLeftImgWrap, FirstRow, UserName, SecondRow, ThirdRow,
    ContentsContainer, Pic
} from "../components/style/profile";




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
                                <UserName>Username</UserName>
                                <a href="#">로그아웃</a>
                            </FirstRow>
                            <SecondRow>
                                <li>
                                    <span>게시물</span>
                                    {/*{{user.post_set.count}}*/}
                                </li>
                                <li>
                                    <span>팔로워</span>
                                    {/*{{user.profile.follower_count}}*/}
                                </li>
                                <li>
                                    <span>팔로우</span>
                                    {/*{{user.profile.following_count}}*/}
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