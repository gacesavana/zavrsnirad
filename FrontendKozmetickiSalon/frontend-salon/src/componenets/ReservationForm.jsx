import React, { useState } from 'react';
import ServiceSelector from './ServiceSelector';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // Dodano
import TimePicker from 'react-time-picker'; // Dodano
import 'react-datepicker/dist/react-datepicker.css'; // Dodano
import 'react-time-picker/dist/TimePicker.css'; // Dodano

function ReservationForm() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(''); //DODANO
  const [selectedDate, setSelectedDate] = useState(null); //DODANO
  const [endTime, setEndTime] = useState(''); // Dodano

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  // Izračunajte kraj rezervacije na temelju početka i trajanja
  const calculateEndTime = () => {
    if (selectedService && selectedTime) {
      const [hours, minutes] = selectedTime.split(':');
      const durationInMinutes = selectedService.duration;
      
      let endTimeHours = parseInt(hours, 10);
      let endTimeMinutes = parseInt(minutes, 10) + durationInMinutes;

      endTimeHours += Math.floor(endTimeMinutes / 60);
      endTimeMinutes %= 60;

      setEndTime(`${endTimeHours.toString().padStart(2, '0')}:${endTimeMinutes.toString().padStart(2, '0')}`);
    }
  };

  const handleReserve = async () => {
    if (selectedService && selectedDate && selectedTime && endTime) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/user/reserve", {
          serviceId: selectedService.typeid,
          date: selectedDate,
          time: selectedTime,
          
          endTime: endTime,
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
      />
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} /> {/* Dodano */}
      <TimePicker value={selectedTime} onChange={time => {setSelectedTime(time); calculateEndTime();}} /> {/* Dodano */}
      {selectedService && selectedDate && selectedTime && (
      
      <div>
      
      <p>End Time: {endTime}</p>
      <button onClick={handleReserve}>Reserve</button>
      </div>
      )}
    </div>
  );
}

export default ReservationForm;
