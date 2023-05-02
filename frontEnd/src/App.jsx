import React,{ useState } from 'react'
import Navbar from './components/navbar/navbar'
import SearchBar from './components/searchbar/searchBar'
import ClearFilter from './components/filters/clearFilter';
import Filters from './components/filters/filters';
import HackathonList from './components/hackathonLister/hackathonList';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
function App() {
  
  return (
      <div className="App bg-[#f8f9fa]">
        
          <Navbar />
          <SearchBar />
          <ClearFilter />
          <Filters />
      </div>
  );
}

export default App
