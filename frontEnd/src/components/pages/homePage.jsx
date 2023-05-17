import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import SearchBar from '../searchbar/searchBar';
import Filters from '../filters/filters';

function Homepage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('http://localhost:2003/api/hackathons');
            const jsonData = await result.json(); // wait for the response to be parsed
            setData(jsonData); // set the state with the parsed data
        }
        fetchData();
    }, []);


    const filteredHackathons = data.filter((_data) => {
        return _data.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div>
            <Navbar />
            <SearchBar setSearch={setSearch} />
            <Filters hackathon={filteredHackathons} />
        </div>
    );
}

export default Homepage;
