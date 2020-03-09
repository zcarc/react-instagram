import {all, fork, takeLatest, put, delay, call} from 'redux-saga/effects'
import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE,
    LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS,
    LOAD_MAIN_POSTS_FAILURE,
    LOAD_MAIN_POSTS_REQUEST,
    LOAD_MAIN_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS
} from "../reducers/post";
import axios from 'axios';

function loadUserPostsAPI(data) {

    return axios.get(`/user/${data}/posts`);
}

function* loadUserPosts(action) {

    try {
        const loadedUserPosts = yield call(loadUserPostsAPI, action.data);
        // console.log('loadedPosts: ', loadedPosts);
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: loadedUserPosts.data,
        });

    }catch (e) {
        console.error(e);
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadUserPosts() {
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function loadHashtagPostsAPI(data) {

    return axios.get(`/hashtag/${data}`);
}

function* loadHashtagPosts(action) {

    try {
        const loadedHashtagPosts = yield call(loadHashtagPostsAPI, action.data);
        // console.log('loadedPosts: ', loadedPosts);
        yield put({
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: loadedHashtagPosts.data,
        });

    }catch (e) {
        console.error(e);
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadHashtagPosts() {
    yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function loadMainPostsAPI() {

    return axios.get('/posts');
}

function* loadMainPosts() {

    try {
        const loadedPosts = yield call(loadMainPostsAPI);
        // console.log('loadedPosts: ', loadedPosts);
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: loadedPosts.data,
        });

    }catch (e) {
        console.error(e);
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

function* addComment(action) {

    console.log('sagas/post... addComment... action: ', action);

    try {
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
            },
        });
    }catch (e) {
        console.error(e);
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        })
    }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function addPostAPI(data) {
    // console.log('addPostAPI data: ', data);

    return axios.post('/post', data, {
        withCredentials: true,
    });
}

function* addPost(action) {

    try {
        yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
        });

    }catch (e) {
        console.error(e);
        yield put({
           type: ADD_POST_FAILURE,
           error: e,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga () {

    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadMainPosts),
        fork(watchLoadHashtagPosts),
        fork(watchLoadUserPosts),
    ]);

}