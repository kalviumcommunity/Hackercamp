import React, { useState } from 'react';
import HackathonCard from '../hackathonLister/hackathonCard';
const HackathonList = ({ data }) => {
    return (
        <div className="ml-10 w-4/5">
            {data.map((hackathonData) => (
                <HackathonCard
                    key={hackathonData.id}
                    hackathon={hackathonData}
                />
            ))}
        </div>
    );
};
export default HackathonList;
