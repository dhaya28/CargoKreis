import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';
import CategoryIcon from '@mui/icons-material/Category';
import ScaleIcon from '@mui/icons-material/Scale';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Navbar from './D_Navbar';
import Footer from '../Components/Footers';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import img from '../Assets/offerride.jpg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
//   background: #f4f8f8;
min-height: 100vh;
`;

const SearchBoxContainer = styled.div`
  margin-left: 20px;
  margin-top:-30px;
  width: 90vh;
  max-width: 900px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const IconLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.div`
  margin-right: 10px;
  color: #7e8b97; /* Dark green */
`;

const Input = styled.input`
  width: 270px;
  height: 40px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  padding: 0 12px;
  background-color: #ffffff;
  color: #7e8b97;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #00796b;
    box-shadow: 0 0 4px rgba(0, 121, 107, 0.2);
  }
`;

const Label = styled.label`
  color: #7e8b97; /* Dark green */
  font-size: 14px;
  font-weight: 500;
`;

const SearchButton = styled.button`
  color: white;
//   background-color: green; /* Dark green */
  background-color: #009
  96b; /* Dark green */
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-top: 20px;
  width: 94.5%;

  &:hover {
    background-color: #004d40; /* Even darker green */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Offerride = () => {
    const [startingaddress, setStartingaddress] = useState('');
    const [destinationaddress, setDestinationaddress] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [presentgoodstype, setPresentgoodstype] = useState('');
    const [availablegoodsweight, setAvailablegoodsweight] = useState('');
    const [availablespace, setAvailablespace] = useState('');
    const [price, setPrice] = useState();
    const [status, setStatus] = useState('Yet to Start');
    const navigate=useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const loginId = sessionStorage.getItem('id');
        const data = {
            startingaddress,
            destinationaddress,
            startDate,
            endDate,
            presentgoodstype,
            availablegoodsweight,
            availablespace,
            loginId,
            price,
            status
        };
        // Handle form submission, e.g., send data to the server
        console.log(data);

        axios.post('http://localhost:9000/truck/shipment', data)
            .then(response => {
                console.log('Data submitted successfully:', response.data);
                navigate('/D_myride');
                alert("Ride added successfully");
            })
            .catch(error => {
                console.error('There was an error submitting the data!', error);
            });
    };

    return (
        <Container>
            <Navbar /><br/>
            <div style={{display:'flex'}}>
                <div style={{flex:'50%'}}>
                    <div style={{ width: '100vh', textAlign: 'center',marginLeft:'10px',color:'green'}}>
                        <h1>Share your route, and let customers book the extra space in your truck!</h1>
                    </div>
                    <SearchBoxContainer>
                        <form onSubmit={handlesubmit} >
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: '50%' }}>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><FmdGoodIcon /></Icon>
                                            <Label>Starting Address</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="text"
                                            value={startingaddress}
                                            onChange={(e) => setStartingaddress(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><CalendarTodayIcon /></Icon>
                                            <Label>Start Date</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><CategoryIcon /></Icon>
                                            <Label>Present Goods Type</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="text"
                                            value={presentgoodstype}
                                            onChange={(e) => setPresentgoodstype(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><AspectRatioIcon /></Icon>
                                            <Label>Available Space (Sqft) approx.</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="number"
                                            value={availablespace}
                                            onChange={(e) => setAvailablespace(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                                <div style={{ flex: '50%' }}>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><FmdGoodIcon /></Icon>
                                            <Label>Destination Address</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="text"
                                            value={destinationaddress}
                                            onChange={(e) => setDestinationaddress(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><CalendarTodayIcon /></Icon>
                                            <Label>End Date</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><ScaleIcon /></Icon>
                                            <Label>Available Goods Weight (Tons)</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="number"
                                            value={availablegoodsweight}
                                            onChange={(e) => setAvailablegoodsweight(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <IconLabelWrapper>
                                            <Icon><CurrencyRupeeIcon /></Icon>
                                            <Label>Price</Label>
                                        </IconLabelWrapper>
                                        <Input
                                            type="number"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <SearchButton type="submit">
                                Submit
                            </SearchButton>
                        </form>
                    </SearchBoxContainer>
                </div>
                <div style={{flex:'50%'}}>
                    <img src={img} alt='a' style={{height:'73vh'}}></img>
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default Offerride;
