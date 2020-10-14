import React from 'react';


function SearchBar() {
    return (
        <div className="input-group">
            <div className="input-group-prepend mt-5">
                <span className="input-group-text" id="">Search  </span>
                
                    <input className="form-control" type="search" placeholder="name" aria-label="name" />
                
            </div>

        </div>
    );
}

export default SearchBar;