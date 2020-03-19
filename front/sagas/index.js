import {all, call} from 'redux-saga/effects';
import user from './user';
import post from './post';
import axios from "axios";

axios.defaults.baseURL = 'http://3.34.5.76:8080/api/';

export default function* rootSaga() {
    yield all([
        call(user),
        call(post),
    ]);
}