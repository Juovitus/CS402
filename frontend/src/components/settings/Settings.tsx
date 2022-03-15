import React from 'react'
import {useContext} from 'react';
import {ThemeContext} from '../../App'
import ThemeToggle from './ThemeToggle';

interface Props {

}

export const Settings: React.FC<Props> = () => {
    //Get theme value to be able to change it
    const {theme} = useContext(ThemeContext);
    return (
        <div className='Settings'>Settings[{theme}]<ThemeToggle /></div>
        
    );
}