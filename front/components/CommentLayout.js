import {
    Comment, CommentContainer,
    CommentDetail, CommentField, CommentFieldInput, Contents,
    Nickname,
    SpriteSmallHeartIconOutline, Timer, UploadBtn,
} from "./style/content";
import {useDispatch} from "react-redux";
import {ADD_COMMENT_REQUEST} from "../reducers/post";

const CommentLayout = ({post}) => {
    // console.log('CommentLayout post: ', post);

    const dispatch = useDispatch();

    const onClickBtn = () => {
      dispatch({
          type: ADD_COMMENT_REQUEST,
          data: {
              postId: post.id,
          }
      });
    };


    return (
        <>
            {post.comments && post.comments.map((e) => {
                return (
                    <CommentContainer>
                        <Comment>
                            <CommentDetail>
                                <Nickname>{e.User.userNickname}</Nickname>
                                <div>{e.content}</div>
                            </CommentDetail>
                        </Comment>
                        <div>
                            <SpriteSmallHeartIconOutline/>
                        </div>
                    </CommentContainer>
                );
            })}

            {/*<Timer>5일, 23시간</Timer>*/}

            <CommentField>
                <CommentFieldInput type="text" size="70px" placeholder="댓글 달기..." maxLength="40"/>
                <UploadBtn onClick={onClickBtn}>게시</UploadBtn>
            </CommentField>
        </>

    );
};

export default CommentLayout;