import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footers';
import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';

const Card = styled.div`
    background-color: white;
    margin:30px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 8px;
    align-items: center;
    width:80vh;
`;
export default function Ridedetails() {
    const location=useLocation();
    const{myride}=location.state||{};
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div>
            <Navbar />
            <Card style={{ margin: '20px', marginLeft: '400px' }}>
                {myride ? (
                    <div style={{ paddingLeft: '100px' }}>
                        {/* <h2>Ride Details</h2> */}
                        <div style={{ display: 'flex' }}>
                            <div>
                                <p><strong>Departure:</strong> {myride.pickupaddress}</p>
                                <p><strong>Departure Time:</strong> {myride.shipment?.startDate}</p>
                            </div>
                            <div style={{ paddingLeft: '20px' }}>
                                <p><strong>Arrival:</strong> {myride.destinationaddress}</p>
                                <p><strong>Arrival Time:</strong> {myride.shipment?.endDate}</p>
                            </div>
                        </div>
                        <hr style={{ border: '1px solid #ccc', width: '55.5vh', margin: '10px',marginLeft:'0px' }} />
                        <p><strong>Driver Name:</strong> {myride.model?.username}</p>
                        <p><strong>Driver MNo.:</strong> {myride.model?.phoneno} </p>
                        <p><strong>Receiver Name:</strong> {myride.receivername}</p>
                        <p><strong>Receiver MNo.:</strong> {myride.receiverphno} </p>
                        <p><strong>Status:</strong> {myride.shipment?.status}</p>
                    </div>
                ) : (
                    <p>Ride not found</p>
                )}
            </Card>
            <Card style={{ margin: '20px', marginLeft: '400px' }}>
                <div>
                    <h3>Rate this ride</h3>
                    <div style={{ display: 'flex' }}>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                        style={{ display: 'none' }}
                                    />
                                    <FaStar
                                        size={30}
                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        // color={ratingValue<=rating ? "#ffc107" : "#e4e5e9"} 
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </label>
                            );
                        })}
                    </div>
                    {rating > 0 && <p>Rating: {rating} star(s)</p>}
                </div>
                <br/>
                <hr style={{ border: '1px solid #ccc', width: '78vh', margin: '10px' }} />
                <br/>
                <div>
                    <h3>Feedback</h3>
                    <textarea 
                        placeholder="Enter your feedback"
                        style={{
                            width:'70vh',
                            padding:'10px',
                            border:'1px solid #ccc',
                            borderRadius:'4px',
                            margin:'10px',
                            marginBottom:'20px',
                        }}
                    />
                    <button style={{padding:'10px',fontSize:'1rem'}}>Submit</button>
                </div>
            </Card>
            <Footer />
        </div>
    );
}