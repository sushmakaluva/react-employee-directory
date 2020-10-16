import React from 'react';

function SearchBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ margin: 20 }} >
            <div className="collapse navbar-collapse row" id="navbarNav">
                <form className="search-area col-4">
                    <div className="input-group">
                        <div className="input-group-prepend mt-5">
                            <span className="input-group-text" id="">Search  </span>
                            <input onChange={props.onChange} className="form-control" type="search" value={props.searchInput} name="searchInput" placeholder="name" aria-label="name" />

                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );


}

export default SearchBar;