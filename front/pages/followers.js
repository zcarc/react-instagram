import React from "react";
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";

const follow = '팔로워';

const Followers = ({id}) => {

    return (
        <>
            <ProfileLayout/>
            <FollowLayout follow={follow}/>
        </>
    );
};

export default Followers;