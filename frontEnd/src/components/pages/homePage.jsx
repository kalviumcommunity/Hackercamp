import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import SearchBar from '../searchbar/searchBar';
import Filters from '../filters/filters';
import { useAuth0 } from '@auth0/auth0-react';

function Homepage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    async function fetchData() {
        const result = await fetch(
            'https://hacker-camp.onrender.com/api/hackathons'
        );
        const jsonData = await result.json(); // wait for the response to be parsed
        setData(jsonData); // set the state with the parsed data
    }
    useEffect(() => {
        fetchData();
    }, []);

    const filteredHackathons = data.filter((_data) => {
        return _data.Name.toLowerCase().includes(search.toLowerCase());
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
