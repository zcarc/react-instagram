import ProfileLayout from "../components/ProfileLayout";
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST} from "../reducers/user";
import {useSelector} from "react-redux";

const Profile = () => {

    const {userSessionData} = useSelector(state => state.user);

    return (
        <ProfileLayout userSessionData={userSessionData}/>
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


};

export default Profile;