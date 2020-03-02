import {PlusIcon, PostForm, PostFormContainer, Preview, SubmitBtn, Title, Upload} from "../components/style/write";

const Write = () => {
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

                <p><input type="file" accept="image/*" id="id_photo"/></p>
                <p><textarea name="content" cols="50" rows="5"
                             placeholder="내용을 입력하세요." required="" id="id_content"/></p>

                <SubmitBtn type="submit" value="저장"/>

            </PostForm>

        </PostFormContainer>

);
};

export default Write;