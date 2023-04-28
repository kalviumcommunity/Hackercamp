import React, { useState } from 'react';
import HackathonCard from '../hackathonLister/hackathonCard';

const HackathonList = () => {
    const [hackathons, setHackathons] = useState([
        {
            id: 1,
            name: 'The Next Gen Hackathon',
            description: 'it is a Hackathon',
            date: '2023-05-01',
            location: 'online',
            image: 'https://res.cloudinary.com/ideation/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_400/juj3fkm2jhkfasujeeny',
            Price: 'Free',
            time: '8pm',
            tags: ['AI'],
        },
        {
            id: 2,
            name: 'BlockChain Summit 2023',
            description: 'it is a Hackathon',
            date: '2023-05-01',
            location: 'online',
            image: 'https://res.cloudinary.com/ideation/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_400/juj3fkm2jhkfasujeeny',
            Price: 'Free',
            time: '8pm',
            tags: ['blockchain'],
        },
        {
            id: 3,
            name: 'BlockChain Summit 2023',
            description: 'it is a Hackathon',
            date: '2023-05-01',
            location: 'online',
            image: 'https://res.cloudinary.com/ideation/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_400/juj3fkm2jhkfasujeeny',
            Price: 'Free',
            time: '8pm',
            tags: ['blockchain', 'web3.0'],
        },
    ]);

    return (
        <div className="ml-10 w-11/12">
           <HackathonCard data={hackathons}/>
        </div>
    );
};

export default HackathonList;
