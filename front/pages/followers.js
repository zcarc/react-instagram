import {useEffect} from 'react';
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";
import {LOAD_FOLLOWERS_REQUEST} from "../reducers/user";
import {useSelector} from "react-redux";
import Router from "next/router";


const Followers = ({pageName}) => {

    const {userSessionData, isLoggedIn, followerList, followingList, profileUserInfo} = useSelector(state => state.user);
    const mainPosts = useSelector(state => state.post.mainPosts);

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        if (!isLoggedIn) {
            alert('로그인이 필요합니다.');
            Router.push('/');
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return null;
    }

    return (
        <>
            <ProfileLayout
                userSessionData={userSessionData}
                isLoggedIn={isLoggedIn}
                mainPosts={mainPosts}
                followerList={followerList}
                followingList={followingList}
                profileUserInfo={profileUserInfo}
            />
            {Object.keys(followerList).length !== 0
                ? <FollowLayout pageName={pageName}
                                followerList={followerList}
                                followingList={followingList}/>
                : null}
        </>
    );
};

Followers.getInitialProps = (context) => {

    const {dispatch, getState} = context.store;
    const {userSessionData, followerList} = getState().user;

    if (!followerList) {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
            data: userSessionData && userSessionData.id,
        });
    }

    return {pageName: 'followers'}

};

export default Followers;