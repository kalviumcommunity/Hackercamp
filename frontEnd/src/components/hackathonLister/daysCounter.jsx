import React from 'react';

const DaysDiff = ({ randomDate }) => {
    const currentDate = new Date();
    const providedDate = new Date(randomDate);

    const timeDiff = Math.abs(currentDate.getTime() - providedDate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return (
        <span className="relative bottom-1 ml-2 text-15 font-roboto font-semibold  text-blackish">
            {daysDiff} days to go
        </span>
    );
};

export default DaysDiff;
