import React from "react";
import {useSelector} from "react-redux";
import {ContentsBox, Inner} from "../components/style/content";
import SinglePostLayout from "../components/SinglePostLayout";
import {LOAD_POST_REQUEST} from "../reducers/post";
import Helmet from "react-helmet";

const Post = () => {

    const {singlePost} = useSelector(state => state.post);

    return (
        <>

            <Helmet
                title={`${singlePost.User && singlePost.User.userNickname}님의 글`}
                desciprtion={singlePost.content && singlePost.content}
                meta={[{
                    name: 'description', content: singlePost.content && singlePost.content,
                }, {
                    property: 'og:title', content: `${singlePost.User && singlePost.User.userNickname}님의 게시글`,
                }, {
                    property: 'og:description', content: singlePost.content && singlePost.content,
                }, {
                    property: 'og:image', content: singlePost.Images && `http://localhost:8080/${singlePost.Images[0].src}`,
                }, {
                    property: 'og:url', content: `http://localhost:8070/post/${singlePost && singlePost.id}`,
                }]}
            />

            <Inner>
                <ContentsBox>
                    <SinglePostLayout v={singlePost} />
                </ContentsBox>
            </Inner>
        </>
    );
};

Post.getInitialProps = (context) => {

    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.query.id,
    });

};

export default Post;