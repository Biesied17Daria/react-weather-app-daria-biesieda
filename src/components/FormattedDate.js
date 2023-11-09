import React from "react";

export default function FormattedDate(props) {
  const { date } = props;
  const day = date.toLocaleDateString('en-US', { weekday: 'long' });
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

  return (
    <div>
      {day} {time}
    </div>
  );
}
