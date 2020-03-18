import {useState, useCallback} from 'react';
import {
    FormContainer, FormInnder, FormInputField,
    FormReg, FormSubmitButton,
    RightFormContainerFormSection,
} from "../components/style/register";
import {useDispatch, useSelector} from "react-redux";

import {SpinnerSmall} from "../components/style/common";

const LoginFormLayout = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isLoggingIn} = useSelector(state => state.user);


    // console.log('LoginFormLayout... isLoggingIn: ', isLoggingIn);
    // console.log('LoginFormLayout... isLoggedIn: ', isLoggedIn);

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

    return (

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

    );

};

export default LoginFormLayout;