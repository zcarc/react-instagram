import React from "react";
import {useSelector} from "react-redux";
import {ContentsBox, Inner} from "../components/style/content";
import SinglePostLayout from "../components/SinglePostLayout";
import {LOAD_POST_REQUEST} from "../reducers/post";

const Post = () => {

    const {singlePost} = useSelector(state => state.post);

    return (
        <>
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