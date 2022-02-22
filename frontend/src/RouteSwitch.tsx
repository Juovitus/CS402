import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { Login } from "./components/login/Login";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;