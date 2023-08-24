import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationBoard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/user/reserve");
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    }

    fetchReservations();
  }, []);
  return (
    <div className="reservation-board">
      <h2>Ploča rezervacija</h2>
      <table>
        <thead>
          <tr>
            <th>Korisnik</th>
            <th>Sat početka</th>
            <th>Sat završetka</th>
            <th>Usluga</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.username}</td>
              <td>{reservation.start}</td>
              <td>{reservation.end}</td>
              <td>{reservation.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationBoard;
