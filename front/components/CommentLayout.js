import {
    Comment, CommentContainer,
    CommentDetail, CommentField, CommentFieldInput, Contents,
    Nickname,
    SpriteSmallHeartIconOutline, Timer, UploadBtn,
} from "./style/content";

const CommentLayout = () => {
    return (
        <>
            <CommentContainer>
                <Comment>
                    <CommentDetail>
                        <Nickname>username</Nickname>
                        <div>description1</div>
                    </CommentDetail>
                </Comment>
                <div>
                    <SpriteSmallHeartIconOutline/>
                </div>
            </CommentContainer>

            {/*<Timer>5일, 23시간</Timer>*/}

            <CommentField>
                <CommentFieldInput type="text" size="70px" placeholder="댓글 달기..." maxLength="40"/>
                <UploadBtn>게시</UploadBtn>
            </CommentField>
        </>

    );
};

export default CommentLayout;