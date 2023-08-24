import React from 'react';
import ReservationBoard from './ReservationBoard';
import ReservationForm from './ReservationForm';

const App = () => {
  return (
    <div className="app">
      <h1>Stranica za rezervacije</h1>
      <ReservationBoard />
      <ReservationForm/>
      
    </div>
  );
};

export default App;
