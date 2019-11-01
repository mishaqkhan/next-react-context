import Head from 'next/head'
import NavBar from "../components/navbar/Navbar";

function PopulateHead() {
    return (
        <div>
            <NavBar/>
            <Head>
                <title>NextJs Test Environment</title>
                <meta name="desciption" content="This is development environment for next js." />
            </Head>
            <p>Head is populated</p>
        </div>
    )
}

export default PopulateHead