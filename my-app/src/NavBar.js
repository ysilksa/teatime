export default function NavBar() {
    return <nav className = "nav">
        {/* link that leads to home page */}
        <a href = "/" className = "site-title"> TeaTime </a>

        {/* unordered list, displays items in bulleted list default */}
        <ul>
            <li className = "active"> {/* li stands for list item */}
                {/* anchor tag for each li*/}
                <a href = "/home">Home</a>
            </li>

            <li>
                <a href = "/discover"> Discover </a>
            </li>

            <li>
                <a href = "/aboutus"> About Us </a>
            </li>

        </ul>
    </nav>
}