import {Link, useMatch, useResolvedPath} from "react-router-dom"
function Navbar(){
    return( <nav className="nav">
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

function CustomLink({to, children, ...props}){
    const path = window.location.pathname
    console.log("qfqfeqfqefqe")
    return(
        <li className={path === to ? "active" : ""}> 
            <Link to={to} {...props}>
                {children}
                </Link>
        </li>
    )
}

export default Navbar;