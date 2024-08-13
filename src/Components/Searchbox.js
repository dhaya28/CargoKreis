import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from '@emotion/styled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBoxContainer = styled.form`
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  padding: 10px;
  background-color: white;
  padding-left: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Icon = styled.div`
  margin-right: 5px;
  color: #7e8b97;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchButton = styled.button`
  display:flex;
  align-items: center;
//   justify-content: center;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Searchbox = ({ setrides }) => {
  const [startingaddress, setStartingaddress] = useState('');
  const [destinationaddress, setDestinationaddress] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  
  const [rides, setRides] = useState([]);
  const handleSearch = async (event) => {
    // navigate('/selectride');
    event.preventDefault();
    const utcStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];
    try {
      const response = await axios.post('http://localhost:9000/truck/getshipmentdetail', {
          startingaddress,
          destinationaddress,
          startDate: utcStartDate     
          // startDate: startDate.toISOString().split('T')[0]     
      });
      console.log(response.data);
      navigate('/selectride', { state: { rides: response.data } });
    } catch (error) {
      console.error('Error fetching rides', error);
      alert("Error");
    }
  };

  return (
    <SearchBoxContainer onSubmit={handleSearch}>
      <InputGroup>
        <Icon><FaMapMarkerAlt /></Icon>
        <Input
          type="text"
          placeholder="Leaving from"
          value={startingaddress}
          onChange={(e) => setStartingaddress(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Icon><FaMapMarkerAlt /></Icon>
        <Input
          type="text"
          placeholder="Going to"
          value={destinationaddress}
          onChange={(e) => setDestinationaddress(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Icon><CalendarTodayIcon /></Icon>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          customInput={<Input placeholder="Today" />}
        />
      </InputGroup>
      <SearchButton >
        <SearchIcon />
        <span onClick={handleSearch}>Search</span>
      </SearchButton>
    </SearchBoxContainer>
  );
};

export default Searchbox;
