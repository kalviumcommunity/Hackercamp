import React from 'react';
import { Routes, Route } from 'react-router';
import Homepage from './components/pages/homepage';
import Details from './components/hackathonDetails/details';
import data from '../src/components/data.json'
import './App.css';

function App() {
    return (
        <div className="App bg-gray">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/:id" element={<Details data={data} />} />
            </Routes>
        </div>
    );
}

export default App;
