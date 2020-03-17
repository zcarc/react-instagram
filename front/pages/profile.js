import {useEffect} from 'react';
import ProfileLayout from "../components/ProfileLayout";
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST} from "../reducers/user";
import {useSelector} from "react-redux";
import Router from "next/router";
import {LOAD_USER_POSTS_REQUEST} from "../reducers/post";

const Profile = () => {

    const {userSessionData, isLoggedIn} = useSelector(state => state.user);
    const {mainPosts} = useSelector(state => state.post);

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        if (!isLoggedIn) {
            Router.push('/');
        }
    }, [isLoggedIn]);

    if(!isLoggedIn){
        return null;
    }

    return (
        <ProfileLayout userSessionData={userSessionData} isLoggedIn={isLoggedIn} mainPosts={mainPosts}/>
    );
};

Profile.getInitialProps = (context) => {

    const {dispatch, getState} = context.store;
    const {userSessionData} = getState().user;

    // console.log('getState: ', getState);
    // console.log('userSessionData: ', userSessionData && userSessionData.id);
    // console.log('context.store.getState().user: ', context.store.getState().user);

    dispatch({
        type: LOAD_FOLLOWINGS_REQUEST,
        data: userSessionData && userSessionData.id,
    });

    dispatch({
        type: LOAD_FOLLOWERS_REQUEST,
        data: userSessionData && userSessionData.id,
    });

    dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: userSessionData && userSessionData.id,
    });



};

export default Profile;