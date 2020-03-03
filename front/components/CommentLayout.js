import {
    Comment,
    CommentDetail,
    Nickname,
    SpriteSmallHeartIconOutline,
} from "./style/content";

const CommentLayout = () => {
    return (
        <>
            <Comment>
                <CommentDetail>
                    <Nickname>username</Nickname>
                    <div>description1</div>
                </CommentDetail>
            </Comment>
            <div>
                <SpriteSmallHeartIconOutline/>
            </div>
        </>

    );
};

export default CommentLayout;