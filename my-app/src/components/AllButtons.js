import React from 'react';
import './AllButtons.css';

// generic component for a button 
export default function GenericButton ({
    label, 
    onClick, 
    style = {},
    className = "generic-button"
}) { return (
    <button 
        className={className} 
        style={style} 
        onClick={onClick}
    >
        {label}
    </button>
    );
}

