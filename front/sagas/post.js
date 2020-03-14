import {all, fork, takeLatest, put, delay, call, takeEvery} from 'redux-saga/effects'
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    BOOKMARK_FAILURE,
    BOOKMARK_REQUEST,
    BOOKMARK_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LOAD_COMMENTS_FAILURE,
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_HASHTAG_POSTS_FAILURE,
    LOAD_HASHTAG_POSTS_REQUEST,
    LOAD_HASHTAG_POSTS_SUCCESS,
    LOAD_MAIN_POSTS_FAILURE,
    LOAD_MAIN_POSTS_REQUEST,
    LOAD_MAIN_POSTS_SUCCESS,
    LOAD_USER_POSTS_FAILURE,
    LOAD_USER_POSTS_REQUEST,
    LOAD_USER_POSTS_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS
} from "../reducers/post";
import axios from 'axios';
import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from "../reducers/user";

function removePostAPI(postId) {

    return axios.delete(`/post/${postId}`,  {
        withCredentials: true,
    });
}

function* removePost(action) {

    try {
        const result = yield call(removePostAPI, action.data);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });

        yield put({
            type: REMOVE_POST_OF_ME,
            data: result.data,
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: e,
        });
    }
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}


function bookmarkAPI(postId) {
    return axios.post(`post/${postId}/bookmark`, {}, {
        withCredentials: true,
    });
}

function* bookmark(action) {

    try {

        const result = yield call(bookmarkAPI, action.data);
        // console.log('bookmark result: ', result);
        yield put({
            type: BOOKMARK_SUCCESS,
            data: result.data,
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: BOOKMARK_FAILURE,
            error: e,
        });

        alert(e.response && e.response.data);

    }
}

function* watchBookmark() {
    yield takeLatest(BOOKMARK_REQUEST, bookmark);
}

function unLikePostAPI(postId) {

    return axios.delete(`post/${postId}/Like`,{
        withCredentials: true,
    });
}

function* unLikePost(action) {

    try {
        const result = yield call(unLikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.userId,
            },
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: e,
        });
    }
}

function* watchUnLikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unLikePost);
}

function likePostAPI(postId) {

    return axios.post(`post/${postId}/like`, {}, {
        withCredentials: true,
    });
}

function* likePost(action) {

    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.userId,
            },
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: LIKE_POST_FAILURE,
            error: e,
        });
    }
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function uploadImagesAPI(formData) {
    return axios.post('post/images', formData, {
        withCredentials: true,
    });
}

function* uploadImages(action) {
    // console.log('uploadImages action: ', action);

    try {
        const result = yield call(uploadImagesAPI, action.data);
        console.log('uploadImages result.data: ', result.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: e,
        });
    }
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}


function loadCommentsAPI(data) {
    return axios.get(`/post/${data}/comments`);
}

function* loadComments(action) {
    try {
        const result = yield call(loadCommentsAPI, action.data);
        yield put({
            type: LOAD_COMMENTS_SUCCESS,
            data: {
                postId: action.data,
                comments: result.data,
            },
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_COMMENTS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadComments() {
    yield takeEvery(LOAD_COMMENTS_REQUEST, loadComments);
}

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

function loadMainPostsAPI(lastId, limit = 10) {

    return axios.get(`/posts?lastId=${lastId}&limit=${limit}`);
}

function* loadMainPosts(action) {

    console.log('loadMainPosts action: ', action);

    try {
        const loadedPosts = yield call(loadMainPostsAPI, action.lastId);
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

function addCommentAPI(data) {

    return axios.post(`/post/${data.postId}/comment`, { content: data.content }, {
        withCredentials: true,
    });
}

function* addComment(action) {

    console.log('sagas/post... addComment... action: ', action);

    try {
        const result = yield call(addCommentAPI, action.data);
        console.log('addComment result: ', result);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: result.data.PostId,
                comment: result.data,
            },
        });
    }catch (e) {
        console.error(e);
        yield put({
            type: ADD_COMMENT_FAILURE,
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
        const result = yield call(addPostAPI, action.data);
        yield delay(1000);

        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });

        yield put({
            type: ADD_POST_TO_ME,
            data: result.data,
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
        fork(watchLoadComments),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnLikePost),
        fork(watchBookmark),
        fork(watchRemovePost),
    ]);

}