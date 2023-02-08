import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import ShareLayout from "../pages/ShareLayout";

const UsePage = () => {
    const valuetoShare = {
        Home,
        About,
        Error404,
        ShareLayout
    }

    return (valuetoShare)
}

export default UsePage