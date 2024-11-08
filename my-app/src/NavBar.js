import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className = "nav">
        {/* link that leads to home page */}
        <Link to = "/" className = "site-title"> 
            TeaTime 
        </Link>

        {/* unordered list, displays items in bulleted list default */}
        <ul>
            <CustomLink to = "/profile">Profile</CustomLink>
            <CustomLink to = "/discover">Discover</CustomLink>
            <CustomLink to = "/aboutus">About Us</CustomLink>

            {/* li stands for list item */}
            {/* anchor tag for each li*/}
            {/* <li className = "active"> 
                <a href = "/profile">Profile</a>
            </li>

            <li>
                <a href = "/discover"> Discover </a>
            </li>

            <li>
                <a href = "/aboutus" > About Us </a>
            </li> */}

        </ul>
    </nav>
    )
        
}


function CustomLink({ to, children, ...props }) {
    // const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to = {to} {...props}> 
                {children} 
            </Link>
        </li>
    )
}