import {all, call} from 'redux-saga/effects';
import user from './user';
import post from './post';
import axios from "axios";
import {serverURL} from "../config/url";

axios.defaults.baseURL = `${serverURL}/api/`;

export default function* rootSaga() {
    yield all([
        call(user),
        call(post),
    ]);
}