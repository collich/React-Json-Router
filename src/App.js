import { BrowserRouter, Route, Routes } from "react-router-dom"
import UsePage from "./hooks/UsePage"

const App = () => {
    const { Home, About, Error404, ShareLayout} = UsePage()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShareLayout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="*" element={<Error404/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
