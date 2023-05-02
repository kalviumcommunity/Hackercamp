import React from 'react';

function Navbar() {
    return (
        <nav className="flex justify-between px-10%  h-20 items-center font-sans w-full">
            <div className="flex gap-1 text-3xl">
                <div className="bg-blue-600 text-white w-10 h-8  grid justify-center items-center rounded drop-shadow-lg">
                    <span className="text-xl">{'</>'}</span>
                </div>
                <p className="text-blue-600 font-bold">HackerCamp</p>
            </div>
            <div className="flex gap-x-4 items-center">
                <a className="text-slate-500 font-semibold cursor-pointer  hover:text-blue-600">
                    Organise Hackathons
                </a>
                <span className="text-slate-400">|</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                    Sign up
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
