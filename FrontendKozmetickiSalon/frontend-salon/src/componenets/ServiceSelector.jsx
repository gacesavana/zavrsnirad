import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ServiceSelector({ onServiceSelect }) {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/user/types"); // Promijenite endpoint prema vašem backendu
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }

    fetchServices();
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    onServiceSelect(service);
  };

  return (
    <div className="service-selector">
      <h3>Select a Service</h3>
      <ul>
        {services.map((service) => (
          <li
            key={service.typeid}
            onClick={() => handleServiceSelect(service)}
            className={selectedService === service ? 'selected' : ''}
          >
            {service.type_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceSelector;
