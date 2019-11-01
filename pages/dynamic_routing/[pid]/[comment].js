import { useRouter } from 'next/router'
import NavBar from '../../../components/navbar/Navbar';

const Post = () => {
    const router = useRouter(),
        {pid, comment} = router.query;

    return (
        <div>
            <NavBar />
            <p>
                You requested post # {pid} and comment {comment}
            </p>
        </div>
    );
}

export default Post