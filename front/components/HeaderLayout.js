import Link from 'next/link';
import {
    Header, Inner, A, Sprite_insta_icon, Sprite_write_logo,
    SearchFieldInput, FakeField, SearchIcon,
    RightIcons, Sprite_camera_icon, Sprite_compass_icon, Sprite_heart_icon_outline, Sprite_user_icon_outline
}
    from './style/header'
import {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LOG_OUT_REQUEST} from "../reducers/user";


const HeaderLayout = () => {

    const { isLoggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    console.log('headerlayout isLoggedIn: ', isLoggedIn);

    const onLogout = useCallback(() =>{
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (
        <>
            <Header>
                <Inner>
                    <h1 className="logo">
                        <Link href="/">
                            <A>
                                <Sprite_insta_icon/>
                                <Sprite_write_logo/>
                            </A>
                        </Link>
                    </h1>

                    <div className="search_field">
                        <SearchFieldInput/>
                        <FakeField>
                            <SearchIcon/>
                            <span>검색</span>
                        </FakeField>
                    </div>

                    <RightIcons>
                        <Sprite_camera_icon/>
                        <Sprite_compass_icon/>
                        <Sprite_heart_icon_outline/>
                        {!isLoggedIn
                            ? <Link href="/login"><a><Sprite_user_icon_outline/></a></Link>
                            : <Link href="/profile"><a><Sprite_user_icon_outline/></a></Link>
                        }
                        {isLoggedIn && <button onClick={onLogout}>로그아웃</button>}

                    </RightIcons>

                </Inner>
            </Header>

        </>

    );
};

export default HeaderLayout;