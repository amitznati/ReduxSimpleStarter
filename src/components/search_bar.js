import React from 'react';

 const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <input onChange={event => props.onSearchChanged(event.target.value)}/>
        </div>
        );
    }


export default SearchBar;
