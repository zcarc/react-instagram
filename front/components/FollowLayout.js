import {
    Cancel,
    Center,
    FirstRow,
    FollowingContainer,
    Inner,
    ScrollContainer, ScrollWrap,
    SecondRow,
    StartEnd,
    SVG,
    ThirdRow,
} from "./style/follow";
import Link from "next/link";
import FollowUsersObjectLayout from "./FollowUsersObjectLayout";
import {useSelector} from "react-redux";

const FollowLayout = ({pageName}) => {

    const {followingList, followerList} = useSelector(state => state.user);

    return (
        <>
            <FollowingContainer>
                <Inner>
                    <FirstRow>
                        <StartEnd/>
                        <Center>
                            <div>팔로우</div>
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
                                {pageName.toLowerCase() === 'following'
                                    ? followingList.map(user => <FollowUsersObjectLayout key={user} user={user} pageName={pageName}/>)
                                    : followerList.map(user => <FollowUsersObjectLayout key={user} user={user} pageName={pageName}/>)
                                }
                            </ScrollWrap>
                        </ScrollContainer>
                    </ThirdRow>
                </Inner>
            </FollowingContainer>

        </>

    );
};

export default FollowLayout;