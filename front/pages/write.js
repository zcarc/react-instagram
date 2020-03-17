import {useEffect} from 'react';
import WriteLayout from "../Containers/WriteLayout";
import {useSelector} from "react-redux";
import Router from "next/router";

const Write = () => {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        if (!isLoggedIn) {
            alert('로그인이 필요합니다.');
            Router.push('/');
        }
    }, [isLoggedIn]);

    if(!isLoggedIn){
        return null;
    }

    return (
        <WriteLayout/>
    );
};

export default Write;