import Link from 'next/link';
import ContentLayout from "../components/ContentLayout";
import React from "react";

const dummyPost = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'react01',
        },
        content:'첫번째 게시글',
        img: 'https://images.unsplash.com/photo-1582739736802-8e8ce0258df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    }, {
        User: {
            id: 2,
            nickname: 'react02',
        },
        content:'두번째 게시글',
        img: 'https://images.unsplash.com/photo-1582715750271-152d89e8a190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
    ]};

const Home = () => {

    return (
        <>
            {/*<h1>메인페이지</h1>*/}
            <div>
                <Link href="/login"><a>로그인</a></Link>
                <Link href="/register"><a>회원가입</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/following"><a>팔로잉</a></Link>
                <Link href="/followers"><a>팔로워</a></Link>
            </div>
            <ContentLayout dummyPost={dummyPost}/>
        </>
    );
};

export default Home;