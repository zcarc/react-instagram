import {CommentField, CommentFieldInput, UploadBtn} from "./style/content";

const CommentFormLayout = () => {
    return(
        <CommentField>
            <CommentFieldInput type="text" size="70px" placeholder="댓글 달기..." maxLength="40"/>
            <UploadBtn>게시</UploadBtn>
        </CommentField>
    );
};

export default CommentFormLayout;