import React from 'react'
import {useContext} from 'react';
import {ThemeContext} from '../../App'

interface Props {

}

export const Settings: React.FC<Props> = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className='Settings'>Settings[{theme}]</div>
    );
}