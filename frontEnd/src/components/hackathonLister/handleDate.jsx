import React from 'react'

function HandleDate({date, format}) {
    const options = {month:format}
    const formattedMonth = new Date(date).toLocaleDateString("en-US",options)
    let day = new Date(date).getDate()
    day = day < 10 ? '0'+day: day

  return (
      <div>
          <span>{formattedMonth}</span>
          <span className='pl-1'>{day}</span>
      </div>
  );
}

export default HandleDate