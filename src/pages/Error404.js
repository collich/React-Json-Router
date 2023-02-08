import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <h2>404</h2>
            <p>Page not found</p>
            <Link to='/'>Go back to home page</Link>
        </div>
    )
}

export default Error404
