import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {LOAD_USER_POSTS_REQUEST} from "../reducers/post";
import ContentLayout from "../components/ContentLayout";

const User = ( { id } ) => {

    const dispatch = useDispatch();

    const { mainPosts } = useSelector(state => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: id,
        });
    }, []);

    return (
        <>
            <ContentLayout mainPosts={mainPosts}/>
        </>
    );

};

User.propTypes = {
    id: PropTypes.number.isRequired,
};

User.getInitialProps = (context) => {
    // console.log('User.getInitialProps... context: ', context);
    // console.log('User.getInitialProps... context.query: ', context.query);
    // console.log('User.getInitialProps... context.query.id: ', context.query.id);

    return { id: parseInt(context.query.id) };
};

export default User;