export default function NavBar() {
    return (
        <nav className = "nav">
        {/* link that leads to home page */}
        <a href = "/" className = "site-title"> 
            TeaTime 
        </a>

        {/* unordered list, displays items in bulleted list default */}
        <ul>
            <CustomLink href = "/profile">Profile</CustomLink>
            <CustomLink href = "/discover">Discover</CustomLink>
            <CustomLink href = "/aboutus">About Us</CustomLink>


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

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href = {href} {...props}> 
                {children} 
            </a>
        </li>
    )
}