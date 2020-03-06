import {GlobalStyle} from './style/header'
import {Container, MainContainer} from './style/common';
import PropTypes from 'prop-types';
import HeaderLayout from './HeaderLayout';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_REQUEST} from "../reducers/user";


const withoutAppLayout = [
    'Register',
    'Login',
];

const AppLayout = ({children}) => {

    const {userData} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userData) {
            dispatch({
                type: LOAD_USER_REQUEST,
            });
        }
    }, []);

    // console.log('children: ', children);
    // console.log('children.props.pageName: ', children.props.pageName);

    return (
        <>
            <GlobalStyle/>
            <Container>
                {withoutAppLayout.includes(children.props.pageName) ? <>{children}</>
                    : (
                        <>
                            <HeaderLayout userData={userData}/>
                            <MainContainer>
                                {children}
                            </MainContainer>
                        </>
                    )};
            </Container>
        </>

    );
};

AppLayout.propTypes = {
    Component: PropTypes.node,
};
export default AppLayout;