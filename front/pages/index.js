import Link from 'next/link';
import ContentLayout from "../components/ContentLayout";
import React, {useEffect} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {LOAD_MAIN_POSTS_REQUEST, WRITE_REDIRECTION} from "../reducers/post";
import {ContentsBox, Inner} from "../components/style/content";

const Home = () => {

    const dispatch = useDispatch();
    const store = useStore();
    const isPostAdded = store.getState().post.isPostAdded;
    // const isLoggedIn = store.getState().user.isLoggedIn;

    const {mainPosts} = useSelector(state => state.post);
    // const mainPosts = useStore().getState().post.mainPosts;
    // console.log('ContentLayout... mainPosts ', mainPosts);


    useEffect(() => {

        if(isPostAdded){
            dispatch({
                type: WRITE_REDIRECTION,
            });
        }

        // if(!isLoggedIn) {
        //     Router.push('/register');
        // }

    }, [isPostAdded]);

    return (
        <>
            {/*<h1>메인페이지</h1>*/}
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
    console.log('home context: ', Object.keys(context));

    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
    });

};

export default Home;