import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Shop from "../pages/Shop"
import ShopSingle from "../pages/Shop-Sengle"

export const Routers = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/ShopSingle" element={<ShopSingle/>}/>
            <Route path="*" element={<h1>404 Error</h1>}/>
        </Routes>
    )
}