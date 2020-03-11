import {useCallback} from 'react';
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
    UserContainer, SpriteFullHeartIconOutline
} from "./style/content";
import CommentLayout from "./CommentLayout";
import Link from "next/link";
import PostImageLayout from "./PostImageLayout";
import {useDispatch, useSelector} from "react-redux";
import {
    BOOKMARK_REQUEST,
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST
} from "../reducers/post";





const ContentLayout = ({ mainPosts }) => {


    const { isLoggedIn, userSessionData } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onToggleLike = useCallback((v) => () => {

        console.log('ContentLayout onToggleLike isLoggedIn: ', isLoggedIn);
        console.log('ContentLayout onToggleLike v: ', v);

        if(!isLoggedIn){
            return alert('로그인이 필요합니다.');
        }

        if( v.Likers.find(v => v.id === userSessionData.id) ) {
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: v.id,
            });

        } else {
            dispatch({
                type: LIKE_POST_REQUEST,
                data: v.id,
            });
        }

    }, [isLoggedIn, userSessionData && userSessionData.id]);


    const onBookmark = useCallback((v) => () => {

        if(!isLoggedIn) {
            return alert('로그인이 필요합니다.');
        }

        dispatch({
            type: BOOKMARK_REQUEST,
            data: v.id,
        });

    }, [isLoggedIn]);


    return (
        <>
            <Inner>
                <ContentsBox>

                    {mainPosts && mainPosts.map((v) => {
                        return (
                            v.BookmarkId
                                    ? <Contents>
                                        <Top>
                                            <UserContainer>
                                                <ProfileImg>
                                                    <Link href={ {pathname: '/profile', query: { id: v.UserId }} } as={`profile/${v.UserId}`}><a><img src="/img/profile_photo.jpg" alt="프로필이미지"/></a></Link>
                                                </ProfileImg>
                                                <ProfileUser>
                                                    <div>
                                                        <Link href={ {pathname: '/user', query: { id: v.UserId }} } as={`/user/${v.UserId}`}><a style={{color: 'black'}}>{v.User.userNickname}</a></Link>
                                                    </div>
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
                                        <div style={{fontSize: '12px', padding: '10px 0', borderTop: '1px solid #dbdbdb', paddingLeft: '10px'}}>
                                            *<span style={{fontWeight: 600}}>{v.Bookmark.User.userNickname}</span>님의 게시글입니다.
                                        </div>
                                        <ImgSection>
                                            <div>
                                                {v.Bookmark.Images && v.Bookmark.Images[0]
                                                    ? <PostImageLayout images={v.Bookmark.Images}/>
                                                    : <img src="/img/post_photo_01.jpg" alt="post_img"/>}
                                                {/*{v.BookmarkId*/}
                                                {/*    ? (*/}
                                                {/*        v.Bookmark.Images && v.Bookmark.Images[0]*/}
                                                {/*            ? <PostImageLayout images={v.Bookmark.Images}/>*/}
                                                {/*            : <img src="/img/post_photo_01.jpg" alt="post_img"/>*/}
                                                {/*    )*/}
                                                {/*    : (*/}
                                                {/*        v.Images && v.Images[0]*/}
                                                {/*            ? <PostImageLayout images={v.Images}/>*/}
                                                {/*            : <img src="/img/post_photo_01.jpg" alt="post_img"/>*/}
                                                {/*    )*/}
                                                {/*}*/}
                                            </div>
                                        </ImgSection>

                                        <BottomIcons>
                                            <LeftIcons>
                                                <div>
                                                    {v.Bookmark.Likers.find(v => v.id === userSessionData.id)
                                                        ? <SpriteFullHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>
                                                        : <SpriteHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>}
                                                    {/*{userSessionData && v.BookmarkId*/}
                                                    {/*    ? (*/}
                                                    {/*        v.Bookmark.Likers.find(v => v.id === userSessionData.id)*/}
                                                    {/*            ? <SpriteFullHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>*/}
                                                    {/*            : <SpriteHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>*/}
                                                    {/*    )*/}
                                                    {/*    : (*/}
                                                    {/*        v.Likers.find(v => v.id === userSessionData.id)*/}
                                                    {/*            ? <SpriteFullHeartIconOutline onClick={onToggleLike(v)}/>*/}
                                                    {/*            : <SpriteHeartIconOutline onClick={onToggleLike(v)}/>*/}
                                                    {/*    )*/}
                                                    {/*}*/}

                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <SpriteBubbleIcon/>
                                                    </a>
                                                </div>

                                                <SpriteShareIcon/>
                                            </LeftIcons>

                                            <div>
                                                <SpriteBookmarkOutline onClick={onBookmark(v)}/>
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
                                                                return <Link href={ {pathname: '/hashtag', query: { tag: s.slice(1) }} } as={`/hashtag/${s.slice(1)}`} key={s}><a>{s}</a></Link>;
                                                            }
                                                            return <span>{s}</span>;
                                                        })}
                                                    </div>
                                                </CommentDetail>
                                            </Comment>
                                        </CommentContainer>


                                        <CommentLayout key={v.id} post={v}/>
                                    </Contents>
                                    : <Contents>
                                        <Top>
                                            <UserContainer>
                                                <ProfileImg>
                                                    <Link href={ {pathname: '/profile', query: { id: v.UserId }} } as={`profile/${v.UserId}`}><a><img src="/img/profile_photo.jpg" alt="프로필이미지"/></a></Link>
                                                </ProfileImg>
                                                <ProfileUser>
                                                    <div>
                                                        <Link href={ {pathname: '/user', query: { id: v.UserId }} } as={`/user/${v.UserId}`}><a style={{color: 'black'}}>{v.User.userNickname}</a></Link>
                                                    </div>
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
                                                {v.Images && v.Images[0]
                                                    ? <PostImageLayout images={v.Images}/>
                                                    : <img src="/img/post_photo_01.jpg" alt="post_img"/>}
                                                {/*{v.BookmarkId*/}
                                                {/*    ? (*/}
                                                {/*        v.Bookmark.Images && v.Bookmark.Images[0]*/}
                                                {/*            ? <PostImageLayout images={v.Bookmark.Images}/>*/}
                                                {/*            : <img src="/img/post_photo_01.jpg" alt="post_img"/>*/}
                                                {/*    )*/}
                                                {/*    : (*/}
                                                {/*        v.Images && v.Images[0]*/}
                                                {/*            ? <PostImageLayout images={v.Images}/>*/}
                                                {/*            : <img src="/img/post_photo_01.jpg" alt="post_img"/>*/}
                                                {/*    )*/}
                                                {/*}*/}
                                            </div>
                                        </ImgSection>

                                        <BottomIcons>
                                            <LeftIcons>
                                                <div>
                                                    {v.Likers.find(v => v.id === userSessionData.id)
                                                        ? <SpriteFullHeartIconOutline onClick={onToggleLike(v)}/>
                                                        : <SpriteHeartIconOutline onClick={onToggleLike(v)}/>}
                                                    {/*{userSessionData && v.BookmarkId*/}
                                                    {/*    ? (*/}
                                                    {/*        v.Bookmark.Likers.find(v => v.id === userSessionData.id)*/}
                                                    {/*            ? <SpriteFullHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>*/}
                                                    {/*            : <SpriteHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>*/}
                                                    {/*    )*/}
                                                    {/*    : (*/}
                                                    {/*        v.Likers.find(v => v.id === userSessionData.id)*/}
                                                    {/*            ? <SpriteFullHeartIconOutline onClick={onToggleLike(v)}/>*/}
                                                    {/*            : <SpriteHeartIconOutline onClick={onToggleLike(v)}/>*/}
                                                    {/*    )*/}
                                                    {/*}*/}


                                                </div>
                                                <div>
                                                    <a href="#">
                                                        <SpriteBubbleIcon/>
                                                    </a>
                                                </div>

                                                <SpriteShareIcon/>
                                            </LeftIcons>

                                            <div>
                                                <SpriteBookmarkOutline onClick={onBookmark(v)}/>
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
                                                                return <Link href={ {pathname: '/hashtag', query: { tag: s.slice(1) }} } as={`/hashtag/${s.slice(1)}`} key={s}><a>{s}</a></Link>;
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