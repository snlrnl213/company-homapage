import { Link, matchPath, generatePath } from "react-router-dom"
function Navbar() {
    return (<nav className="nav">
        <Link to="/" className="site-title">
            ComPany
        </Link>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/introduce">Introduce</CustomLink>
            <CustomLink to="/qna">QnA</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname
    const generatePath = generatePath(to)
    const isActive = matchPath({path: generatePath, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;