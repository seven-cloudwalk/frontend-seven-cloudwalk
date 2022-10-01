import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { LoginPage } from "./pages/Login-Page"
import { RegisterUserPage } from "./pages/RegisterUser-Page"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register-user" element={<RegisterUserPage />}/>
        </Routes>
    )
}