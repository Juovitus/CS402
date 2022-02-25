import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { Data } from "./components/data/Data";
import { Login } from "./components/login/Login";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/data" element={<Data />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;