import { Outlet } from "react-router-dom"
import UseComponents from "../hooks/UseComponents"

const ShareLayout = () => {
    const { NavBar } = UseComponents()

  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default ShareLayout