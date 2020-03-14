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


export default (state = initialState, action) => {

    switch (action.type) {

        case USER_EXISTS_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
            }
        }

        case USER_EXISTS_SUCCESS: {
            return {
                ...state,
                isLoggedIn: !!action.data,
                userSessionData: action.data,
            }
        }

        case USER_EXISTS_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
            }
        }

        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggingIn: true,
            }
        }

        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                userSessionData: action.data,
            }
        }

        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
            }
        }

        case LOG_OUT_REQUEST: {
            return {
                ...state,
            }
        }

        case LOG_OUT_SUCCESS: {
            return {
                ...state,
                isLoggedIn: false,
                userSessionData: '',
            }
        }

        case SIGN_UP_REQUEST: {
            return {
                ...state,
                isSigningUp: true,
            }
        }

        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: true,
            }
        }

        case SIGN_UP_FAILURE: {
            return {
                ...state,
                isSigningUp: false,
                signUpError: action.error,
            }
        }

        case LOAD_USER_REQUEST: {
            return {
                ...state,
            };
        }

        case LOAD_USER_SUCCESS: {

            return {
                ...state,
                userSessionData: action.data,
                me: action.me,
            };

        }

        case LOAD_USER_FAILURE: {
            return {
                ...state,
            };
        }

        case FOLLOW_USER_REQUEST: {
            return {
                ...state,
                isFollowing: true,
            };
        }

        case UNFOLLOW_USER_REQUEST:{
            return {
                ...state,
                isUnFollowing: true,
            };
        }

        case FOLLOW_USER_SUCCESS: {
            return {
                ...state,
                isFollowing: false,
                userSessionData: {
                    ...state.userSessionData,
                    Followings: [
                        {id: action.data},
                        ...state.userSessionData.Followings
                    ],
                },
            };
        }

        case FOLLOW_USER_FAILURE:
        case UNFOLLOW_USER_FAILURE: {
            return {
                ...state,
            }
        }

        case UNFOLLOW_USER_SUCCESS: {
            return {
                ...state,
                isUnFollowing: true,
                userSessionData: {
                    ...state.userSessionData,
                    Followings: state.userSessionData.Followings.filter(e => e.id !== action.data),
                },
                followingList: state.followingList.filter(e => e.id !== action.data),
            };
        }

        case ADD_POST_TO_ME: {
            return {
                ...state,
                userSessionData: {
                    ...state.userSessionData,
                    Posts: [{ id: action.data.id }, ...state.userSessionData.Posts],
                },
            }
        }

        case LOAD_FOLLOWINGS_REQUEST:
        case LOAD_FOLLOWERS_REQUEST: {
            return {
                ...state,
            };
        }
        case LOAD_FOLLOWINGS_SUCCESS: {
            return {
                ...state,
                followingList: action.data,
            };
        }

        case LOAD_FOLLOWERS_SUCCESS: {

            return {
                ...state,
                followerList: action.data,
            };

        }

        case LOAD_FOLLOWINGS_FAILURE:
        case LOAD_FOLLOWERS_FAILURE: {
            return {
                ...state,
            };
        }

        case REMOVE_FOLLOWER_REQUEST: {
            return {
                ...state,
            };
        }
        case REMOVE_FOLLOWER_SUCCESS: {
            return {
                ...state,
                userSessionData: {
                    ...state.userSessionData,
                    Followers: state.userSessionData.Followers.filter(e => e.id !== action.data),
                },
                followerList: state.followerList.filter(e => e.id !== action.data),
            };
        }

        case REMOVE_FOLLOWER_FAILURE: {

            return {
                ...state,
                followerList: action.data,
            };

        }

        case REMOVE_POST_OF_ME: {
            return {
                ...state,
                userSessionData: {
                    ...state.userSessionData,
                    Posts: state.userSessionData.Posts.filter(v => v.id !== action.data),
                },
            };
        }


        default:
            return state;

    }
};