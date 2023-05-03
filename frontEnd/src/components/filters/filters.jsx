import React, { useState, useEffect } from 'react';
import Accordion from './accordion';
import HackathonList from '../hackathonLister/hackathonList';
function Filters() {
    const [themeFilter, setThemeFilter] = useState('');
    const [filteredHackathon, setFilteredHackathon] = useState([]);
    const [checkboxes, setCheckboxes] = useState({
        paid: false,
        free: false,
    });
    const [dateFilters, setDateFilters] = useState({
        From: '1900-01-01',
        To: '2100-12-01',
    });
    const [hackathon, setHackathons] = useState([
        
            {
                id: 1,
                name: 'Blockchain summit 2023',
                description:
                    'Join our blockchain hackathon and collaborate with like-minded individuals to build innovative decentralized solutions that can transform industries and promote trustless transactions.',
                date: '2023-08-12',
                location: 'online',
                image: 'https://res.cloudinary.com/ideation/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_400/juj3fkm2jhkfasujeeny',
                price: 'Free',
                time: '8pm',
                tags: ['blockchain'],
                details:
                    'Blockchain technology is a distributed ledger technology that enables secure and transparent transactions without the need for intermediaries. It has gained popularity due to its potential for creating decentralized, trustless, and tamper-proof systems. A blockchain hackathon would provide a platform for developers, entrepreneurs, and blockchain enthusiasts to collaborate, share knowledge, and build innovative blockchain-based solutions. Participants in a blockchain hackathon would be expected to have knowledge of blockchain technology, its workings, and its potential applications. They would also need to have programming skills and knowledge of software development. The hackathon could have a specific focus, such as developing a decentralized application for supply chain management or creating a blockchain-based identity verification system. The hackathon could be organized over a period of a few days or even weeks, allowing participants to ideate, collaborate, and develop their solutions. Participants could form teams, pitch their ideas, and receive mentorship and feedback from industry experts. The hackathon could culminate in a demo day, where participants showcase their solutions to a panel of judges and potential investors.',
            },
            {
                id: 2,
                name: 'Artificial Intelligence hackathon',
                description:
                    'Join our blockchain hackathon and collaborate with like-minded individuals to build innovative decentralized solutions that can transform industries and promote trustless transactions.',
                date: '2023-08-12',
                location: 'online',
                image: 'https://res.cloudinary.com/ideation/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_400/juj3fkm2jhkfasujeeny',
                price: 'Paid',
                time: '8pm',
                tags: ['ai'],
                details:
                    'Blockchain technology is a distributed ledger technology that enables secure and transparent transactions without the need for intermediaries. It has gained popularity due to its potential for creating decentralized, trustless, and tamper-proof systems. A blockchain hackathon would provide a platform for developers, entrepreneurs, and blockchain enthusiasts to collaborate, share knowledge, and build innovative blockchain-based solutions. Participants in a blockchain hackathon would be expected to have knowledge of blockchain technology, its workings, and its potential applications. They would also need to have programming skills and knowledge of software development. The hackathon could have a specific focus, such as developing a decentralized application for supply chain management or creating a blockchain-based identity verification system. The hackathon could be organized over a period of a few days or even weeks, allowing participants to ideate, collaborate, and develop their solutions. Participants could form teams, pitch their ideas, and receive mentorship and feedback from industry experts. The hackathon could culminate in a demo day, where participants showcase their solutions to a panel of judges and potential investors.',
            },
            {
                id: 3,
                name: 'Machine Learning: The future',
                description:
                    'Join our blockchain hackathon and collaborate with like-minded individuals to build innovative decentralized solutions that can transform industries and promote trustless transactions.',
                date: '2023-08-12',
                location: 'online',
                image: 'https://res.cloudinary.com/ideation/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_400/juj3fkm2jhkfasujeeny',
                price: 'Paid',
                time: '8pm',
                tags: ['ml'],
                details:
                    'Blockchain technology is a distributed ledger technology that enables secure and transparent transactions without the need for intermediaries. It has gained popularity due to its potential for creating decentralized, trustless, and tamper-proof systems. A blockchain hackathon would provide a platform for developers, entrepreneurs, and blockchain enthusiasts to collaborate, share knowledge, and build innovative blockchain-based solutions. Participants in a blockchain hackathon would be expected to have knowledge of blockchain technology, its workings, and its potential applications. They would also need to have programming skills and knowledge of software development. The hackathon could have a specific focus, such as developing a decentralized application for supply chain management or creating a blockchain-based identity verification system. The hackathon could be organized over a period of a few days or even weeks, allowing participants to ideate, collaborate, and develop their solutions. Participants could form teams, pitch their ideas, and receive mentorship and feedback from industry experts. The hackathon could culminate in a demo day, where participants showcase their solutions to a panel of judges and potential investors.',
            },
        ],
    );

    return (
        <div className="flex px-10%">
            <div className="flex flex-col items-center border-r border-l p-2 pr-6 w-4/12  bg-white">
                <Accordion
                    title="By Theme tags"
                    children={
                        <input
                            type="text"
                            placeholder="Eg,. ai, ml, blockchain"
                            className="border h-10 w-11/12 rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300"
                        />
                    }
                />
                <hr className="w-10/12 my-3" />
                <Accordion
                    title="By Date"
                    children={
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col flex-shrink-2 gap-1">
                                <label
                                    className="text-gray-500 text-sm"
                                    htmlFor=""
                                >
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="From"
                                    className="border h-10 w-56 rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300 "
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    className="text-gray-500 text-sm"
                                    htmlFor=""
                                >
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    name="To"
                                    className="border h-10 w-56 rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300"
                                />
                            </div>
                        </div>
                    }
                />
                <hr className="w-10/12 my-3" />
                <Accordion
                    title="By Price"
                    children={
                        <div className="flex gap-6 text-gray-500">
                            <div className="flex w-24 justify-between">
                                <input type="checkbox" />
                                <span>Paid entry</span>
                            </div>
                            <div className="flex w-24 justify-between">
                                <input type="checkbox" />
                                <span>Free entry</span>
                            </div>
                        </div>
                    }
                />
                <hr className="w-10/12 my-3 " />
            </div>
            <HackathonList data={hackathon} />
        </div>
    );
}

export default Filters;
