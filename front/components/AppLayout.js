import Link from 'next/link';

import {GlobalStyle, Container, Header, Inner, A, Sprite_insta_icon, Sprite_write_logo,
    SearchFieldInput, FakeField, SearchIcon,
    RightIcons, Sprite_camera_icon, Sprite_compass_icon, Sprite_heart_icon_outline, Sprite_user_icon_outline }
    from './style/header'
import {MainContainer} from './style/contents'


const AppLayout = ( {children} ) => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header>
                    <Inner>
                        <h1 className="logo">
                            <Link href="/">
                                <A>
                                    <Sprite_insta_icon />
                                    <Sprite_write_logo />
                                </A>
                            </Link>
                        </h1>

                        <div className="search_field">
                            <SearchFieldInput/>
                            <FakeField>
                                <SearchIcon />
                                <span>검색</span>
                            </FakeField>
                        </div>

                        <RightIcons>
                            <Sprite_camera_icon/>
                            <Sprite_compass_icon/>
                            <Sprite_heart_icon_outline/>
                            <Link href="/profile"><a><Sprite_user_icon_outline/></a></Link>
                        </RightIcons>

                    </Inner>
                </Header>

                <MainContainer>
                    {children}
                </MainContainer>

            </Container>
        </>

    );
};

export default AppLayout;