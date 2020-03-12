import React from "react";
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";

const follow = '팔로잉';

const Following = () => {

    return (
        <>
            <ProfileLayout/>
            <FollowLayout follow={follow}/>
        </>
    );
};


export default Following;