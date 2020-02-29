import ProfileLayout from "../components/ProfileLayout";

const dummy = {
    nickname: 'insta',
    post: [],
    follower: [],
    following: [],
};

const Profile = () => {
    return (
        <ProfileLayout dummy={dummy}/>
    );
};

export default Profile;