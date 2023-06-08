import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Status from "../pages/Status";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </BrowserRouter>
    );
}
