import { useRouter } from 'next/router'
import NavBar from "../../components/navbar/Navbar";

const Post = () => {
    const router = useRouter(),
        {pid} = router.query

    return (
        <div>
            <NavBar />
            <p>You requested post: {pid}</p>
        </div>
    );
}

export default Post