const initialState = {
    isLoggedIn : false,
    isLoggingIn: false,
    userData : {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

// const action = {
//     type: 'LOG_IN',
//     data: {
//         nickname: 'user01',
//     },
// };

export default (state = initialState, action) => {

  switch(action.type) {

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

      case LOG_OUT: {
        return {
            ...state,
            isLoggedIn: false,
            isLogging: false,
            userData: null,
        }
      }

      case SIGN_UP: {
          return {
              ...state,
              signUpData: action.data,
          }
      }

      default:
          return state;

  }
};