import {
    Comment, CommentContainer,
    CommentDetail, CommentField, CommentFieldInput,
    Nickname,
    SpriteSmallHeartIconOutline, Timer, UploadBtn,
} from "./style/content";
import {useState, useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST} from "../reducers/post";

const CommentLayout = ({post}) => {
    // console.log('CommentLayout post: ', post);

    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.user);

    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const onClickBtn = useCallback((e) => {
        e.preventDefault();

        if(!isLoggedIn) {
            return alert('로그인이 필요합니다.');
        }

        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
                content,
            }
        });
    }, [isLoggedIn, content]);

    const onLoadComments = useCallback(() => {
        dispatch({
            type: LOAD_COMMENTS_REQUEST,
            data: post.id,
        });
    }, []);

    console.log('post.comments: ', post.comments);



    return (
        <>
            <button type="button" onClick={onLoadComments}>댓글보기</button>

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

            <Timer>5일, 23시간</Timer>

            <CommentField>
                <CommentFieldInput type="text" onChange={onChangeContent} size="70px" placeholder="댓글 달기..."
                                   maxLength="40"/>
                <UploadBtn type="button" onClick={onClickBtn}>게시</UploadBtn>
            </CommentField>
        </>

    );
};

export default CommentLayout;