import React, { useState } from 'react';
import HandleDate from './handleDate';
import HandleDay from './handleDay';
import HandleTime from './handleTime';
import dotIcon from '../../assets/full-stop.png';
function HackathonCard(props) {
   
    return (
        <>
            {props.data.map((hackathon) => (
                <div
                    key={hackathon.id}
                    className="bg-cards my-6 pl-6 flex items-center font-roboto  border-gray-300 border rounded hover:drop-shadow-lg hover:bg-[#d9e6f0]"
                 
                >
                    <div>
                        <img
                            src={hackathon.image}
                            key={hackathon.id}
                            className="my-5 rounded h-40 w-80"
                        />
                    </div>
                    <div className="flex flex-col gap-3 pl-16">
                        <p className="text-title text-name font-semibold font-roboto text-title">
                            {hackathon.name}
                        </p>
                        <div className="flex gap-1 items-center text-[15px] font-medium text-primary">
                            <HandleDay date={hackathon.date} format={'short'} />
                            <img src={dotIcon} alt="" className="h-3 " />
                            <HandleDate
                                date={hackathon.date}
                                format={'short'}
                            />
                            <img src={dotIcon} alt="" className="h-3 " />
                            <HandleTime time={hackathon.time} />
                        </div>

                        <div className="flex gap-1 items-center text-[15px]  text-[#848484]">
                            <span>{hackathon.location}</span>
                            <img src={dotIcon} alt="" className="h-3 " />
                            <span>{hackathon.Price} entry</span>
                        </div>
                        <div className="flex gap-2">
                            {hackathon.tags.map((tag) => (
                                <span className="font-medium text-primary">
                                    #{tag.toLowerCase()}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default HackathonCard;
