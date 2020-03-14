import React from "react";
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";
import {LOAD_FOLLOWERS_REQUEST} from "../reducers/user";
import {useSelector} from "react-redux";


const Followers = ({pageName}) => {

    const {userSessionData, followerList} = useSelector(state => state.user);

    return (
        <>
            <ProfileLayout userSessionData={userSessionData} />
            {Object.keys(followerList).length !== 0 ? <FollowLayout pageName={pageName}/> : null}
        </>
    );
};

Followers.getInitialProps = (context) => {

    const {dispatch, getState} = context.store;
    const {userSessionData, followerList} = getState().user;

    if(!followerList) {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
            data: userSessionData && userSessionData.id,
        });
    }

    return {pageName: 'followers'}

};

export default Followers;