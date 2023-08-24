import React, { useState } from 'react';

function TimeSelector({ onSelect }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onSelect(time);
  };

  return (
    <div className="time-selector">
      <h3>Select a Time</h3>
      {/* Renderiranje opcija vremena */}
    </div>
  );
}

export default TimeSelector;
