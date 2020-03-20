import {useCallback, useRef, useEffect} from 'react';
import {
    BottomIcons, Comment, CommentContainer, CommentDetail,
    Contents,
    ImgSection,
    LeftIcons, Reactions, Nickname,
    ProfileImg, ProfileUser, SpriteBookmarkOutline, SpriteBubbleIcon, SpriteHeartIconOutline,
    SpriteMoreIcon, SpriteShareIcon,
    Top,
    UserContainer, SpriteFullHeartIconOutline, ContentMoreContainer, MoreRow
} from "../components/style/content";
import CommentLayout from "./CommentLayout";
import PostImageLayout from "../components/PostImageLayout";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {
    BOOKMARK_REQUEST,
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST,
    REMOVE_POST_REQUEST
} from "../reducers/post";
import {FollowingContainer, Inner as FollowInner} from "../components/style/follow";
import {FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST} from "../reducers/user";
import Router from "next/router";

const SinglePostLayout = ({v}) => {

    const {isLoggedIn, userSessionData} = useSelector(state => state.user);
    const isPostRemoved = useSelector(state => state.post.isPostRemoved);
    const dispatch = useDispatch();
    const moreRef = useRef('');

    const onToggleLike = useCallback((v) => () => {


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

    useEffect(() => {
        if(isPostRemoved) {
            Router.push('/');
        }
    }, [isPostRemoved]);

    return (
        <>

            <Contents>
                <Top>
                    <UserContainer>
                        <ProfileImg>
                            {v.User && v.User.userProfileImage
                                ? (
                                    <Link href={{pathname: '/profile', query: {id: v.UserId}}}
                                          as={`/profile/${v.UserId}`}><a><img src={`http://wrkreactapp.site:8080/fileslist/${v.User.userProfileImage}`}
                                                                              alt="프로필이미지"/></a></Link>
                                )
                                : (
                                    <Link href={{pathname: '/profile', query: {id: v.UserId}}}
                                          as={`/profile/${v.UserId}`}><a><img src="/img/profile_image_default.jpg"
                                                                              alt="프로필이미지"/></a></Link>
                                )}
                        </ProfileImg>
                        <ProfileUser>
                            <div>
                                <Link href={{pathname: '/user', query: {id: v.UserId}}}
                                      as={`/user/${v.UserId}`}><a
                                    style={{color: 'black'}}>{v.User && v.User.userNickname}</a></Link>
                            </div>
                        </ProfileUser>

                    </UserContainer>

                    {!isLoggedIn ? ''
                        :
                        <ContentMoreContainer onClick={onClickMoreButton}>
                            <SpriteMoreIcon>
                                <FollowingContainer ref={moreRef} style={{opacity: 0, visibility: 'hidden'}}>
                                    <FollowInner style={{minHeight: 'initial'}}>


                                        {!isLoggedIn || v && v.User && v.User.id === (userSessionData && userSessionData.id)
                                            ? null
                                            : (
                                                userSessionData && userSessionData.Followings && userSessionData.Followings.find(e => e.id === (v && v.User && v.User.id))
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
                    fontSize: '11px',
                    padding: '18px 0 18px 15px',
                    borderTop: '1px solid #dbdbdb',
                }}>
                    <span style={{fontWeight: 600}}>{v.Bookmark.User.userNickname}</span>님의 게시글입니다.
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
                            {v.Likers && v.Likers.find(v => v.id === (userSessionData && userSessionData.id))
                                ? <SpriteFullHeartIconOutline onClick={onToggleLike(v)}/>
                                : <SpriteHeartIconOutline onClick={onToggleLike(v)}/>}
                        </div>


                        <div style={{pointerEvents: 'none'}}>
                            <div>
                                <SpriteBubbleIcon />
                            </div>
                        </div>

                        <SpriteShareIcon style={{pointerEvents: 'none'}}/>
                    </LeftIcons>


                </BottomIcons>

                <Reactions>
                    <span >좋아요 {v.Likers && v.Likers.length}개</span>
                </Reactions>

                <CommentContainer>
                    <Comment>
                        <CommentDetail>
                            <Nickname>{v.User && v.User.userNickname}</Nickname>

                            <div>
                                {v.content && v.content.split(/(#[^#\s]+)|([^#\s]+)/g).filter(s => !!s).map((s, i) => {
                                    if (s.match(/#[^s#]+/)) {
                                        return <Link href={{pathname: '/hashtag', query: {tag: s.slice(1)}}}
                                                     as={`/hashtag/${s.slice(1)}`} key={i}><a>{s}</a></Link>;
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

export default SinglePostLayout;