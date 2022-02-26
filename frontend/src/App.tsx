import './App.css';
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'
import { Data } from "./components/data/Data";
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className='Main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/data" element={<Data />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;