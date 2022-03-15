import './App.css';
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'
import { Data } from "./components/data/Data";
import { Route, Routes } from 'react-router-dom';
import { Inbox } from './components/inbox/Inbox';
import { Project } from './components/project/Project';
import { Settings } from './components/settings/Settings';
import React, { useState } from 'react'

interface IThemeContext{
    theme: string;
    setTheme: any;
}

export const ThemeContext = React.createContext({} as IThemeContext);

function App() {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.Provider value = {{theme, setTheme}}>
        <div className="App">
            <Navbar />
            <div className='Main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/data' element={<Data />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/project/:id' element={<Project />} />
                </Routes>
            </div>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;