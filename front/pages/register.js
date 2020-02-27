import {useState, useEffect, useRef, useCallback} from 'react';
import Head from "next/head";
import {GlobalStyle} from '../components/style/header';
import {
    RegisterMainContainer, Left, LeftContainer, Slide,
    Right, RightFormContainer, RightFormContainerTitleImg, RightFormContainerFormSection,
    FormReg, FormTitle, FormContainer, FormInnder, FormInputField, FormSubmitContainer, FormSubmitButton,
    FormTermsText, RightLoginContainer, LoginInner, RightAppsContainer, RightAppsText, RightAppsIcons
} from "../components/style/register";


const Register = () => {
    const [container, setContainer] = useState(null);
    let [curNumber, setCurNumber] = useState(0);
    const [imgs, setImgs] = useState(null);
    const leftRef = useRef(null);

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        let timer;

        if (!container) {
            // console.log('!container');
            setContainer(leftRef.current);

        } else if (!imgs) {
            // console.log('!imgs');
            setImgs(container.children);
        }

        if (imgs) {
            // console.log('imgs');
            // console.log('curNumber: ', curNumber);
            // console.log('imgs[curNumber]: ', imgs[curNumber]);

            timer = setTimeout(() => {
                // console.log(`${curNumber}: imgs[curNumber]: `, imgs[curNumber]);

                imgs[curNumber].classList.remove('show');

                if (imgs[curNumber].nextElementSibling) {
                    imgs[curNumber].nextElementSibling.classList.add('show');
                    setCurNumber(curNumber === 4 ? 0 : (curNumber + 1));

                } else {
                    imgs[0].classList.add('show');
                    setCurNumber(0);
                }

            }, 6000)

        }

        return () => {
            clearTimeout(timer);
        };

    }, [container, imgs, curNumber]);


    const onChangeId = useCallback((e) => {
        // console.log('onChangeId e.target.value: ', e.target.value);
        setId(e.target.value);
    }, []);

    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
    }, []);


    const onSubmitForm = useCallback((e) => {

        // console.log('onSubmitForm...');
        e.preventDefault();

        // 비밀번호 체크
        if(password !== passwordCheck) {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }, [password, passwordCheck]);


    return (
        <>
            <Head>
                <link rel="stylesheet" href="/style/reset.css"/>
            </Head>
            <GlobalStyle/>
            <section>
                <main>
                    <RegisterMainContainer>
                        <Left>

                            <LeftContainer ref={leftRef}>
                                <Slide className="show" src="../img/phone_img_01.jpg" alt=""/>
                                <Slide src="../img/phone_img_02.jpg" alt=""/>
                                <Slide src="../img/phone_img_03.jpg" alt=""/>
                                <Slide src="../img/phone_img_04.jpg" alt=""/>
                                <Slide src="../img/phone_img_05.jpg" alt=""/>
                            </LeftContainer>
                        </Left>


                        {/*Right*/}

                        <Right>
                            <RightFormContainer>
                                <RightFormContainerTitleImg/>
                                <RightFormContainerFormSection>
                                    <FormReg onSubmit={onSubmitForm}>
                                        <FormTitle>
                                            친구들의 사진과 동영상을 보려면 가입하세요.
                                        </FormTitle>

                                        <FormContainer>
                                            <FormInnder>
                                                <FormInputField onChange={onChangeId} placeholder="아이디"/>
                                            </FormInnder>
                                        </FormContainer>

                                        <FormContainer>
                                            <FormInnder>
                                                <FormInputField onChange={onChangeNickname} placeholder="닉네임"/>
                                            </FormInnder>
                                        </FormContainer>

                                        <FormContainer>
                                            <FormInnder>
                                                <FormInputField onChange={onChangePassword} type="password" placeholder="비밀번호"/>
                                            </FormInnder>
                                        </FormContainer>

                                        <FormContainer>
                                            <FormInnder>
                                                <FormInputField onChange={onChangePasswordCheck} type="password" placeholder="비밀번호 확인"/>
                                            </FormInnder>
                                        </FormContainer>

                                        <div>
                                            <FormSubmitContainer>
                                                <FormSubmitButton type="submit">가입</FormSubmitButton>
                                            </FormSubmitContainer>
                                        </div>

                                        <FormTermsText>
                                            가입하면 Instagram의
                                            <span>약관, 데이터 정책</span>
                                            및
                                            <span>쿠키 정책</span>에 동의하게 됩니다.
                                        </FormTermsText>

                                    </FormReg>
                                </RightFormContainerFormSection>
                            </RightFormContainer>
                            <RightLoginContainer>
                                <LoginInner>
                                    <div>계정이 있으신가요? <a href="">로그인</a></div>
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

export default Register;