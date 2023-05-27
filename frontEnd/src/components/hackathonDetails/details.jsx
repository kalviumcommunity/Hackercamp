import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import fullStop from '../../assets/fullStop.png';
import { useParams } from 'react-router-dom';
import HandleDate from '../hackathonLister/handleDate';
import HandleDay from '../hackathonLister/handleDay';
import HandleTime from '../hackathonLister/handleTime';

function Details() {
    const { id  } = useParams();
    const [hackathon,setHackathon]=useState([])

    console.log(hackathon.Themes?.[0]);
    const fetchData=(url)=>{
        fetch(url).then((res)=>res.json())
        .then((res)=>{
            setHackathon(res)  
        }).catch((error)=>{
            console.log('Error occured')
        })
    }

    useEffect(()=>{
        fetchData(`http://localhost:2003/api/hackathons/${id}`);
    },[])
    return (
        <div>
            <Navbar />
            <div className="flex flex-col px-10% relative top-14">
                <div>
                    <img
                        src={hackathon.Poster}
                        alt=""
                        className="h-100 w-1220 rounded"
                    />
                </div>
                <div className="flex gap-2 items-center text-emperor font-bold text-sm mt-5">
                    <span>
                        <HandleDate date={hackathon.Date} format={'short'} />
                    </span>
                    <img src={fullStop} className="h-4" />
                    {hackathon.Themes && hackathon?.Themes[0].split(',').map((tag) => (
                        <span
                            key={tag}
                            className="font-medium text-slate-600 bg-slate-200 p-1 roudned"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-3">
                    <h1 className="font-bold text-5xl text-primary">
                        {hackathon.Name}
                    </h1>
                    <p className="text-15 mt-3 text-newgray font-medium">
                        {hackathon.Description}
                    </p>
                </div>
                <div className="mt-8">
                    <div className="bg-lavender h-16 w-52 text-15 flex items-center gap-1 pl-4">
                        <span className="text-slate-500">by</span>
                        <span className="font-bold text-title">
                            {hackathon.Organisation}
                        </span>
                    </div>
                </div>
                <div className="mt-8">
                    <div>
                        <h3 className="font-semibold text-primary text-2xl pb-2">
                            When and Where
                        </h3>
                        <div className="bg-lavender flex justify-around items-center py-4">
                            <div>
                                <h4 className="font-medium text-xl text-primary">
                                    Timings
                                </h4>
                                <div className="flex gap-2 text-15 text-slate-500">
                                    <span>
                                        {
                                            <HandleDay
                                                date={hackathon.Date}
                                                format={'long'}
                                            />
                                        }
                                    </span>
                                    <span>,</span>
                                    <span>
                                        {
                                            <HandleDate
                                                date={hackathon.Date}
                                                format={'long'}
                                            />
                                        }
                                    </span>
                                    <span>
                                        {new Date(hackathon.Date).getFullYear()}
                                    </span>
                                    <span>,</span>
                                    <span>
                                        {<HandleTime time={hackathon.time} />}
                                    </span>
                                </div>
                            </div>
                            <div className="text-slate-400">|</div>
                            <div>
                                <h4 className="font-medium text-xl text-primary">
                                    Location
                                </h4>
                                <div className="text-15 text-slate-500">
                                    <span>{hackathon.Address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="font-semibold text-primary text-2xl pb-2">
                        About the Event
                    </h3>
                    <p className="leading-7 text-emperor mb-8">
                        {hackathon.Details}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Details;
