import React from 'react';
import fetch from 'isomorphic-unfetch'
import NavBar from "../../components/navbar/Navbar";
const Post = ({post}) => {
    return(
        <div>
            <NavBar/>
            ID: {post.id}
            <br />
            Title: {post.title}
        </div>
    );
}

Post.getInitialProps = async ({query}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+query.pid);
    const json = await res.json()
    return { post: json }
}

export default Post