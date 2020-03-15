import Link from 'next/link';
import ContentLayout from "../components/ContentLayout";
import React, {useEffect, useCallback, useRef} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {LOAD_MAIN_POSTS_REQUEST, WRITE_REDIRECTION} from "../reducers/post";
import {ContentsBox, Inner} from "../components/style/content";
import {Spinner, Spinner2} from "../components/style/common";

const Home = () => {

    const dispatch = useDispatch();
    const store = useStore();
    const isPostAdded = store.getState().post.isPostAdded;
    // const isLoggedIn = store.getState().user.isLoggedIn;

    const {mainPosts, hasMorePosts} = useSelector(state => state.post);
    // const mainPosts = useStore().getState().post.mainPosts;
    // console.log('ContentLayout... mainPosts ', mainPosts);

    const countIdRef = useRef([]);

    const onScroll = useCallback(() => {
        // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);

        if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {

            // console.log('mainPosts: ', mainPosts);
            // console.log('mainPosts[mainPosts.length -1].id: ', mainPosts[mainPosts.length -1].id);

            if(hasMorePosts ) {
                const lastId = mainPosts[mainPosts.length - 1].id;
                if(!countIdRef.current.includes(lastId)) {
                    dispatch({
                        type: LOAD_MAIN_POSTS_REQUEST,
                        lastId,
                    });
                    countIdRef.current.push(lastId);
                    console.log('countIdRef.current: ', countIdRef.current);
                }
            }

        }

    }, [mainPosts, hasMorePosts]);


    useEffect(() => {

        if(isPostAdded){
            dispatch({
                type: WRITE_REDIRECTION,
            });
        }

        // if(!isLoggedIn) {
        //     Router.push('/register');
        // }



        window.addEventListener('scroll', onScroll);

        return () => {
            // console.log('index useEffect return');
            window.removeEventListener('scroll', onScroll);
        }

    }, [isPostAdded, mainPosts.length]);

    return (
        <>

            {/*<div>*/}
            {/*    <Spinner/>*/}
            {/*</div>*/}


            <div>
                <Link href="/login"><a>로그인</a></Link>
                <Link href="/register"><a>회원가입</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/following"><a>팔로잉</a></Link>
                <Link href="/followers"><a>팔로워</a></Link>
                <Link href="/write"><a>글쓰기</a></Link>
            </div>

            <Inner>
                <ContentsBox>
                    {mainPosts && mainPosts.map( v => <ContentLayout v={v}/> )}
                </ContentsBox>
            </Inner>

        </>
    );
};

Home.getInitialProps = (context) => {
    // console.log('home context: ', Object.keys(context));

    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
    });

};

export default Home;