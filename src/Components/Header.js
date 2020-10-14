import React from 'react';
import './style.css';

function Header() {
    return (
        <header className="Header" style={{padding: 20}}>
            <h1>Employee Directory</h1>
            <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </header>
    );
}

export default Header;