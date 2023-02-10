import { NavLink } from "react-router-dom"
import classNames from "classnames"

const NavBar = () => {
    const classNameElement = (isActive) => {
        const classNameE = classNames({"text-amber-500 bg-gray-400 rounded-lg": isActive, "text-gray-500": !isActive}, "text-xl p-2.5")
        return classNameE
    }

    return (
        <div className="flex justify-between border">
            <nav className="p-2 mx-auto my-5 inline-block rounded-lg">
                <h1>Something</h1>
            </nav>
            <nav className="p-2 mx-auto my-5 inline-block rounded-lg">
                <div>
                    <NavLink to="/" className={({isActive}) => classNameElement(isActive) }>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => classNameElement(isActive) }>About</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
