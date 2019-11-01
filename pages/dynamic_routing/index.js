import Link from 'next/link';
import NavBar from "../../components/navbar/Navbar";
function DynamicRouting() {
    return (
        <div>
            <NavBar />
            <ul>
                <Link href="/dynamic_routing/[pid]" as="/dynamic_routing/123">
                    <li style={{cursor: 'pointer'}}>Post # 123</li>
                </Link>
                <Link href="/dynamic_routing/[pid]/[comment]" as="/dynamic_routing/123/awesome">
                    <li style={{cursor: 'pointer'}}>Post # 123 comment awesome</li>
                </Link>
                <Link href="/dynamic_routing/[pid]/[comment]" as="/dynamic_routing/123/awesome">
                    <li style={{cursor: 'pointer'}}>Post # 123 comment awesome</li>
                </Link>
                <Link href={{ pathname: '/dynamic_routing/multi_params', query: { name: 'Zeit', age: 14 } }}>
                    <li style={{cursor: 'pointer'}}>Multi Params</li>
                </Link>
            </ul>
        </div>
    )
}

export default DynamicRouting