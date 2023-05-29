import React, { useEffect,useState } from 'react';
import { Routes, Route } from 'react-router';
import Homepage from './components/pages/homepage';
import Details from './components/hackathonDetails/details';
import HackathonCreation from './components/hackathonCreator/hackathonCreation';
// import HackathonForm from './components/hackathonCreator/hackathonForm';
import './App.css';

function App() {
    return (
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/:id" element={<Details />} />
                <Route path="/organise" element={<HackathonCreation/>} />
            </Routes>
        </div>
    );
}

export default App;

