import React, { useEffect,useState } from 'react';
import { Routes, Route } from 'react-router';
import Homepage from './components/pages/homepage';
import Details from './components/hackathonDetails/details';
import HackathonCreation from './components/hackathonCreator/hackathonCreation';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('http://localhost:1003/api/hackathons');
            const jsonData = await result.json(); // wait for the response to be parsed
            setData(jsonData); // set the state with the parsed data
        }
        fetchData();
    }, []);

    return (
        <div className="bg-gray">
            <Routes>
                <Route path="/" element={<Homepage data={data} />} />
                <Route path="/:id" element={<Details />} />
                <Route path="/organise" element={<HackathonCreation />} />
            </Routes>
        </div>
    );
}

export default App;

