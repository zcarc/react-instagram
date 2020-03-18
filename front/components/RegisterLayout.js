import {useEffect} from 'react';
import {useSelector} from "react-redux";
import Router from "next/router";
import {
    LoginInner,
    RegisterMainContainer,
    Right, RightAppsContainer, RightAppsIcons, RightAppsText,
    RightFormContainer,
    RightFormContainerTitleImg, RightLoginContainer,

} from "./style/register";
import Link from "next/link";
import RegisterLeftLayout from "./RegisterLeftLayout";
import RegisterRightFormLayout from "../containers/RegisterRightFormLayout";

const RegisterLayout = () => {

    const {isSigningUp, isSignedUp} = useSelector(state => state.user);

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        if (isSignedUp) {
            Router.push('/');
        }

    }, [isSignedUp]);


    if (isSignedUp) {
        return null;
    }

    return (
        <>
            <section>
                <main>
                    <RegisterMainContainer>
                        <RegisterLeftLayout/>

                        {/*Right*/}

                        <Right>
                            <RightFormContainer>
                                <Link href="/">
                                    <a>
                                        <RightFormContainerTitleImg/>
                                    </a>
                                </Link>

                            <RegisterRightFormLayout isSigningUp={isSigningUp} isSignedUp={isSignedUp}/>

                            </RightFormContainer>
                            <RightLoginContainer>
                                <LoginInner>
                                    <div>계정이 있으신가요? <Link href="/login"><a>로그인</a></Link></div>
                                </LoginInner>
                            </RightLoginContainer>
                            <RightAppsContainer>
                                <RightAppsText>
                                    앱을 다운로드하세요.
                                </RightAppsText>
                                <RightAppsIcons>
                                    <a>
                                        <img src="../img/ios.png" alt=""/>
                                    </a>
                                    <a>
                                        <img src="../img/android.png" alt=""/>
                                    </a>
                                </RightAppsIcons>
                            </RightAppsContainer>
                        </Right>

                    </RegisterMainContainer>
                </main>
            </section>
        </>
    );
};

export default RegisterLayout;