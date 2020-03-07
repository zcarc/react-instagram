const initialState = {
    isAddingPost: false,
    isPostAdded: false,
    addPostError: '',
    isAddingComment: false,
    isCommentAdded: false,
    mainPosts: '',
    // mainPosts: [{
    //     id: 1,
    //     User: {
    //         id: 1,
    //         nickname: 'react01',
    //     },
    //     content: '첫번째 게시글',
    //     img: '',
    //     comments: [],
    // }, {
    //     id: 2,
    //     User: {
    //         id: 2,
    //         nickname: 'react02',
    //     },
    //     content: '두번째 게시글',
    //     img: '',
    //     comments: [],
    // },
    // ]
};

const dummy = {
    mainPosts: [{
        id: 3,
        User: {
            id: 3,
            nickname: 'dummy03',
        },
        content: '더미데이터',
        img: '',
        comments: [],
    }],
};

const dummyComment = {
    id: 1,
    User: {
        id: 1,
        nickname: 'dummyCommentUser01',
    },
    content: '더미 댓글 01',
    createdAt: new Date(),
};



export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const WRITE_REDIRECTION = 'WRITE_REDIRECTION';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';


export default (state = initialState, action) => {

    // console.log('reducers/post... state:', state);

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

        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                isPostAdded: false,
            }
        }

        case ADD_COMMENT_SUCCESS: {

            // console.log('reducers/post... ADD_COMMENT_SUCCESS... action.data.postId:', action.data.postId);

            const index =  state.mainPosts.findIndex(e => e.id === action.data.postId);
            const post = state.mainPosts[index];
            const comments = [...post.comments, dummyComment];
            const mainPosts = [...state.mainPosts];
            mainPosts[index] = {...post, comments};

            return {
                ...state,
                isAddingComment: false,
                isPostAdded: true,
                mainPosts,
            }
        }

        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                isPostAdded: false,
            }
        }

        case LOAD_MAIN_POSTS_REQUEST: {
            return {
                ...state,
            }
        }

        case LOAD_MAIN_POSTS_SUCCESS: {

            return {
                ...state,
                mainPosts: action.data,
            }
        }

        case LOAD_MAIN_POSTS_FAILURE: {
            return {
                ...state,
            }
        }

        default:
            return state;
    }
};