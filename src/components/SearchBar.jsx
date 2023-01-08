import React, { useState } from 'react';

function SearchBar(props) {
   
    return (
        <div className='searchBar'>
            <input className='input'/>
            <i class="lni lni-search-alt searchIcon"></i>
        </div>
    );
}

export default SearchBar;