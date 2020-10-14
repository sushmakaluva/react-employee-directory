import React from 'react';
import SearchBar from './SearchBar'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{margin:20}} >
            <div className="collapse navbar-collapse row" id="navbarNav">
                <div className="search-area col-4">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;