import React from 'react';
import HackathonCard from '../hackathonLister/hackathonCard';

const HackathonList = ({ data }) => {
    return (
        <div className="ml-10 w-4/5 pl-9">
            {data.map((hackathonData) => (
                <HackathonCard
                    key={hackathonData._id}
                    hackathon={hackathonData}
                />
            ))}
        </div>
    );
};
export default HackathonList;
