import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_HASHTAG_POSTS_REQUEST} from "../reducers/post";
import ContentLayout from "../components/ContentLayout";

const Hashtag = ( { tag } ) => {
    // console.log('Hashtag... pageProps: ', pageProps);
    // console.log('Hashtag... tag: ', tag);

    const dispatch = useDispatch();

    const { mainPosts } = useSelector(state => state.post);
    console.log('pages/hashtag... mainPosts: ', mainPosts);

    useEffect(() => {
        dispatch({
          type: LOAD_HASHTAG_POSTS_REQUEST,
          data: tag,
        });
    }, []);

    return (
        <>
            <ContentLayout mainPosts={mainPosts}/>
        </>
    )
};

Hashtag.propTypes = {
    tag: PropTypes.string.isRequired,
};

Hashtag.getInitialProps = (context) => {
    // console.log('Hashtag.getInitialProps... context: ', context);
    // console.log('Hashtag.getInitialProps... context.query: ', context.query);
    // console.log('Hashtag.getInitialProps... context.query.tag: ', context.query.tag);

    return { tag: context.query.tag };
};

export default Hashtag;