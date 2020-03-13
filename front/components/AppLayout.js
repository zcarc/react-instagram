import {GlobalStyle} from './style/header'
import {Container, MainContainer} from './style/common';
import PropTypes from 'prop-types';
import HeaderLayout from './HeaderLayout';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {USER_EXISTS_REQUEST} from "../reducers/user";


const withoutAppLayout = [
    'Register',
    'Login',
];

const AppLayout = ({children}) => {

    // const { isLoggedIn } = useSelector(state => state.user);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         dispatch({
    //             type: USER_EXISTS_REQUEST,
    //         });
    //     }
    // }, []);

    return (
        <>
            <GlobalStyle/>
            <Container>
                {withoutAppLayout.includes(children.props.pageName) ? <>{children}</>
                    : (
                        <>
                            <HeaderLayout/>
                            <MainContainer>
                                {children}
                            </MainContainer>
                        </>
                    )}
            </Container>
        </>

    );
};

AppLayout.propTypes = {
    Component: PropTypes.node,
};
export default AppLayout;