import {useState, useCallback, useEffect} from 'react';
import {
    FormContainer,
    FormInnder,
    FormInputField,
    FormReg,
    FormSubmitButton,
    FormTermsText,
    FormTitle, RightFormContainerFormSection
} from "../components/style/register";
import {SpinnerSmall} from "../components/style/common";
import {SIGN_UP_REQUEST} from "../reducers/user";
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';
import Router from "next/router";


const RegisterRightFormLayout = ({isSigningUp, isSignedUp}) => {

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const dispatch = useDispatch();

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
        // console.log('whiteSpace: ', whiteSpace);

        if(whiteSpace > -1) {
            return alert('각 항목은 필수사항입니다.');
        }

        const test = userInfo.reduce((accumulator, current) => accumulator || (/\s/).exec(current), false);
        if(test){
            return alert('공백은 입력할 수 없습니다.');
        }

        if (password !== passwordCheck) {
            return alert('비밀번호가 일치하지 않습니다.');
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

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);

        if (isSignedUp) {
            Router.push('/');
        }

    }, [isSignedUp]);


    return (
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
    );
};

RegisterRightFormLayout.propTypes = {
    isSigningUp: PropTypes.bool.isRequired,
};

export default RegisterRightFormLayout;