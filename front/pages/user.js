import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import React from "react";
import {LOAD_USER_POSTS_REQUEST} from "../reducers/post";
import ContentLayout from "../Containers/ContentLayout";
import {ContentsBox, Inner} from "../components/style/content";

const User = () => {

    const {mainPosts} = useSelector(state => state.post);

    return (
        <Inner>
            <ContentsBox>
                {mainPosts && mainPosts.map((v, i) => <ContentLayout key={i} v={v}/>)}
            </ContentsBox>
        </Inner>
    );

};

User.propTypes = {
    id: PropTypes.number,
};

User.getInitialProps = (context) => {
    // console.log('User.getInitialProps... context: ', context);
    // console.log('User.getInitialProps... context.query: ', context.query);
    // console.log('User.getInitialProps... context.query.id: ', context.query.id);

    context.store.dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: context.query.id,
    });
};

export default User;