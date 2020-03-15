import {useState, useEffect, useRef, useCallback} from 'react';
import {
    RegisterMainContainer, Left, LeftContainer, Slide,
    Right, RightFormContainer, RightFormContainerTitleImg, RightFormContainerFormSection,
    FormReg, FormTitle, FormContainer, FormInnder, FormInputField, FormSubmitButton,
    FormTermsText, RightLoginContainer, LoginInner, RightAppsContainer, RightAppsText, RightAppsIcons
} from "../components/style/register";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

import {SIGN_UP_REQUEST} from "../reducers/user";
import {SpinnerSmall} from "../components/style/common";
import Router from 'next/router';


const Register = () => {
    const [container, setContainer] = useState(null);
    let [curNumber, setCurNumber] = useState(0);
    const [imgs, setImgs] = useState(null);
    const leftRef = useRef(null);

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const dispatch = useDispatch();

    const {isSigningUp, isLoggedIn} = useSelector(state => state.user);

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        if (isLoggedIn) {
            alert('로그인 상태이므로 메인 페이지로 이동합니다.');
            Router.push('/');
            return;
        }

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
                // console.log('imgs[curNumber].nextElementSibling: ', imgs[curNumber].nextElementSibling);

                imgs[curNumber].classList.remove('show');

                if (imgs[curNumber].nextElementSibling) {
                    imgs[curNumber].nextElementSibling.classList.add('show');
                    setCurNumber(curNumber + 1);
                    // setCurNumber(curNumber === 4 ? 0 : (curNumber + 1));

                } else {
                    imgs[0].classList.add('show');
                    setCurNumber(0);
                }

            }, 6000)

        }

        return () => {
            clearTimeout(timer);
        };

    }, [container, imgs, curNumber, isLoggedIn]);


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

        if(isSigningUp) {
            return;
        }

        const userInfo = [id, nickname, password, passwordCheck];
        const whiteSpace = userInfo.findIndex(e => e === '');
        console.log('whiteSpace: ', whiteSpace);

        if(whiteSpace > -1) {
            return alert('각 항목은 필수사항입니다.');
        }

        if (password !== passwordCheck) {
            return alert('비밀번호가 일치하지 않습니다.');
        }

        const test = userInfo.reduce((accumulator, current) => accumulator || (/\s/).exec(current), false);
        if(test){
            return alert('공백은 입력할 수 없습니다.');
        }

        dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                userId: id,
                userPassword: password,
                userNickname: nickname,
            },
        });

    }, [id, password, passwordCheck, nickname, isSigningUp]);

    if (isLoggedIn) {
        return null;
    }


    return (
        <>
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
                                <Link href="/">
                                    <a>
                                        <RightFormContainerTitleImg/>
                                    </a>
                                </Link>

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
                                                <FormInputField onChange={onChangePassword} type="password"
                                                                placeholder="비밀번호"/>
                                            </FormInnder>
                                        </FormContainer>

                                        <FormContainer>
                                            <FormInnder>
                                                <FormInputField onChange={onChangePasswordCheck} type="password"
                                                                placeholder="비밀번호 확인"/>
                                            </FormInnder>
                                        </FormContainer>

                                        <FormContainer>
                                            <FormSubmitButton type="submit">
                                                {/*<SpinnerSmall/>*/}

                                                {!isSigningUp
                                                    ? <div>가입</div>
                                                    : <SpinnerSmall/>
                                                }
                                            </FormSubmitButton>
                                        </FormContainer>

                                        <FormTermsText>
                                            가입하면 Instagram의
                                            <span>약관, 데이터 정책</span>
                                            <div style={{display: 'inline-block', margin: '0 2px'}}>및</div>
                                            <span>쿠키 정책</span>에 동의하게 됩니다.
                                        </FormTermsText>

                                    </FormReg>
                                </RightFormContainerFormSection>
                            </RightFormContainer>
                            <RightLoginContainer>
                                <LoginInner>
                                    <div>계정이 있으신가요? <a href="/login">로그인</a></div>
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