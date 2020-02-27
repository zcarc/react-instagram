import Link from 'next/link';

const Home = () => {

    return (
        <>
            <div>
                <h1>메인페이지</h1>
                <Link href="/register"><a>회원가입</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
            </div>
        </>
    );
};

export default Home;