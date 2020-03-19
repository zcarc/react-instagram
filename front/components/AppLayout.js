import {GlobalStyle} from './style/header'
import {Container, MainContainer} from './style/common';
import PropTypes from 'prop-types';
import HeaderLayout from './HeaderLayout';
import React, {useEffect} from "react";


const withoutAppLayout = [
    'Register',
    'Login',
];

const AppLayout = ({children}) => {

    const isChrome = typeof chrome !== 'undefined' ? chrome : null;


    useEffect(() => {

        if(!isChrome){
            alert('본 사이트는 구글 크롬 브라우저에 최적화되어 있습니다.')
        }

    }, [isChrome]);

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