import React from "react";
import {useSelector} from "react-redux";
import {ContentsBox, Inner} from "../components/style/content";
import SinglePostLayout from "../Containers/SinglePostLayout";
import {LOAD_POST_REQUEST} from "../reducers/post";
import Helmet from "react-helmet";

const Post = () => {

    const {singlePost} = useSelector(state => state.post);

    return (
        <>
            <Helmet
                title={`${singlePost && singlePost.User && singlePost.User.userNickname}님의 글`}
                desciprtion={singlePost && singlePost.content}
                meta={[{
                    name: 'description', content: singlePost && singlePost.content,
                }, {
                    property: 'og:title', content: `${singlePost && singlePost.User && singlePost.User.userNickname}님의 게시글`,
                }, {
                    property: 'og:description', content: singlePost && singlePost.content,
                }, {
                    property: 'og:image', content: singlePost && singlePost.Images && `http://localhost:8080/${singlePost.Images[0] && singlePost.Images[0].src} || post_photo_01.jpg`,
                }, {
                    property: 'og:url', content: `http://localhost:8070/post/${singlePost && singlePost.id}`,
                }]}
            />

            <Inner>
                <ContentsBox>
                    {singlePost && singlePost.map( v => <SinglePostLayout key={v.id} v={v}/> )}
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