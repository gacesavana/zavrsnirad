import React, { useState } from 'react';
import ServiceSelector from './ServiceSelector';
import axios from 'axios';

function ReservationForm() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  

  const handleReserve = async () => {
    if (selectedService && selectedTime) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/user/resreva", {
          serviceId: selectedService.typeid,
          startTime: selectedTime
          // Dodajte ostale potrebne podatke za rezervaciju
        });

        console.log('Reservation submitted:', response.data);
      } catch (error) {
        console.error('Error submitting reservation:', error);
      }
    }
  };

  return (
    <div className="reservation-form">
      <h2>Make a Reservation</h2>
      <ServiceSelector 
       onServiceSelect={handleServiceSelect} 
       onTimeSelect={handleTimeSelect}/>
      {selectedService && selectedTime &&(
      <button onClick={handleReserve}>Reserve</button>
      )}
    </div>
  );
}

export default ReservationForm;
