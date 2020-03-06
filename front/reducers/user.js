const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    userData: null,
    isSignedUp: false,
    isSigningUp: false,
    signUpError: '',
};

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

// const action = {
//     type: 'LOG_IN',
//     data: {
//         nickname: 'user01',
//     },
// };

export default (state = initialState, action) => {

    switch (action.type) {

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
                userData: action.data,
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
                userData: null,
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
                isLoggedIn: false,
            };
        }

        case LOAD_USER_SUCCESS: {

            return {
                ...state,
                userData: action.data,
                isLoggedIn: true,
            };

        }

        case LOAD_USER_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
            };
        }

        default:
            return state;

    }
};