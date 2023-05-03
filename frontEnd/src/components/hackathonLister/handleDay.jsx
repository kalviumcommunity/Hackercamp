import React from 'react';

const HandleDay = ({ date, format }) => {
    const options = { weekday: format };
    const formattedDay = new Date(date).toLocaleDateString('en-US', options);

    return(
    <div>
        <span>{formattedDay}</span>
    </div>
    )
    
};

export default HandleDay;
