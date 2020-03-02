const initialState = {
    isAddingPost: false,
    isPostAdded: false,
    addPostError: '',
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'react01',
        },
        content: '첫번째 게시글',
        img: '',
    }, {
        User: {
            id: 2,
            nickname: 'react02',
        },
        content: '두번째 게시글',
        img: '',
    },
    ]
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

export const WRITE_REDIRECTION = 'WRITE_REDIRECTION';


export default (state = initialState, action) => {

    console.log('reducers/post... state:', state);

    switch (action.type) {

        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
            }
        }

        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                isPostAdded: true,
                mainPosts: [...dummy.mainPosts, ...state.mainPosts],
            }
        }

        case ADD_POST_FAILURE:
        case WRITE_REDIRECTION:{
            return {
                ...state,
                isAddingPost: false,
                isPostAdded: false,
            }
        }

        default:
            return state;
    }
};