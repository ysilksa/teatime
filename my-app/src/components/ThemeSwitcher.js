import React from 'react'; 
import GenericButton from './AllButtons';


export default function ThemeSwitcher({ mode, switchMode }) {

    

    const buttonText = mode === 'light' ? 'Dark Mode' : 'Light Mode';

    return (
        // usage of generic component 
        <GenericButton
            label={buttonText}
            onClick={switchMode}
            style={{ 
                backgroundColor: mode === 'light' ? '#2A2B2A' : '#FFFDF0', 
                color: mode === 'light' ? '#FFFDF0' : '#2A2B2A' 
                }}
            className="dark-mode-button" 
        />
    );
}
