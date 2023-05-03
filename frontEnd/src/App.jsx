import React,{ useState } from 'react'
import Navbar from './components/navbar/navbar'
import SearchBar from './components/searchbar/searchBar'
import ClearFilter from './components/filters/clearFilter';
import Filters from './components/filters/filters';
import HackathonList from './components/hackathonLister/hackathonList';
import './App.css';

function App() {
  return (
      <div className="App bg-background"> 
          <Navbar />
          <SearchBar />
          <ClearFilter />
          <Filters />
      </div>
  );
}
export default App
