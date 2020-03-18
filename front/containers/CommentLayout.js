import {useState, useCallback, memo, useRef, useEffect} from 'react'
import {
    Comment, CommentContainer,
    CommentDetail, CommentField, CommentFieldInput,
    Nickname,
    Timer, UploadBtn,
} from "../components/style/content";
import {useDispatch, useSelector} from "react-redux";
import {ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST} from "../reducers/post";
import {SpinnerSmallComment} from "../components/style/common";

const CommentLayout = memo(({post}) => {
    // console.log('CommentLayout post: ', post);

    const [content, setContent] = useState('');
    const moreBtnInput = useRef('');

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.user);
    const isAddingComment = useSelector(state => state.post.isAddingComment);
    const isAddedComment = useSelector(state => state.post.isAddedComment);

    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const onClickBtn = useCallback((e) => {
        e.preventDefault();

        if(!isLoggedIn) {
            return alert('로그인이 필요합니다.');
        }


        if(!content) {
            return alert('댓글 내용이 필요합니다.');
        }

        const matched = content.match(/^\s+[a-z-A-Z-0-9]?|[a-z-A-Z-0-9]?[\s]+$/g);

        if(matched) {
            if(matched.filter(s => s.trim()).length === 0) {
                return alert('공백을 제외한 문자를 입력해주세요.');
            }
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

        moreBtnInput.current.style.useSelector = 'none';

        dispatch({
            type: LOAD_COMMENTS_REQUEST,
            data: post.id,
        });
    }, []);

    useEffect(() => {

        if(isAddedComment) {
            setContent('');
        }

    }, [isAddedComment]);


    return (
        <>
            {post.Comments && post.Comments.length > 0
                ? <div ref={moreBtnInput} style={{fontSize: '13px', padding: '5px 20px', color: '#999', cursor:'pointer'}} onClick={onLoadComments}>더보기</div>
                : null
            }


            {post.comments && post.comments.map((e, i) => {
                return (
                    <CommentContainer key={i}>
                        <Comment>
                            <CommentDetail>
                                <Nickname>{e.User.userNickname}</Nickname>
                                <div>{e.content}</div>
                            </CommentDetail>
                        </Comment>
                    </CommentContainer>
                );
            })}

            <Timer>5일, 23시간</Timer>

            <CommentField>
                <CommentFieldInput type="text" value={content} onChange={onChangeContent} size="70px" placeholder="댓글 달기..."
                                   maxLength="40"/>


                {!isAddingComment
                    ? <UploadBtn type="button" onClick={onClickBtn}>게시</UploadBtn>
                    : <div style={{position: 'absolute', top: '35%', right: '23px'}}>
                        <SpinnerSmallComment/>
                      </div>
                }

            </CommentField>
        </>

    );
});

export default CommentLayout;