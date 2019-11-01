import NavBar from "../components/navbar/Navbar";

function LocalGlobalCss() {
    return (
        <div>
            <NavBar/>
            Hello world
            <p>scoped!</p>
            <style jsx>{`
                p {
                    color: blue;
                }
                div {
                    background: red;
                }
                @media (max-width: 600px) {
                    div {
                        background: blue;
                    }
                }
            `}
            </style>
            <style global jsx>{`
                body {
                    background: black;
                }
            `}
            </style>
        </div>
    )
}

export default LocalGlobalCss