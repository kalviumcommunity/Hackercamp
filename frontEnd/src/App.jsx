import React,{ useState } from 'react'
import Navbar from './components/navbar/navbar'
import SearchBar from './components/searchbar/searchBar'
import ClearFilter from './components/filters/clearFilter';
import Filters from './components/filters/filters';
import HackathonList from './components/hackathonLister/hackathonList';

import './App.css';
function App() {
  
  return (
      <div className="App">
          <Navbar/>
          <SearchBar />
          <ClearFilter />
          <div className="flex px-[10%]">
              <div>
                  <Filters />
              </div>
              <div className='grow'>
                  <HackathonList />
              </div>
          </div>
      </div>
  );
}

export default App
