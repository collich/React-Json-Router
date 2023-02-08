import { BrowserRouter, Route, Routes } from "react-router-dom"
import UsePage from "./hooks/UsePage"


const App = () => {
    const { Home, About } = UsePage()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
