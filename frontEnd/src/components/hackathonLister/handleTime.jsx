import React from 'react'

function HandleTime({time}) {
  var date = new Date(time);

  var hours = date.getHours();
  var minutes = date.getMinutes();

  var period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  var formattedTime =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ' ' +
      period;
  return (
      <div>
          <span>{formattedTime}</span>
      </div>
  );
}

export default HandleTime