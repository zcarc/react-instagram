import Link from 'next/link';
import ContentLayout from "../components/ContentLayout";
import React, {useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {WRITE_REDIRECTION} from "../reducers/post";
import Router from 'next/router';

const Home = () => {

    const dispatch = useDispatch();
    const store = useStore();
    const isPostAdded = store.getState().post.isPostAdded;
    const isLoggedIn = store.getState().user.isLoggedIn;
    console.log('index isPostAdded', isPostAdded);

    useEffect(() => {

        console.log('isPostAdded ',isPostAdded);

        if(isPostAdded){
            dispatch({
                type: WRITE_REDIRECTION,
            });
        }

        if(!isLoggedIn) {
            Router.push('/register');
        }


    }, [isPostAdded, isLoggedIn]);

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
            <ContentLayout/>
        </>
    );
};

export default Home;