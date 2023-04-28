import React from 'react';
import Navbar from '../navbar/navbar';
function SearchBar() {
    return (
        <div>
            {/* <Navbar/> */}
            <div className="h-52 bg-cover flex flex-col items-center justify-center gap-4 bg-search-bar-bg-image">
                <h1 className="text-slate-500 font-semibold font-roboto text-slogan">
                    Innovate and Elevate: Find Your Perfect Hackathons.
                </h1>
                <div className="abc w-6/12 relative">
                    <input
                        className="h-inputBox w-full pl-movePlaceholderText rounded placeholder-gray-400 text-xl focus:outline-blue-300"
                        type="text"
                        placeholder="Search your favourite hackathons"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-6">
                        <img
                            src="https://img.icons8.com/ios-glyphs/256/search.png"
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
