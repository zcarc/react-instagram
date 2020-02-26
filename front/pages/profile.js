import AppLayout from "../components/AppLayout";
import Head from "next/head";


const Profile = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/style/reset.css"/>
            </Head>
            <AppLayout>
                <div>
                    <div>프로필</div>
                </div>
            </AppLayout>

        </>
    );
};

export default Profile;