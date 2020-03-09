import {all, takeLatest, fork, call, put, delay} from 'redux-saga/effects';
import {
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    LOG_OUT_SUCCESS,
    LOG_OUT_REQUEST,
    USER_EXISTS_REQUEST, USER_EXISTS_SUCCESS, USER_EXISTS_FAILURE
} from "../reducers/user";
import axios from 'axios';

function userExistsAPI() {

    return axios.get('/user/', {
        withCredentials: true,
    });
}

function* userExists() {

    try {
        const result = yield call(userExistsAPI);
        yield put({
            type: USER_EXISTS_SUCCESS,
            data: result.data,
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: USER_EXISTS_FAILURE,
            error: e
        });
    }

}

function* watchUserExists() {
    yield takeLatest(USER_EXISTS_REQUEST, userExists);
}



function logoutAPI() {

    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });

}

function* logout() {

    try {
        yield call(logoutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });

    } catch (e) {
        console.error(e);
    }

}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}


function loadUserAPI(data) {

    console.log('loadUserAPI data: ', data);

    return axios.get(`/user/${data || 0}/`, {
        withCredentials: true,
    });
}

function* loadUser(action) {

    try {
        const result = yield call(loadUserAPI, action.data);
        console.log('loadUser... result: ', result);
        // yield delay(800);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
            me: !action.data,
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e
        });
    }

}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function signUpAPI(data) {

    // const data2 = {
    //     user: {
    //         id: 1,
    //         nick: 'test01',
    //     }
    // };

    // axios retuns a promise
    return axios.post('/user/', data);
}

function* signUp(action) {

    // console.log('sagas/user... action: ', action);

    try {
        const result = yield call(signUpAPI, action.data);
        console.log('result: ', result);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
        });

    } catch (e) {

        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        })
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function loginAPI(data) {
    return axios.post('/user/login', data,{
        withCredentials: true,
    });

    // return axios.post('/user/login', data);
}

function* login(action) {

    try {
        const result = yield call(loginAPI, action.data);
        // console.log('sagas/user... login axios result: ', result); // user data: result.data
        // console.log('sagas/user... login axios result.data: ', result.data);
        yield delay(800);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });

    } catch (e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }

}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
    yield all([
        fork(watchUserExists),
        fork(watchLogin),
        fork(watchSignUp),
        fork(watchLoadUser),
        fork(watchLogout),
    ]);
}