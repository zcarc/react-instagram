import {useEffect} from 'react';
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";
import {LOAD_FOLLOWINGS_REQUEST} from "../reducers/user";
import {useSelector} from "react-redux";
import Router from "next/router";


const Following = ({pageName}) => {

    const {userSessionData, followingList, isLoggedIn} = useSelector(state => state.user);


    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        if (!isLoggedIn) {
            alert('로그인이 필요합니다.');
            Router.push('/');
        }
    }, [isLoggedIn]);

    if(!isLoggedIn){
        return null;
    }

    return (
        <>
            <ProfileLayout userSessionData={userSessionData}/>
            {Object.keys(followingList).length !== 0 ? <FollowLayout pageName={pageName}/> : null}
        </>
    );
};

Following.getInitialProps = (context) => {

    const {dispatch, getState} = context.store;
    const {userSessionData, followingList} = getState().user;

    if (!followingList) {
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
            data: userSessionData && userSessionData.id,
        });
    }

    return {pageName: 'following'}

};


export default Following;