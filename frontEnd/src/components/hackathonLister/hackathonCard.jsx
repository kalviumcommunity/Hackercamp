import React  from 'react';
import {Link} from 'react-router-dom'
import HandleDate from './handleDate';
import HandleDay from './handleDay';
import HandleTime from './handleTime';
import 'react-loading-skeleton/dist/skeleton.css';
import dotIcon from '../../assets/fullStop.png';
function HackathonCard({ hackathon }) {

    return (
        <>
            <Link to={`/${hackathon._id}`}>
                <div
                    key={hackathon._id}
                    className="bg-slate-100 my-6 flex items-center justify-around font-roboto rounded z-0 hover:drop-shadow-lg hover:bg-slate-200 hover:scale-1.009 transition-transform ease-out duration-500"
                >
                    <div>
                        <img
                            src={hackathon.Poster}
                            key={hackathon.Poster}
                            className="my-5 rounded h-40 w-72"
                        />
                    </div>
                    <div className="flex flex-col w-2/5 gap-3  px-3.5 py-2 rounded">
                        <div className="relative">
                            <p className="text-title text-22.5 font-semibold font-roboto">
                                {hackathon.Name}
                            </p>
                        </div>

                        <div className="flex gap-1 items-center text-15 font-medium text-primary">
                            <HandleDay date={hackathon.Date} format={'short'} />
                            <img src={dotIcon} alt="" className="h-3 " />
                            <HandleDate
                                date={hackathon.Date}
                                format={'short'}
                            />
                            <img src={dotIcon} alt="" className="h-3 " />
                            <HandleTime time={hackathon.Timings} />
                        </div>
                        <div className="flex gap-1 items-center text-15 font-roboto  text-blackish">
                            <span>{hackathon.Address}</span>
                            <img src={dotIcon} alt="" className="h-3 " />
                            <span>{hackathon.PaymentMode} entry</span>
                        </div>
                        <div className="flex gap-2">
                            {hackathon.Themes.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-medium text-slate-600 bg-slate-200 p-1 roudned"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default HackathonCard;
