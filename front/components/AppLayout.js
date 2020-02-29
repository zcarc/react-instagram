import {GlobalStyle} from './style/header'
import {Container, MainContainer} from './style/common';
import PropTypes from 'prop-types';
import HeaderLayout from './HeaderLayout';
import React from "react";

const AppLayout = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Container>
                <HeaderLayout/>
                <MainContainer>
                    {children}
                </MainContainer>
            </Container>
        </>

    );
};

AppLayout.propTypes = {
    Component: PropTypes.node,
};
export default AppLayout;