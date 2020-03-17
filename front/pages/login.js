import LoginLayout from "../components/LoginLayout";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import Router from "next/router";

const Login = () => {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            Router.push('/');
        }
    }, [isLoggedIn]);

    if (isLoggedIn) {
        return null;
    }

    return (
        <LoginLayout/>
    );
};

export default Login;