import Navbar from '../navbar/navbar';
import SearchBar from '../searchbar/searchBar';
import Filters from '../filters/filters';
import React from 'react';

function Homepage({data}) {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <Filters hackathon={data}/>
        </div>
    );
}
export default Homepage;
