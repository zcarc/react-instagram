import {all, takeLatest, fork, call, put, delay} from 'redux-saga/effects';
import {
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from "../reducers/user";
import axios from 'axios';

function signUpAPI(data) {

    // const data2 = {
    //     user: {
    //         id: 1,
    //         nick: 'test01',
    //     }
    // };

    return axios.post('http://localhost:8080/api/user/', data);

}

function* signUp(action) {

    // console.log('sagas/user... action: ', action);

    try {
        yield call(signUpAPI, action.data);
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

function loginAPI() {

}

function* login() {

    try {
        yield call(loginAPI);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: {
                id: 'sendId',
                password: 'sendPassword',
            },
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
        fork(watchLogin),
        fork(watchSignUp),
    ]);
}