import {Link} from "react-router-dom"
function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">ComPany</a>
        <ul>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/introduce">Introduce</CustomLink>
            <CustomLink href="/qna">QnA</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return(
        <li className={path === href ? "active" : ""}> 
            <a href={href}>{children}</a>
        </li>
    )
}

export default Navbar;