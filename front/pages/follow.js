import React from "react";
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";

const dummy = {
    nickname: 'insta',
    post: [],
    follower: [],
    following: [],
};

const Follow = () => {

    return (
        <>
            <ProfileLayout dummy={dummy}/>
            <FollowLayout/>
        </>
    );
};

export default Follow;