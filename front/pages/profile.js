import {useEffect} from 'react';
import ProfileLayout from "../components/ProfileLayout";
import {
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_OTHER_FOLLOWERS_REQUEST,
    LOAD_OTHER_FOLLOWINGS_REQUEST, LOAD_USER_REQUEST, REMOVE_PROFILE_INFO
} from "../reducers/user";
import {useSelector} from "react-redux";
import Router from "next/router";
import {LOAD_OTHER_USER_POSTS_REQUEST, LOAD_USER_POSTS_REQUEST} from "../reducers/post";

const Profile = ({id}) => {

    // console.log('Profile id: ', id);

    const {userSessionData, isLoggedIn, followerList, followingList, profileUserInfo} = useSelector(state => state.user);
    const mainPosts = useSelector(state => state.post.mainPosts);


    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        // console.log('isLoggedIn: ', isLoggedIn);
        // console.log('id: ', id);

        if (!isLoggedIn) {
            if (!id) {
                Router.push('/');
            }
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        if (!id) {
            return null;
        }
    }

    return (
        <ProfileLayout
            userSessionData={userSessionData}
            isLoggedIn={isLoggedIn}
            mainPosts={mainPosts}
            followerList={followerList}
            followingList={followingList}
            profileUserInfo={profileUserInfo}
        />
    );
};


Profile.getInitialProps = (context) => {

    // console.log('Profile.getInitialProps');

    const {dispatch, getState} = context.store;
    const {userSessionData, profileUserInfo} = getState().user;

    // console.log('getState: ', getState);
    // console.log('userSessionData: ', userSessionData);
    // console.log('context.store.getState().user: ', context.store.getState().user);
    // console.log('Profile.getInitialProps context.query: ', context.query); // not exists {}
    // console.log('Object.keys(context.query).length: ', Object.keys(context.query).length);

    if (Object.keys(context.query).length === 0) {

        if(profileUserInfo.length) {
            dispatch({
                type: REMOVE_PROFILE_INFO,
            });
        }

        dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: userSessionData && userSessionData.id,
        });

        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
            data: userSessionData && userSessionData.id,
        });

        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
            data: userSessionData && userSessionData.id,
        });

    } else {

        dispatch({
            type: LOAD_USER_REQUEST,
            data: context.query.id,
        });

        dispatch({
            type: LOAD_OTHER_USER_POSTS_REQUEST,
            data: context.query.id,
        });

        dispatch({
            type: LOAD_OTHER_FOLLOWINGS_REQUEST,
            data: context.query.id,
        });

        dispatch({
            type: LOAD_OTHER_FOLLOWERS_REQUEST,
            data: context.query.id,
        });

        return {id: context.query.id};

    }


};

// Profile.getInitialProps = (context) => {
//
// //     console.log('Profile.getInitialProps');
//
//     const {dispatch, getState} = context.store;
//     const {userSessionData} = getState().user;
//
//     // console.log('getState: ', getState);
//     // console.log('userSessionData: ', userSessionData);
//     // console.log('context.store.getState().user: ', context.store.getState().user);
//
//     dispatch({
//         type: LOAD_USER_POSTS_REQUEST,
//         data: userSessionData && userSessionData.id,
//     });
//
//     dispatch({
//         type: LOAD_FOLLOWINGS_REQUEST,
//         data: userSessionData && userSessionData.id,
//     });
//
//     dispatch({
//         type: LOAD_FOLLOWERS_REQUEST,
//         data: userSessionData && userSessionData.id,
//     });
//
//
// };

export default Profile;