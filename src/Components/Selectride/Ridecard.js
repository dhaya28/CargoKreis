import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';
import { MdFlashOn } from 'react-icons/md';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Time = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const Route = styled.div`
  display: flex;
  margin-top: 5px;
`;
const Location = styled.span`
  margin-right: 10px;
`;

const Duration = styled.span`
  color: #aaa;
  font-size: 0.8em;
`;

const Driver = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #ffa500;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  // margin-left: 10px;
  margin-top:10px;
  color: #00aaff;
  
`;

const Price = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const RideCard = ({ ride }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Info>
        <Time>{ride.startDate} <Duration>------</Duration> {ride.endDate}</Time>
        <Route>
          <Location>{ride.startingaddress}</Location>
          <ArrowRightAltIcon style={{ margin: '0 5px' }} />
          <Location>{ride.destinationaddress}</Location>
        </Route>
        <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh' }} />
        <Driver>
          <LocalShippingIcon />
          <AccountCircleIcon style={{ paddingLeft: '20px' }} />
          {/* <Name>{ride.model.username}</Name> */}
          <Name>{ride.model ? ride.model.username : "Unknown Driver"}</Name>
          <Rating>
            <FaStar style={{ paddingLeft: '20px' }} />
            {/* {ride.driver.rating} */}
            4.2
          </Rating>
        </Driver>
        <Icons>
          {ride.presentgoodstype && `Present Goods ${ride.presentgoodstype}`}<br/>
          {ride.availablegoodsweight && `Max. ${ride.availablegoodsweight} tons.`}<br />
          {ride.availablespace && `Max. ${ride.availablespace} SqFt.`}
        </Icons>
      </Info>
      <Price>
        ₹{ride.price}<br/>
        <button style={{ width: '60px', height: '30px', padding: '5px', fontSize: '1rem' }} onClick={() => navigate('/trip', { state: { ride: ride } })}>Book</button>
      </Price>
    </Card>
  );
};

export default RideCard;
