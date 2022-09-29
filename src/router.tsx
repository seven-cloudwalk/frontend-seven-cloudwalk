import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { LoginPage } from "./pages/Login-Page"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage />}/>
            {/* <Route path="/about-us" element={<AboutUs />}/> */}
        </Routes>
    )
}