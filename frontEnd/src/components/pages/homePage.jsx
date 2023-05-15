import Navbar from '../navbar/navbar';
import SearchBar from '../searchbar/searchBar';
import Filters from '../filters/filters';
import data from '../data.json'
import React from 'react';

function Homepage() {
    return (
        <div>
            <Navbar />
            <SearchBar /> 
            <Filters hackathon={data} />
        </div>
    );
}

export default Homepage;
