import Navbar from '../navbar/navbar';
import SearchBar from '../searchbar/searchBar';
import ClearFilter from '../filters/clearFilter';
import Filters from '../filters/filters';
import data from '../data.json'
import React from 'react';

function Homepage() {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <ClearFilter />
            <Filters hackathon={data} />
        </div>
    );
}

export default Homepage;
