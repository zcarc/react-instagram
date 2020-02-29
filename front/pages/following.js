import React from "react";
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";

const dummy = {
    nickname: 'insta',
    post: [],
    follower: [],
    following: [],
};

const follow = '팔로잉';

const Following = () => {

    return (
        <>
            <ProfileLayout dummy={dummy}/>
            <FollowLayout follow={follow}/>
        </>
    );
};

export default Following;