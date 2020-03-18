import {
    LoginInner,
    RegisterMainContainer,
    Right, RightAppsContainer, RightAppsIcons, RightAppsText,
    RightFormContainer,
    RightFormContainerTitleImg, RightLoginContainer
} from "./style/register";
import Link from "next/link";
import LoginFormLayout from "../containers/LoginFormLayout";

const LoginLayout = () => {


    // console.log('LoginLayout... isLoggingIn: ', isLoggingIn);
    // console.log('LoginLayout... isLoggedIn: ', isLoggedIn);

    return (

        <main>

            <div style={{paddingTop: '80px'}}/>
            <RegisterMainContainer>
                <Right>
                    <RightFormContainer>
                        <Link href="/">
                            <a>
                                <RightFormContainerTitleImg/>
                            </a>
                        </Link>
                        <div style={{paddingTop: '10px'}}/>

                        <LoginFormLayout/>

                    </RightFormContainer>

                    <RightLoginContainer>
                        <LoginInner>
                            <div>계정이 없으신가요? <Link href="/register"><a>가입하기</a></Link></div>
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
    );

};

export default LoginLayout;