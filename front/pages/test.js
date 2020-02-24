import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/style/reset.css"/>
            </Head>
            <AppLayout>
                <div>
                    <div>테스트페이지</div>
                </div>

            </AppLayout>
        </>
    );
};

export default Home;