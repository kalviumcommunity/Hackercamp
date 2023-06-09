import React, { useState, useEffect } from 'react';
import Accordion from './accordion';
import HackathonList from '../hackathonLister/hackathonList';

function Filters({hackathon, isLoading}) {
    const [themeFilter, setThemeFilter] = useState('');
    const [filteredHackathons, setFilteredHackathon] = useState([]);
    const [checkboxes, setCheckboxes] = useState({
        paid: false,
        free: false,
    });
    const [dateFilters, setDateFilters] = useState({
        from: '1900-01-01',
        to: '2100-12-01',
    });
    
     const handleCheckboxChange = (e) => {
         setCheckboxes({
             ...checkboxes,
             [e.target.name]: e.target.checked,
         });
     };

     const handleDateFilterChange = (e) => {
         setDateFilters({
             ...dateFilters,
             [e.target.name]: e.target.value,
         });
     };
      useEffect(() => {
         let filteredHackathons = hackathon;

         // Filter by theme
         themeFilter !== ''
             ? (filteredHackathons = filteredHackathons.filter((hackathon) =>
                   hackathon.Themes.includes(themeFilter.toLowerCase())
               ))
             : null;

         // Filter by price
         checkboxes.paid || checkboxes.free
             ? (filteredHackathons = filteredHackathons.filter(
                   (hackathon) =>
                       (checkboxes.paid &&
                           hackathon.PaymentMode.includes('Paid')) ||
                       (checkboxes.free &&
                           hackathon.PaymentMode.includes('Free'))
               ))
             : null;

         // Filter by dates
             filteredHackathons = filteredHackathons.filter((hackathon) => {
                 const hackathonDate = new Date(hackathon.Date);
                 const from =
                     dateFilters.from !== ''
                         ? new Date(dateFilters.from)
                         : null;
                 const to =
                     dateFilters.to !== '' ? new Date(dateFilters.to) : null;

                 if (from && to) {
                     return hackathonDate >= from && hackathonDate <= to;
                 } else if (from) {
                     return hackathonDate >= from;
                 } else if (to) {
                     return hackathonDate <= to;
                 }
                 return true; // return true for all other cases
             });
         setFilteredHackathon(filteredHackathons);
     }, [themeFilter, hackathon, checkboxes, dateFilters]);


    return (
        <div className="px-10% relative top-72 bg-slate-600">
            <div className="flex fixed  h-full  flex-col items-center border-r border-l border-slate-200 p-2 pr-6 w-3/12  bg-white  md:flex-col">
                <Accordion
                    title="By Theme tags"
                    children={
                        <input
                            type="text"
                            placeholder="Eg,. ai, ml, blockchain"
                            className="border-slate-200 h-10 w-11/12 rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300"
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    setThemeFilter(e.target.value);
                                }
                            }}
                            onChange={(e) => {
                                if (e.target.value === '') {
                                    setThemeFilter(e.target.value);
                                }
                            }}
                        />
                    }
                />
                <hr className="w-10/12 my-3 text-slate-200 border" />
                <Accordion
                    title="By Date"
                    children={
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col flex-shrink-2 gap-1">
                                <label className="text-slate-500 text-sm">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="from"
                                    className="border-slate-200 h-10 w-56 rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300"
                                    onChange={handleDateFilterChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-slate-500 text-sm">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    name="to"
                                    className="border-slate-200 h-10 w-56 rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300"
                                    onChange={handleDateFilterChange}
                                />
                            </div>
                        </div>
                    }
                />
                <hr className="w-10/12 my-3 text-slate-200 border" />
                <Accordion
                    title="By Price"
                    children={
                        <div className="flex gap-6 text-gray-500">
                            <div className="flex w-24 justify-between">
                                <input
                                    type="checkbox"
                                    name="paid"
                                    checked={checkboxes.paid}
                                    onChange={handleCheckboxChange}
                                />
                                <span>Paid entry</span>
                            </div>
                            <div className="flex w-24 justify-between">
                                <input
                                    type="checkbox"
                                    name="free"
                                    checked={checkboxes.free}
                                    onChange={handleCheckboxChange}
                                />
                                <span>Free entry</span>
                            </div>
                        </div>
                    }
                />
                <hr className="w-9/12 my-3 text-slate-200 border" />
            </div>
            <div className="w-8/12 absolute left-1/3">
                <HackathonList
                    data={filteredHackathons}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}

export default Filters;
