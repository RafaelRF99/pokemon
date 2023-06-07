import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Status from '../pages/Status'
import NotFound from '../pages/NotFound'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/status' element={<Status />} />
                <Route path='/notfound' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}