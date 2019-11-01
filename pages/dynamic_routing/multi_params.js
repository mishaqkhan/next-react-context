import { useRouter } from 'next/router'
import NavBar from "../../components/navbar/Navbar";

const MultiParams = () => {
    const router = useRouter(),
        {name, age} = router.query

    return (
        <div>
            <NavBar />
            <p>Name: {name} and Age: {age}</p>
        </div>
    )
}

export default MultiParams;