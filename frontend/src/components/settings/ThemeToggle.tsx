import './settings.css';
import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../App';

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return <div className='themeToggle'>
        <Switch
            uncheckedIcon = {<span>🌑</span>}
            checkedIcon = {<span>☀️</span>}
            onColor = {'#eee'}
            onChange = {handleThemeToggle}
            checked = {theme === 'light'}
        />
    </div>
}

export default ThemeToggle;