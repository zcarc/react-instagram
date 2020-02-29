import {useState, useCallback} from 'react';
import {
    FormContainer, FormInnder, FormInputField,
    FormReg, FormSubmitButton, FormSubmitContainer, LoginInner,
    RegisterMainContainer,
    Right, RightAppsContainer, RightAppsIcons, RightAppsText,
    RightFormContainer,
    RightFormContainerFormSection,
    RightFormContainerTitleImg, RightLoginContainer
} from "./style/register";
import Link from "next/link";

const LoginLayout = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

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

    }, [id, password]);

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

                                <div>
                                    <FormSubmitContainer>
                                        <FormSubmitButton type="submit">로그인</FormSubmitButton>
                                    </FormSubmitContainer>
                                </div>

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