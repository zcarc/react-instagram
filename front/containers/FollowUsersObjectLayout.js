import {FollowingName, FollowToggleButton, FollowUser, UserImage, UserObject, UserObjectInner} from "../components/style/follow";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {REMOVE_FOLLOWER_REQUEST, UNFOLLOW_USER_REQUEST} from "../reducers/user";
import {serverURL} from "../config/url";

const FollowUsersObjectLayout = ({user, pageName}) => {


    const dispatch = useDispatch();

    const onClickUnFollowButton = useCallback(() => {
        dispatch({
            type: UNFOLLOW_USER_REQUEST,
            data: user.id,
        });
    }, []);

    const onClickRemoveFollowerButton = useCallback(() => {
        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: user.id,
        });
    }, []);


    return (

        <UserObject>
            <UserObjectInner>
                <FollowUser>
                    <UserImage>
                        <div>
                            <Link href="#">
                                <a>
                                    {user.userProfileImage
                                        ? <img src={`${serverURL}/fileslist/${user.userProfileImage}`} alt="user image"/>
                                        : <img src={'/img/profile_image_default.jpg'} alt="user image"/>
                                    }
                                </a>
                            </Link>
                        </div>
                    </UserImage>

                    <FollowingName>
                        <div>
                            <a>{user.userId}</a>
                        </div>
                        <div>
                            <div>{user.userNickname}</div>
                        </div>
                    </FollowingName>

                </FollowUser>
                <div>

                    {pageName.toLowerCase() === 'following'
                        ? <FollowToggleButton type="button" onClick={onClickUnFollowButton}>언팔로잉</FollowToggleButton>
                        : <FollowToggleButton type="button" onClick={onClickRemoveFollowerButton}>언팔로우</FollowToggleButton>
                    }

                </div>
            </UserObjectInner>
        </UserObject>


    );
};

export default FollowUsersObjectLayout;

