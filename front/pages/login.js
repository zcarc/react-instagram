import LoginLayout from "../components/LoginLayout";
import {useEffect} from "react";
import {useStore, useSelector} from "react-redux";
import Router from "next/router";

const Login = () => {

    const {isLoggedIn} = useSelector(state => state.user);
    // const store = useStore();
    // const isLoggedIn = store.getState().user.isLoggedIn;

    useEffect(() => {

        if(isLoggedIn) {
            Router.push('/');
        }


    }, [isLoggedIn]);

    return (
        <>
            <LoginLayout/>
        </>
    );
};

export default Login;