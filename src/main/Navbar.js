import { Link, matchPath, generatePath } from "react-router-dom"
function Navbar() {
    return (<nav className="nav">
        <Link to="/" className="site-title">
            ComPany
        </Link>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/introduce">Introduce</Link>
            <Link to="/qna">QnA</Link>
        </ul>
    </nav>
    )
}


export default Navbar;