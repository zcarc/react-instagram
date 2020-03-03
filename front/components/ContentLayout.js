import {
    BottomIcons, Comment, CommentContainer, CommentDetail, CommentField, CommentFieldInput,
    Contents,
    ContentsBox, ImgSection,
    Inner, LeftIcons, Reactions, Nickname,
    ProfileImg, ProfileUser, SpriteBookmarkOutline, SpriteBubbleIcon, SpriteHeartIconOutline,
    SpriteMoreIcon, SpriteShareIcon, SpriteSmallHeartIconOutline, Timer,
    ToggleBox,
    ToggleBoxLi, LiInput,
    Top, UploadBtn,
    UserContainer
} from "./style/content";
import {useSelector, useStore} from "react-redux";
import CommentLayout from "./CommentLayout";


const ContentLayout = () => {
    // console.log('dummy:', dummy);

    const {mainPosts} = useSelector(state => state.post);
    // const mainPosts = useStore().getState().post.mainPosts;
    console.log('ContentLayout... mainPosts ', mainPosts);

    return (
        <>
            <Inner>
                <ContentsBox>

                    {mainPosts.map((v) => {
                        return (
                            <Contents>
                                <Top>
                                    <UserContainer>
                                        <ProfileImg>
                                            <img src="/img/profile_photo.jpg" alt="프로필이미지"/>
                                        </ProfileImg>
                                        <ProfileUser>
                                            <div>{v.User.nickname}</div>
                                        </ProfileUser>

                                        <div>
                                            <form action="#" method="post">
                                                <input type="submit" value="삭제"/>
                                            </form>
                                        </div>

                                    </UserContainer>

                                    <SpriteMoreIcon>
                                        <ToggleBox>
                                            <ToggleBoxLi>
                                                <LiInput type="submit" value="팔로우"/>
                                            </ToggleBoxLi>
                                        </ToggleBox>
                                    </SpriteMoreIcon>
                                </Top>

                                <ImgSection>
                                    <div>
                                        <img src={v.img ? v.img : "/img/post_photo_01.jpg"} alt="post_img"/>
                                    </div>
                                </ImgSection>

                                <BottomIcons>
                                    <LeftIcons>
                                        <div>
                                            <SpriteHeartIconOutline/>
                                        </div>
                                        <div>
                                            <a href="#">
                                                <SpriteBubbleIcon/>
                                            </a>
                                        </div>

                                        <SpriteShareIcon/>
                                    </LeftIcons>

                                    <div>
                                        <SpriteBookmarkOutline/>
                                    </div>
                                </BottomIcons>

                                <Reactions>
                                    <span>좋아요 1개</span>
                                    <span>북마크 0개</span>
                                </Reactions>

                                <CommentContainer>
                                    <Comment>
                                        <CommentDetail>
                                            <Nickname>{v.User.nickname}</Nickname>
                                            {/* desc */}
                                            <div>
                                                {v.content}
                                            </div>
                                        </CommentDetail>
                                    </Comment>
                                </CommentContainer>


                                <CommentLayout key={v.id} post={v}/>
                            </Contents>
                        );
                    })}


                </ContentsBox>
            </Inner>

        </>

    );
};

export default ContentLayout;