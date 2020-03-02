const initialState = {
    mainPosts: [],
};

const dummy = {
    mainPosts: [{
        User: {
            id: 3,
            nickname: 'dummy03',
        },
        content: '더미데이터',
        img: '',
    }],
};



export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';


export default (state = initialState, action) => {

    console.log('reducers/post... state:', state);

    switch (action.type) {

        case ADD_POST_REQUEST: {
            return {
                ...state,
            }
        }

        case ADD_POST_SUCCESS: {
            return {
                ...state,
            }
        }

        default:
            return state;
    }
};