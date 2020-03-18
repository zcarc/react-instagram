import produce from "immer";

const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    isSignedUp: false,
    isSigningUp: false,
    isFollowing: false,
    isUnFollowing: false,
    signUpError: '',
    me: false,
    userSessionData: null,
    followingList: [],
    followerList: [],
    profileUserInfo: [],
};

export const USER_EXISTS_REQUEST = 'USER_EXISTS_REQUEST';
export const USER_EXISTS_SUCCESS = 'USER_EXISTS_SUCCESS';
export const USER_EXISTS_FAILURE = 'USER_EXISTS_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_REQUEST';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const SIGN_UP_REDIRECTION = 'SIGN_UP_REDIRECTION';


export const LOAD_OTHER_FOLLOWINGS_REQUEST = 'LOAD_OTHER_FOLLOWINGS_REQUEST';
export const LOAD_OTHER_FOLLOWINGS_SUCCESS = 'LOAD_OTHER_FOLLOWINGS_SUCCESS';
export const LOAD_OTHER_FOLLOWINGS_FAILURE = 'LOAD_OTHER_FOLLOWINGS_FAILURE';

export const LOAD_OTHER_FOLLOWERS_REQUEST = 'LOAD_OTHER_FOLLOWERS_REQUEST';
export const LOAD_OTHER_FOLLOWERS_SUCCESS = 'LOAD_OTHER_FOLLOWERS_SUCCESS';
export const LOAD_OTHER_FOLLOWERS_FAILURE = 'LOAD_OTHER_FOLLOWERS_FAILURE';



export default (state = initialState, action) => {

    return produce(state, (draft) => {

        switch (action.type) {

            case USER_EXISTS_REQUEST: {
                draft.isLoggedIn = false;
                break;
            }

            case USER_EXISTS_SUCCESS: {
                console.log('USER_EXISTS_SUCCESS action.data: ', action.data);
                draft.isLoggedIn = true;
                draft.userSessionData = action.data;
                break;
            }

            case USER_EXISTS_FAILURE: {
                draft.isLoggedIn = false;
                break;
            }

            case LOG_IN_REQUEST: {
                draft.isLoggingIn = true;
                break;
            }

            case LOG_IN_SUCCESS: {
                draft.isLoggedIn = true;
                draft.isLoggingIn = false;
                draft.userSessionData = action.data;
                break;
            }

            case LOG_IN_FAILURE: {
                draft.isLoggingIn = false;
                break;
            }

            case LOG_OUT_REQUEST: {
                break;
            }

            case LOG_OUT_SUCCESS: {
                draft.isLoggedIn = false;
                draft.userSessionData = '';
                break;
            }

            case SIGN_UP_REQUEST: {
                draft.isSigningUp = true;
                draft.isSignedUp = false;
                break;
            }

            case SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.isSignedUp = true;
                break;
            }

            case SIGN_UP_FAILURE: {
                draft.isSigningUp = false;
                draft.isSignedUp = false;
                draft.signUpError = action.error;
                break;
            }

            case LOAD_USER_REQUEST: {
                draft.profileUserInfo = [];
                break;
            }

            case LOAD_USER_SUCCESS: {
                draft.profileUserInfo.push(action.data);
                break;

            }

            case LOAD_USER_FAILURE: {
                draft.profileUserInfo = [];
                break;
            }

            case FOLLOW_USER_REQUEST: {
                draft.isFollowing = true;
                break;
            }

            case UNFOLLOW_USER_REQUEST:{
                draft.isUnFollowing = true;
                break;
            }

            case FOLLOW_USER_SUCCESS: {
                draft.isFollowing = true;
                draft.userSessionData.Followings.unshift({id: action.data});
                break;
            }

            case FOLLOW_USER_FAILURE:
            case UNFOLLOW_USER_FAILURE: {
                break;
            }

            case UNFOLLOW_USER_SUCCESS: {
                draft.isUnFollowing = false;
                const indexUserData = draft.userSessionData.Followings.findIndex(e => e.id === action.data);
                draft.userSessionData.Followings.splice(indexUserData, 1);

                const index = draft.followingList.findIndex(e => e.id === action.data);
                draft.followingList.splice(index, 1);
                break;
            }

            case ADD_POST_TO_ME: {
                draft.userSessionData.Posts.unshift({id: action.data.id});
                break;
            }

            case LOAD_FOLLOWINGS_REQUEST:
            case LOAD_FOLLOWERS_REQUEST:
            case LOAD_OTHER_FOLLOWINGS_REQUEST:
            case LOAD_OTHER_FOLLOWERS_REQUEST:{
                break;
            }
            case LOAD_FOLLOWINGS_SUCCESS:
            case LOAD_OTHER_FOLLOWINGS_SUCCESS :{
                console.log('LOAD_OTHER_FOLLOWINGS_SUCCESS: action.data', action.data);
                draft.followingList = action.data;
                break;
            }

            case LOAD_FOLLOWERS_SUCCESS:
            case LOAD_OTHER_FOLLOWERS_SUCCESS: {
                draft.followerList = action.data;
                break;
            }

            case LOAD_FOLLOWINGS_FAILURE:
            case LOAD_FOLLOWERS_FAILURE:
            case LOAD_OTHER_FOLLOWERS_FAILURE:
            case LOAD_OTHER_FOLLOWINGS_FAILURE :{
                break;
            }

            case REMOVE_FOLLOWER_REQUEST: {
                break;
            }
            case REMOVE_FOLLOWER_SUCCESS: {
                const userDataIndex = draft.userSessionData.Followers.findIndex(e => e.id === action.data);
                draft.userSessionData.Followers.splice(userDataIndex, 1);

                const index = draft.followerList.findIndex(e => e.id === action.data);
                draft.followerList.splice(index, 1);
                break;
            }

            case REMOVE_FOLLOWER_FAILURE: {
                draft.followerList = action.data;
                break;
            }

            case REMOVE_POST_OF_ME: {
                const index = draft.userSessionData.Posts.findIndex(v => v.id === action.data);
                draft.userSessionData.Posts.splice(index, 1);
                break;
            }

            case SIGN_UP_REDIRECTION: {
                if(draft.isSignedUp){
                    draft.isSignedUp = false;
                }
                break;
            }

            default:
                break;
        }

    });


};