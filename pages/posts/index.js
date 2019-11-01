import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import NavBar from "../../components/navbar/Navbar";

const Posts = ({posts}) => {
    return(
        <div>
            <NavBar/>
            {
                posts && posts.slice(0, 5).map((p) => (
                        <div>
                            <Link href="/posts/[pid]" as={"/posts/" + p.id} >
                                <a>ID: {p.id}</a>
                            </Link>
                            <p>title: {p.title}</p>
                        </div>
                    )
                )
            }
        </div>
    );
}

Posts.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'),
        json = await res.json();

    return { posts: json }
}

export default Posts