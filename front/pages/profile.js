import ProfileLayout from "../components/ProfileLayout";

const Profile = ( {id} ) => {
    return (
        <ProfileLayout id={id}/>
    );
};

Profile.getInitialProps = (context) => {
    return { id: parseInt(context.query.id) };
};

export default Profile;