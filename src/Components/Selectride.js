import React from 'react';
import Filter from "./Filter";
import Navbar from "./Navbar";
import RideCard from "./Selectride/Ridecard";
import { useLocation } from 'react-router-dom';

function Selectride() {
  const location = useLocation();
  const rides = location.state?.rides || [];

  return (
    <div>
      <Navbar />
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10%' }}>
        <Filter />
        <div className="hide-scrollbar" style={{ marginRight: '10%', width: '100vh', height: '80vh', overflowY: 'auto' }}>
          {rides.length > 0 ? (
            rides.map((ride, index) => (
              <RideCard key={index} ride={ride} />
            ))
          ) : (
            <p>No rides found.</p>  
          )}
        </div>
      </div>
    </div>
  );
}

export default Selectride;
