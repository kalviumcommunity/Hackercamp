import React  from 'react';
import {Link} from 'react-router-dom'
import HandleDate from './handleDate';
import HandleDay from './handleDay';
import HandleTime from './handleTime';
import dotIcon from '../../assets/fullStop.png';
function HackathonCard({ hackathon }) {
    return (
        <>
            <Link to={`/${hackathon.id}`}>
                <div
                    key={hackathon.id}
                    className="bg-slate-100 my-6 flex items-center justify-around font-roboto rounded hover:drop-shadow-lg hover:bg-slate-200 hover:scale-101 transition-transform ease-out duration-500"
                >
                    <div>
                        <img
                            src={hackathon.image}
                            key={hackathon.id}
                            className="my-5 rounded h-40"
                        />
                    </div>
                    <div className="flex flex-col w-2/5 gap-3  px-3.5 py-2 rounded">
                        <div className="relative">
                            <p className="text-title text-22.5 font-semibold font-roboto">
                                {hackathon.name}
                            </p>
                        </div>

                        <div className="flex gap-1 items-center text-15 font-medium text-primary">
                            <HandleDay date={hackathon.date} format={'short'} />
                            <img src={dotIcon} alt="" className="h-3 " />
                            <HandleDate
                                date={hackathon.date}
                                format={'short'}
                            />
                            <img src={dotIcon} alt="" className="h-3 " />
                            <HandleTime time={hackathon.time} />
                        </div>
                        <div className="flex gap-1 items-center text-15 font-roboto  text-blackish">
                            <span>{hackathon.location}</span>
                            <img src={dotIcon} alt="" className="h-3 " />
                            <span>{hackathon.price} entry</span>
                        </div>
                        <div className="flex gap-2">
                            {hackathon.tags.map((tag) => (
                                <span className="font-medium text-primary">
                                    #{tag}
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
