import {PlusIcon, PostForm, PostFormContainer, Preview, Title, Upload} from "../components/style/write";
import {useState, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import {override} from "../components/style/common";
import {FormSubmitButton} from "../components/style/register";
import {ADD_POST_REQUEST} from "../reducers/post";
import Router from 'next/router';

const WriteLayout = () => {

    const [desc, setDesc] = useState('');

    const dispatch = useDispatch();
    const {isAddingPost, isPostAdded} = useSelector(state => state.post);

    const onChangeDesc = useCallback((e) => {
        setDesc(e.target.value);
        console.log(`desc: ${desc}`);
    }, [desc]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();

        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                postDesc: desc,
            },
        });
    }, [desc]);

    useEffect(() => {

        if(isPostAdded){
            Router.push('/');
        }

    }, [isPostAdded]);



    return (

        <PostFormContainer>

            <PostForm action="#" encType="multipart/form-data">

                <Title>New Post</Title>

                <Preview>
                    <label htmlFor="id_photo">
                        <Upload>
                            <div>
                                <PlusIcon>
                                    <span/>
                                    <span/>
                                </PlusIcon>
                                <p>포스트 이미지 추가</p>
                            </div>
                        </Upload>
                    </label>
                </Preview>

                <p>
                    <input type="file" accept="image/*" id="id_photo"/>
                </p>

                <p>
                    <textarea cols="50" rows="5" onChange={onChangeDesc} placeholder="내용을 입력하세요."/>
                </p>


                <FormSubmitButton type="submit" onClick={onSubmitForm}>
                    {!isAddingPost ? <div>저장</div> :
                        <FadeLoader css={override} color={"#05dfd7"} loading={isAddingPost}/>}
                </FormSubmitButton>

            </PostForm>

        </PostFormContainer>

    );
};

export default WriteLayout;