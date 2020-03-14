import {useCallback, useRef} from 'react';
import {
    BottomIcons, Comment, CommentContainer, CommentDetail,
    Contents,
    ImgSection,
    LeftIcons, Reactions, Nickname,
    ProfileImg, ProfileUser, SpriteBookmarkOutline, SpriteBubbleIcon, SpriteHeartIconOutline,
    SpriteMoreIcon, SpriteShareIcon,
    Top,
    UserContainer, SpriteFullHeartIconOutline, ContentMoreContainer, MoreRow
} from "./style/content";
import CommentLayout from "./CommentLayout";
import PostImageLayout from "./PostImageLayout";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {
    BOOKMARK_REQUEST,
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST,
    REMOVE_POST_REQUEST
} from "../reducers/post";
import {FollowingContainer, Inner as FollowInner} from "./style/follow";
import {FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST} from "../reducers/user";

const ContentLayout = ({v}) => {

    const {isLoggedIn, userSessionData} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const moreRef = useRef('');
    const onToggleLike = useCallback((v) => () => {

        console.log('ContentLayout onToggleLike isLoggedIn: ', isLoggedIn);
        console.log('ContentLayout onToggleLike v: ', v);

        if (!isLoggedIn) {
            return alert('로그인이 필요합니다.');
        }

        if (v.Likers.find(v => v.id === userSessionData.id)) {
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

        if (!isLoggedIn) {
            return alert('로그인이 필요합니다.');
        }

        dispatch({
            type: BOOKMARK_REQUEST,
            data: v.id,
        });

    }, [isLoggedIn]);
    const onClickMoreButton = useCallback(() => {
        moreRef.current.style.opacity = 1;
        moreRef.current.style.visibility = 'visible';
    }, []);
    const onClickCloseButton = useCallback((e) => {
        e.stopPropagation();

        moreRef.current.style.opacity = 0;
        moreRef.current.style.visibility = 'hidden';
    }, []);

    const onClickFollowButton = useCallback((v) => (e) => {
        e.stopPropagation();

        dispatch({
            type: FOLLOW_USER_REQUEST,
            data: v.User.id,
        });

    }, []);

    const onClickUnFollowButton = useCallback((v) => (e) => {
        e.stopPropagation();

        console.log("onClickUnFollowButton... v: ", v);

        dispatch({
            type: UNFOLLOW_USER_REQUEST,
            data: v.User.id,
        });

    }, []);

    const onClickPostRemoveButton = useCallback((v) => (e) => {
        e.stopPropagation();

        dispatch({
            type: REMOVE_POST_REQUEST,
            data: v.id,
        });

    }, []);

    // useEffect(() => {
    //
    //     if (followSuccess) {
    //         moreRef.current.style.opacity = 0;
    //         moreRef.current.style.visibility = 'hidden';
    //     }
    //
    // }, [followSuccess]);

    return (
        <>
            <Contents>
                <Top>
                    <UserContainer>
                        <ProfileImg>
                            <Link href={{pathname: '/profile', query: {id: v.UserId}}}
                                  as={`/profile/${v.UserId}`}><a><img src="/img/profile_photo.jpg"
                                                                      alt="프로필이미지"/></a></Link>
                        </ProfileImg>
                        <ProfileUser>
                            <div>
                                <Link href={{pathname: '/user', query: {id: v.UserId}}}
                                      as={`/user/${v.UserId}`}><a
                                    style={{color: 'black'}}>{v.User.userNickname}</a></Link>
                            </div>
                        </ProfileUser>

                        <div>
                            <form action="#" method="post">
                                <input type="submit" value="삭제"/>
                            </form>
                        </div>

                    </UserContainer>

                    {!isLoggedIn ? ''
                        :
                        <ContentMoreContainer onClick={onClickMoreButton}>
                            <SpriteMoreIcon>
                                <FollowingContainer ref={moreRef} style={{opacity: 0, visibility: 'hidden'}}>
                                    <FollowInner style={{minHeight: 'initial'}}>


                                        {!isLoggedIn || v.User.id === userSessionData.id
                                            ? null
                                            : (
                                                userSessionData && userSessionData.Followings && userSessionData.Followings.find(e => e.id === v.User.id)
                                                    ? (
                                                        <MoreRow onClick={onClickUnFollowButton(v)}
                                                                 style={{color: 'red'}}>
                                                            <span>언팔로우</span>
                                                        </MoreRow>
                                                    )
                                                    : (
                                                        <MoreRow onClick={onClickFollowButton(v)}>
                                                            <span>팔로우</span>
                                                        </MoreRow>
                                                    )
                                            )}

                                        {v.UserId !== userSessionData.id
                                            ? ''
                                            :
                                            <MoreRow onClick={onClickPostRemoveButton(v)} style={{color: 'red'}}>
                                                <span>삭제</span>
                                            </MoreRow>
                                        }

                                        <MoreRow onClick={onClickCloseButton}>
                                            <span>취소</span>
                                        </MoreRow>
                                    </FollowInner>
                                </FollowingContainer>

                            </SpriteMoreIcon>
                        </ContentMoreContainer>
                    }

                </Top>

                {v.BookmarkId &&
                <div style={{
                    fontSize: '12px',
                    padding: '10px 0',
                    borderTop: '1px solid #dbdbdb',
                    paddingLeft: '10px'
                }}>
                    *<span style={{fontWeight: 600}}>{v.Bookmark.User.userNickname}</span>님의 게시글입니다.
                </div>}

                <ImgSection>
                    <div>
                        {v.BookmarkId && v.BookmarkId
                            ? (
                                v.Bookmark.Images && v.Bookmark.Images[0]
                                    ? <PostImageLayout images={v.Bookmark.Images}/>
                                    : <img src="/img/post_photo_01.jpg" alt="post_img"/>


                            )
                            : (
                                v.Images && v.Images[0]
                                    ? <PostImageLayout images={v.Images}/>
                                    : <img src="/img/post_photo_01.jpg" alt="post_img"/>
                            )
                        }
                    </div>
                </ImgSection>

                <BottomIcons>
                    <LeftIcons>
                        <div>
                            {v.BookmarkId && v.BookmarkId
                                ? (
                                    v.Bookmark.Likers.find(v => v.id === userSessionData.id)
                                        ? <SpriteFullHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>
                                        : <SpriteHeartIconOutline onClick={onToggleLike(v.Bookmark)}/>
                                )
                                : (
                                    v.Likers.find(v => v.id === userSessionData.id)
                                        ? <SpriteFullHeartIconOutline onClick={onToggleLike(v)}/>
                                        : <SpriteHeartIconOutline onClick={onToggleLike(v)}/>
                                )
                            }
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
                                    if (s.match(/#[^s#]+/)) {
                                        return <Link href={{pathname: '/hashtag', query: {tag: s.slice(1)}}}
                                                     as={`/hashtag/${s.slice(1)}`} key={s}><a>{s}</a></Link>;
                                    }
                                    return <span>{s}</span>;
                                })}

                            </div>
                        </CommentDetail>
                    </Comment>
                </CommentContainer>


                <CommentLayout key={v.id} post={v}/>
            </Contents>

        </>

    );
};

export default ContentLayout;