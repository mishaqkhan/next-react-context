import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import NavBar from "../../components/navbar/Navbar";

function DataFetch({ stars }) {
    return <div>
        <NavBar/>
        Next stars: {stars}
        <p>
            Data is fetched using function component.
            <br />
            <Link href="data_fetch/data_fetch_c" as="data_fetch/data_fetch_c">
                <a>&nbsp;GOTO&nbsp;</a>
            </Link>
            class component.
        </p>
    </div>
}

DataFetch.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}

export default DataFetch