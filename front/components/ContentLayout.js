import {
    BottomIcons, Comment, CommentContainer, CommentDetail,
    Contents,
    ContentsBox, ImgSection,
    Inner, LeftIcons, Reactions, Nickname,
    ProfileImg, ProfileUser, SpriteBookmarkOutline, SpriteBubbleIcon, SpriteHeartIconOutline,
    SpriteMoreIcon, SpriteShareIcon,
    ToggleBox,
    ToggleBoxLi, LiInput,
    Top,
    UserContainer
} from "./style/content";
import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import CommentLayout from "./CommentLayout";
import {LOAD_MAIN_POSTS_REQUEST} from "../reducers/post";
import Link from "next/link";


const ContentLayout = () => {
    // console.log('dummy:', dummy);

    const {mainPosts} = useSelector(state => state.post);
    const dispatch = useDispatch();
    // const mainPosts = useStore().getState().post.mainPosts;
    // console.log('ContentLayout... mainPosts ', mainPosts);

    useEffect(() => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
        });
    }, []);

    return (
        <>
            <Inner>
                <ContentsBox>

                    {mainPosts && mainPosts.map((v) => {
                        return (
                            <Contents>
                                <Top>
                                    <UserContainer>
                                        <ProfileImg>
                                            <img src="/img/profile_photo.jpg" alt="프로필이미지"/>
                                        </ProfileImg>
                                        <ProfileUser>
                                            <div>{v.User.userNickname}</div>
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
                                            <Nickname>{v.User.userNickname}</Nickname>

                                            {/* desc */}
                                            <div>
                                                {/*{v.content.split(/#[^\s#]+/g).map((w) => {*/}
                                                {/*    console.log('v.content: ', v.content);*/}
                                                {/*    console.log('w: ', w);*/}
                                                {/*    if(w.match(/#[^\s#]+/)) {*/}
                                                {/*        return (*/}
                                                {/*          <Link href="#" key={w}><a>{w}</a></Link>*/}
                                                {/*        );*/}
                                                {/*    }*/}
                                                {/*    return w;*/}
                                                {/*})}*/}
                                                {v.content.split(/(#[^#\s]+)|([^#\s]+)/g).filter(s => !!s).map((s) => {
                                                    if(s.match(/#[^s#]+/)){
                                                        return <Link href="#" key={s}><a>{s}</a></Link>;
                                                    }
                                                    return <span>{s}</span>;
                                                })}
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