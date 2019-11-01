import Link from 'next/link';
import UserInfo from '../user/UserInfo';
import UserAvatar from '../user/UserAvatar';

function NavElements() {
    return <div>
        <Link href="/" as="/">
            <h1>NextJs</h1>
        </Link>
        <ul>
            <Link href="/css_example" as="/css_example">
                <li>
                    Local/Global CSS
                </li>
            </Link>
            <Link href="/dynamic_routing" as="/dynamic_routing">
                <li>
                    Dynamic Routing
                </li>
            </Link>
            <Link href="/head_population" as="/head_population">
                <li>
                    Head Population
                </li>
            </Link>
            <Link href="/data_fetch" as="/data_fetch">
                <li>
                    Fetching Data
                </li>
            </Link>
            <Link href="/posts" as="/posts">
                <li>
                    Get Posts
                </li>
            </Link>
            <Link href="/react_context" as="/react_context">
                <li>
                    React Context
                </li>
            </Link>
            <li style={{float: 'right', paddingTop: '20px'}}>
                <UserAvatar/>
            </li>
        </ul>
        <style jsx>{`
                h1{
                    display: inline;
                    cursor: pointer;
                }
                ul {
                    display: inline;
                    padding-left: '50px'
                }
                li {
                    display: inline;
                    color: green;
                    padding-right: 10px;
                    cursor: pointer
                }
                li:hover {
                    color: blue
                }
        `}</style>
    </div>
}

export default NavElements;