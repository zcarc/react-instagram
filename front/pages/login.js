import LoginLayout from "../components/LoginLayout";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import Router from "next/router";

const Login = () => {

    const {isLoggedIn} = useSelector(state => state.user);

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