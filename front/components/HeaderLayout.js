import Link from 'next/link';
import {
    Header, Inner, A, Sprite_insta_icon, Sprite_write_logo,
    SearchFieldInput, FakeField, SearchIcon,
    RightIcons, Sprite_camera_icon, Sprite_compass_icon, Sprite_heart_icon_outline, Sprite_user_icon_outline
}
    from './style/header'
import {useCallback, useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LOG_OUT_REQUEST} from "../reducers/user";
import Router from "next/router";


const HeaderLayout = () => {

    const [searchName, setSearchName] = useState('');
    const { isLoggedIn } = useSelector(state => state.user);
    const { isSearched } = useSelector(state => state.post);
    const dispatch = useDispatch();

    // console.log('headerlayout isLoggedIn: ', isLoggedIn);

    const onLogout = useCallback(() =>{
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    const onChangeInput = useCallback((e) =>{
        console.log('e.target.value: ', e.target.value);
        setSearchName(e.target.value);
    }, []);

    const onKeyPressed = useCallback((e) => {

        if(e.key === 'Enter') {
            console.log('searchName: ', searchName);
            Router.push({pathname: '/hashtag', query: { tag: searchName} }, `/hashtag/${searchName}`);
        }
    }, [searchName]);

    useEffect(() => {

        if(isSearched) {
            setSearchName('');
        }
    }, [isSearched]);

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
                        <SearchFieldInput value={searchName} onChange={onChangeInput} onKeyPress={onKeyPressed}/>
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