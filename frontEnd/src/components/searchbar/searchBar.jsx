import React from 'react';
import Navbar from '../navbar/navbar';
import searchIcon from '../../assets/searchIcon.png';
function SearchBar({setSearch}) {
    return (
        <div className='fixed w-full top-16 z-30'>
            <div className="h-52 bg-cover flex flex-col items-center justify-center gap-4 bg-search-bar-bg-image">
                <h1 className="text-slate-500 font-semibold font-roboto text-28">
                    Innovate and Elevate: Find Your Perfect Hackathons.
                </h1>
                <div className="abc w-6/12 relative">
                    <input
                        className="h-inputBox w-full pl-88 h-14 rounded placeholder-gray-400 text-base focus:outline-blue-300"
                        type="text"
                        placeholder="Search your favourite hackathons"
                        onChange={(e) => {setSearch(e.target.value)}}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-6">
                        <img
                            src={searchIcon}
                            alt=""
                            className="h-6 opacity-40"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
