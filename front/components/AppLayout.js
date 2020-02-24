import Link from 'next/link';
import {Container, Header, Inner, A, Sprite_insta_icon, Sprite_write_logo,
    SearchFieldInput, FakeField, SearchIcon,
    RightIcons, Sprite_camera_icon, Sprite_compass_icon, Sprite_heart_icon_outline, Sprite_user_icon_outline } from './style/header'


const AppLayout = ( {children} ) => {
    return (
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
                        <Sprite_user_icon_outline/>
                    </RightIcons>

                </Inner>
            </Header>

            <section id="main_container">
                {children}
            </section>

        </Container>


    );
};

export default AppLayout;