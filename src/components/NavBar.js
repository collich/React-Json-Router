import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}

export default NavBar
