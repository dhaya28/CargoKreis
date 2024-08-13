import React from 'react';
import styled from '@emotion/styled';
import FilterComponent from './Filtercomponent';
import RideCard from './Ridecard';

const rides = [
  {
    departureTime: '17:00',
    arrivalTime: '21:30',
    departure: 'Edappadi',
    arrival: 'Bengaluru',
    duration: '4h30m',
    driver: {
      name: 'Arunprakash',
      rating: 4.8,
    },
    instantBooking: true,
    maxBackSeats: 2,
    price: 500.00,
  },
  {
    departureTime: '17:00',
    arrivalTime: '21:00',
    departure: 'Pallipalayam',
    arrival: 'Bengaluru',
    duration: '4h00m',
    driver: {
      name: 'Balaji',
      rating: 4.7,
    },
    instantBooking: false,
    maxBackSeats: 2,
    price: 510.00,
  },
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RidesContainer = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const MainComponent = () => {
  return (
    <Container>
      <FilterComponent />
      <RidesContainer>
        {rides.map((ride, index) => (
          <RideCard key={index} ride={ride} />
        ))}
      </RidesContainer>
    </Container>
  );
};

export default MainComponent;
