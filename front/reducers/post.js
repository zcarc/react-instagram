const initialState = {
    isAddingPost: false,
    isPostAdded: false,
    addPostError: '',
    isAddingComment: false,
    isCommentAdded: false,
    mainPosts: '',
    imageNames: '',
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

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const CLOSE_IMAGE = 'CLOSE_IMAGE';



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
                imageNames: '',
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
            }
        }

        case ADD_COMMENT_SUCCESS: {

            console.log('reducers/post... ADD_COMMENT_SUCCESS... action.data.postId:', action.data);

            const index =  state.mainPosts.findIndex(e => e.id === action.data.postId);
            const post = state.mainPosts[index];
            console.log('reducers/post... ADD_COMMENT_SUCCESS... post:', post);
            const comments = [...post.comments, action.data.comment];
            const mainPosts = [...state.mainPosts];
            mainPosts[index] = {...post, comments};

            return {
                ...state,
                mainPosts,
            }
        }

        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
            }
        }

        case LOAD_COMMENTS_SUCCESS: {
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const comments = action.data.comments;
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, comments };
            return {
                ...state,
                mainPosts,
            };
        }

        case LOAD_MAIN_POSTS_REQUEST:
        case LOAD_HASHTAG_POSTS_REQUEST:
        case LOAD_USER_POSTS_REQUEST: {
            return {
                ...state,
            }
        }

        case LOAD_MAIN_POSTS_SUCCESS:
        case LOAD_HASHTAG_POSTS_SUCCESS:
        case LOAD_USER_POSTS_SUCCESS: {

            return {
                ...state,
                mainPosts: action.data,
            }
        }

        case LOAD_MAIN_POSTS_FAILURE:
        case LOAD_HASHTAG_POSTS_FAILURE:
        case LOAD_USER_POSTS_FAILURE: {
            return {
                ...state,
            }
        }

        case UPLOAD_IMAGES_REQUEST: {

            return {
                ...state,
            };
        }

        case UPLOAD_IMAGES_SUCCESS: {

            console.log('UPLOAD_IMAGES_SUCCESS: ', action.data);

            return {
                ...state,
                imageNames: [...state.imageNames, ...action.data],
            };
        }

        case UPLOAD_IMAGES_FAILURE: {

            return {
                ...state,
            };
        }

        case CLOSE_IMAGE: {

            return {
                ...state,
                imageNames: state.imageNames.filter( (v, i) => action.imageIndex !== i ),
            };
        }

        default:
            return state;
    }
};