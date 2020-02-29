import {
    Cancel,
    Center,
    FirstRow,
    FollowingContainer, FollowingName, FollowToggleButton, FollowUser,
    Inner,
    ScrollContainer, ScrollWrap,
    SecondRow,
    StartEnd,
    SVG,
    ThirdRow, UserImage, UserObject, UserObjectInner
} from "./style/follow";
import Link from "next/link";

const FollowLayout = ({follow}) => {

    return (
        <>
            <FollowingContainer>
                <Inner>
                    <FirstRow>
                        <StartEnd/>
                        <Center>
                            <div>{follow}</div>
                        </Center>
                        <StartEnd>
                            <Link href="/profile">
                                <Cancel>
                                    <SVG fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                        <path d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"/>
                                    </SVG>
                                </Cancel>
                            </Link>
                        </StartEnd>
                    </FirstRow>
                    <SecondRow>
                        <span>사람</span>
                    </SecondRow>
                    <ThirdRow>
                        <ScrollContainer>
                            <ScrollWrap>

                                <UserObject>
                                    <UserObjectInner>
                                        <FollowUser>
                                            <UserImage>
                                                <div>
                                                    <Link href="#">
                                                        <a>
                                                            <img
                                                                src="https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg"
                                                                alt="user image"/>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </UserImage>
                                            <FollowingName>
                                                <div>
                                                    <a>olivia</a>
                                                </div>
                                                <div>
                                                    <div>ℋ a n n a h</div>
                                                </div>
                                            </FollowingName>
                                        </FollowUser>
                                        <div>
                                            <FollowToggleButton type="button">{follow === '팔로워' ? '팔로우' : follow}</FollowToggleButton>
                                            {/*<FollowToggleButton type="button">팔로잉</FollowToggleButton>*/}
                                        </div>
                                    </UserObjectInner>
                                </UserObject>

                            </ScrollWrap>
                        </ScrollContainer>
                    </ThirdRow>
                </Inner>
            </FollowingContainer>

        </>

    );
};

export default FollowLayout;