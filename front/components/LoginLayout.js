import {useState, useCallback} from 'react';
import {
    FormContainer, FormInnder, FormInputField,
    FormReg, FormSubmitButton, LoginInner,
    RegisterMainContainer,
    Right, RightAppsContainer, RightAppsIcons, RightAppsText,
    RightFormContainer,
    RightFormContainerFormSection,
    RightFormContainerTitleImg, RightLoginContainer
} from "./style/register";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

import { SpinnerSmall} from "./style/common";
import {LOG_OUT_REQUEST} from "../reducers/user";

const LoginLayout = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {userData, isLoggedIn, isLoggingIn} = useSelector(state => state.user);


    // console.log('LoginLayout... isLoggingIn: ', isLoggingIn);
    // console.log('LoginLayout... isLoggedIn: ', isLoggedIn);

    const onChangeId = useCallback((e) => {
        // console.log('onChangeId e.target.value: ', e.target.value);
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback((e) => {
        // console.log('onSubmitForm...');
        // console.log(id);
        // console.log(password);

        e.preventDefault();

        if (isLoggingIn) {
            return;
        }

        dispatch({
            type: 'LOG_IN_REQUEST',
            data: {
                userId: id,
                userPassword: password,
            },
        });

    }, [id, password, isLoggingIn]);

    const onLogoutForm = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (

        <main>
            {isLoggedIn && userData && <div>{userData.id}님이 로그인했습니다. <button onClick={onLogoutForm}>로그아웃</button></div>}

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
                        <RightFormContainerFormSection>
                            <FormReg onSubmit={onSubmitForm}>

                                <FormContainer>
                                    <FormInnder>
                                        <FormInputField onChange={onChangeId} value={id} placeholder="아이디"/>
                                    </FormInnder>
                                </FormContainer>

                                <FormContainer>
                                    <FormInnder>
                                        <FormInputField onChange={onChangePassword} value={password} type="password"
                                                        placeholder="비밀번호"/>
                                    </FormInnder>
                                </FormContainer>

                                <FormContainer>
                                    <FormSubmitButton type="submit">
                                        {!isLoggingIn
                                            ? <div>로그인</div>
                                            : <SpinnerSmall/>
                                        }
                                    </FormSubmitButton>
                                </FormContainer>
                            </FormReg>
                        </RightFormContainerFormSection>
                    </RightFormContainer>

                    <RightLoginContainer>
                        <LoginInner>
                            <div>계정이 없으신가요? <a href="/register">가입하기</a></div>
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