import {PlusIcon, PostForm, PostFormContainer, Preview, Title, Upload} from "../components/style/write";
import {useState, useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import {override} from "../components/style/common";
import {FormSubmitButton} from "../components/style/register";
import {ADD_POST_REQUEST, CLOSE_IMAGE, UPLOAD_IMAGES_REQUEST} from "../reducers/post";
import Router from 'next/router';

const WriteLayout = () => {

    const [desc, setDesc] = useState('');
    const imageInput = useRef('');

    const dispatch = useDispatch();
    const {isAddingPost, isPostAdded, imageNames} = useSelector(state => state.post);

    console.log('WriteLayout imageNames: ', imageNames);

    const onChangeDesc = useCallback((e) => {
        setDesc(e.target.value);
        console.log(`desc: ${desc}`);
    }, [desc]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();

        const newForm = new FormData();

        imageNames && imageNames.forEach((image) => {
            newForm.append('image', image);
        });

        newForm.append('desc', desc);

        dispatch({
            type: ADD_POST_REQUEST,
            data: newForm,
        });
    }, [desc]);

    useEffect(() => {

        if(isPostAdded){
            Router.push('/');
        }

    }, [isPostAdded]);


    const onClickImageUpload = useCallback(() => {
        // console.log(`onClickImageUpload`);
        // console.log(imageInput.current);
        imageInput.current.click();
    }, []);

    const onChangeInput = useCallback((e) => {
        // console.log('e.target.files: ', e.target.files);

        const newFormData = new FormData();

        [].forEach.call(e.target.files, (f) => {
            // console.log('f: ', f);
            newFormData.append('image', f);
            // console.log('newFormData: ', newFormData);
        });

        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: newFormData,
        });

    }, []);

    const onCloseImage = useCallback((index) => () => {
        dispatch({
            type: CLOSE_IMAGE,
            imageIndex: index,
        });
    }, []);


    return (

        <PostFormContainer>

            <PostForm action="#" encType="multipart/form-data">

                <Title>New Post</Title>

                <Preview>
                    {/*<label htmlFor="id_photo">*/}
                        <Upload onClick={onClickImageUpload}>
                            <div>
                                <PlusIcon>
                                    <span/>
                                    <span/>
                                </PlusIcon>
                                <p>포스트 이미지 추가</p>
                            </div>
                        </Upload>
                    {/*</label>*/}
                </Preview>

                {imageNames && imageNames.map((imageName, index) => {
                    return  (
                        <>
                            <div key={imageName} style={{display: 'flex'}}>
                                <div style={{display: 'flex', position: 'relative', flexGrow: 1}}>

                                    <img src={`http://localhost:8080/fileslist/${imageName}`} style={{flexGrow: 1, width: '400px', margin: '3px', border: '1px solid #dbdbdb'}}/>

                                    <div className="image_close" onClick={onCloseImage(index)} style={{display: 'flex', position: 'absolute', top: '6px', right: '6px', justifyContent: 'center', alignItems: 'center', width: '17px', height: '17px', cursor: 'pointer' }}>
                                        <span style={{display: 'block', height: '12px', transform: 'rotate(45deg)', position: 'absolute', border: '1px solid red', borderRadius: '15px'}} />
                                        <span style={{display: 'block', height: '12px', transform: 'rotate(-45deg)', position: 'absolute', border: '1px solid red', borderRadius: '15px'}} />
                                    </div>
                                </div>
                                {/*<button type="button"*/}
                                {/*        style={{flex: '1 1 auto', margin: '3px', border: '1px solid #dbdbdb', background: '#fff', borderRadius: '4px', cursor: 'pointer'}}>삭제</button>*/}
                            </div>
                        </>
                    );
                })}

                <p>
                    {/*<input type="file" accept="image/*" id="id_photo"/>*/}
                    <input type="file" ref={imageInput} onChange={onChangeInput} multiple hidden />
                </p>

                <p>
                    <textarea cols="50" rows="5" onChange={onChangeDesc} placeholder="내용을 입력하세요." style={{resize: 'none'}}/>
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