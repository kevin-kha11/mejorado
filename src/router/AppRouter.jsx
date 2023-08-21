import { Route, Routes } from "react-router-dom"
import Login from "../components/login/Login"
import Home from "../components/home/Home"


export const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={ <Login/> } />
                <Route path="/home" element={ <Home/> } />
            </Routes>
    )
}