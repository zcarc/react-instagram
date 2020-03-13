import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_HASHTAG_POSTS_REQUEST} from "../reducers/post";
import ContentLayout from "../components/ContentLayout";
import {ContentsBox, Inner} from "../components/style/content";

const Hashtag = () => {
    // console.log('Hashtag... pageProps: ', pageProps);
    // console.log('Hashtag... tag: ', tag);

    const { mainPosts } = useSelector(state => state.post);
    // console.log('pages/hashtag... mainPosts: ', mainPosts);

    return (
        <>
            <Inner>
                <ContentsBox>
                    {mainPosts && mainPosts.map( v => <ContentLayout v={v}/>)}
                </ContentsBox>
            </Inner>
        </>
    )
};

Hashtag.getInitialProps = (context) => {
    // console.log('Hashtag.getInitialProps... context: ', context);
    // console.log('Hashtag.getInitialProps... context.query: ', context.query);
    console.log('Hashtag.getInitialProps... context.query.tag: ', context.query.tag);


    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: context.query.tag,
    });

};

export default Hashtag;