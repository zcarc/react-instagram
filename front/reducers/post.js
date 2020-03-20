import {enableES5} from "immer";
enableES5();
import produce from "immer";
import user from "./user";

const initialState = {
    isAddingPost: false,
    isPostAdded: false,
    isPostRemoved: false,
    addPostError: '',
    isAddingComment: false,
    isAddedComment: false,
    isCommentAdded: false,
    mainPosts: '',
    imageNames: [],
    // hasMorePosts: false,
    singlePost: [],
    isSearched: false,
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

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const BOOKMARK_REQUEST = 'BOOKMARK_REQUEST';
export const BOOKMARK_SUCCESS = 'BOOKMARK_SUCCESS';
export const BOOKMARK_FAILURE = 'BOOKMARK_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_OTHER_USER_POSTS_REQUEST = 'LOAD_OTHER_USER_POSTS_REQUEST';
export const LOAD_OTHER_USER_POSTS_SUCCESS = 'LOAD_OTHER_USER_POSTS_SUCCESS';
export const LOAD_OTHER_USER_POSTS_FAILURE = 'LOAD_OTHER_USER_POSTS_FAILURE';

export default (state = initialState, action) => {


    return produce(state, (draft) => {

        switch (action.type) {

            case ADD_POST_REQUEST: {
                draft.isAddingPost = true;
                break;
            }

            case ADD_POST_SUCCESS: {
                draft.isAddingPost = false;
                draft.isPostAdded = true;
                if (draft.mainPosts) {
                    draft.mainPosts.unshift(action.data);
                }
                draft.imageNames = [];
                break;
            }

            case ADD_POST_FAILURE:
            case WRITE_REDIRECTION: {
                draft.isAddingPost = false;
                draft.isPostAdded = false;
                break;
            }

            case ADD_COMMENT_REQUEST: {
                draft.isAddingComment = true;
                draft.isAddedComment = false;
                break;
            }

            case ADD_COMMENT_SUCCESS: {
                const index = draft.mainPosts.findIndex(e => e.id === action.data.postId);
                if (draft.mainPosts[index] && draft.mainPosts[index].comments) {
                    draft.mainPosts[index].comments.push(action.data.comment);
                }

                if (draft.mainPosts[index] && draft.mainPosts[index].Comments) {
                    draft.mainPosts[index].Comments.push(action.data.id);
                }

                if (draft.singlePost.length) {
                    const postIndex = draft.singlePost.findIndex(v => v.id === action.data.postId);
                    draft.singlePost[postIndex].comments.push(action.data.comment);

                }

                draft.isAddingComment = false;
                draft.isAddedComment = true;
                break;
            }

            case ADD_COMMENT_FAILURE: {
                draft.isAddingComment = false;
                draft.isAddedComment = false;
                break;
            }

            case LOAD_COMMENTS_SUCCESS: {

                // console.log('LOAD_COMMENTS_SUCCESS action.data.comments: ', action.data.comments);

                if (draft.singlePost.length) {
                    const postIndex = draft.singlePost.findIndex(v => v.id === action.data.postId);
                    draft.singlePost[postIndex].comments = action.data.comments;

                }

                const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
                if(draft.mainPosts[postIndex]) {
                    draft.mainPosts[postIndex].comments = action.data.comments;
                }

                break;
            }

            case LOAD_MAIN_POSTS_REQUEST:
            case LOAD_USER_POSTS_REQUEST:
            case LOAD_OTHER_USER_POSTS_REQUEST: {
                draft.mainPosts = action.lastId ? draft.mainPosts : [];
                draft.hasMorePosts = action.lastId ? draft.hasMorePosts : true;
                if(draft.singlePost.length) {
                    draft.singlePost = [];
                }

                // console.log('LOAD_MAIN_POSTS_REQUEST: ', draft.mainPosts, draft.hasMorePosts);
                break;
            }

            case LOAD_MAIN_POSTS_SUCCESS:
            case LOAD_USER_POSTS_SUCCESS:
            case LOAD_OTHER_USER_POSTS_SUCCESS: {
                action.data.forEach(v => draft.mainPosts.push(v));
                draft.hasMorePosts = action.data.length === 5;
                // console.log('POSTS_SUCCESS action.data: ', action.data);
                // console.log('LOAD_MAIN_POSTS_SUCCESS: ', draft.mainPosts, draft.hasMorePosts);
                break;
            }

            case LOAD_HASHTAG_POSTS_REQUEST: {
                draft.mainPosts = action.lastId ? draft.mainPosts : [];
                draft.hasMorePosts = action.lastId ? draft.hasMorePosts : true;
                // console.log('LOAD_MAIN_POSTS_REQUEST: ', draft.mainPosts, draft.hasMorePosts);
                draft.isSearching = true;
                draft.isSearched = false;
                break;
            }

            case LOAD_HASHTAG_POSTS_SUCCESS: {
                action.data.forEach(v => draft.mainPosts.push(v));
                draft.hasMorePosts = action.data.length === 10;
                draft.isSearched = !!draft.isSearching;
                draft.isSearching = false;
                break;
            }

            case LOAD_MAIN_POSTS_FAILURE:
            case LOAD_HASHTAG_POSTS_FAILURE:
            case LOAD_USER_POSTS_FAILURE:
            case LOAD_OTHER_USER_POSTS_FAILURE: {
                break;
            }

            case UPLOAD_IMAGES_REQUEST: {
                break;
            }

            case UPLOAD_IMAGES_SUCCESS: {
                action.data.forEach(p => draft.imageNames.push(p));
                break;
            }

            case UPLOAD_IMAGES_FAILURE: {
                break;
            }

            case CLOSE_IMAGE: {
                const index = draft.imageNames.findIndex((v, i) => i === action.imageIndex);
                draft.imageNames.splice(index, 1);
                break;
            }

            case LIKE_POST_REQUEST:
            case UNLIKE_POST_REQUEST: {
                break;
            }

            case LIKE_POST_SUCCESS: {
                const index = draft.mainPosts.findIndex(p => p.id === action.data.postId);
                draft.mainPosts[index] && draft.mainPosts[index].Likers.unshift({id: action.data.userId});

                if (draft.singlePost.length > 0) {
                    const singleIndex = draft.singlePost.findIndex(p => p.id === action.data.postId);
                    draft.singlePost[singleIndex].Likers.unshift({id: action.data.userId});
                }

                break;
            }

            case LIKE_POST_FAILURE:
            case UNLIKE_POST_FAILURE: {
                break;
            }

            case UNLIKE_POST_SUCCESS: {
                const postIndex = draft.mainPosts.findIndex(p => p.id === action.data.postId);
                const userIndex = draft.mainPosts[postIndex] && draft.mainPosts[postIndex].Likers.findIndex(u => u.id === action.data.userId);
                draft.mainPosts[postIndex] && draft.mainPosts[postIndex].Likers.splice(userIndex, 1);

                if (draft.singlePost.length > 0) {
                    const singleIndex = draft.singlePost.findIndex(p => p.id === action.data.postId);
                    const userSingleIndex = draft.singlePost[singleIndex].Likers.findIndex(u => u.id === action.data.userId);
                    draft.singlePost[singleIndex].Likers.splice(userSingleIndex, 1);
                }

                break;
            }

            case BOOKMARK_REQUEST: {
                break;
            }

            case BOOKMARK_SUCCESS: {
                draft.mainPosts.unshift(action.data);
                break;
            }

            case BOOKMARK_FAILURE: {
                break;
            }

            case REMOVE_POST_REQUEST: {
                draft.isPostRemoved = false;
                break;
            }

            case REMOVE_POST_SUCCESS: {
                const index = draft.mainPosts.findIndex(v => v.id === action.data);
                draft.mainPosts.splice(index, 1);
                draft.isPostRemoved = true;
                break;
            }

            case REMOVE_POST_FAILURE: {
                draft.isPostRemoved = false;
                break;
            }

            case LOAD_POST_REQUEST: {
                if (draft.singlePost.length) {
                    draft.mainPosts = [];
                }
                break;
            }

            case LOAD_POST_SUCCESS: {
                draft.singlePost = [action.data];
                draft.mainPosts = draft.mainPosts.length === 0 ? [] : draft.mainPosts;
                break;
            }

            case LOAD_POST_FAILURE: {
                if (draft.singlePost.length) {
                    draft.mainPosts = [];
                }
                break;
            }

            default:
                break;
        }

    });

};