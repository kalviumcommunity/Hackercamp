import React from 'react';

const HandleDay = ({ date, format }) => {
    const options = { weekday: format };
    const FormattedDay = new Date(date).toLocaleDateString('en-US', options);

    return(
    <div>
        <span>{FormattedDay}</span>
    </div>
    )
    
};

export default HandleDay;
