import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './D_Navbar';
import Footer from '../Components/Footers';
import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
const myrides = [
    {
        id: 1,
        departureTime: '11:00',
        arrivalTime: '21:30',
        departure: 'Mumbai',
        arrival: 'Bengaluru',
        duration: '10h30m',
        drivername: 'Arunprakash',
        status: 'Yet to Start',
    },
    {
        id: 2,
        departureTime: '11:00',
        arrivalTime: '21:30',
        departure: 'Mumbai',
        arrival: 'Bengaluru',
        duration: '10h30m',
        drivername: 'Arunprakash',
        status: 'In Transit',
    },
    {
        id: 3,
        departureTime: '11:00',
        arrivalTime: '21:30',
        departure: 'Mumbai',
        arrival: 'Bengaluru',
        duration: '10h30m',
        drivername: 'Arunprakash',
        status: 'Delivered',
    },
];

const Card = styled.div`
background-color: white;
margin: 30px;
padding: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
border-radius: 8px;
align-items: center;
width: 80vh;
`;
const Data = styled.td`
    padding:7px;
`;

export default function D_Ridedetails() {
    const location = useLocation();
    const { myride } = location.state || {};
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [status, setStatus] = useState(myride?.status || '');
    const [ridedetails, setRidedetails] = useState([]);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
    useEffect(() => {
        const findride = async () => {
            const shipmentId = myride ? myride.shipmentId : null;
            console.log(shipmentId);
            if (shipmentId) {
                try {
                    const response = await axios.post(`http://localhost:9000/truck/findridebyid`, { shipmentId });
                    console.log("Ride fetched", response.data);
                    setRidedetails(response.data);
                } catch (error) {
                    console.error("Error while fetching", error);
                }
            }
        };
        findride();
    }, [myride]);

    const updateStatus = async () => {
        try {
            const response = await axios.post('http://localhost:9000/truck/updateShipmentStatus', {
                shipmentId: myride.shipmentId,
                status: status,
            });
            if (response.status === 200) {
                alert('Status updated successfully');
            } else {
                alert('Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
            alert('An error occurred while updating the status');
        }
    };

    return (
        <div>
            <Navbar />
            <Card style={{ margin: '20px', marginLeft: '400px' }}>

                {myride ? (
                    <div style={{ paddingLeft: '95px' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <p><strong>Departure:</strong> {myride.startingaddress}</p>
                                <p><strong>Departure Date:</strong> {myride.startDate}</p>
                            </div>
                            <div style={{ paddingLeft: '20px' }}>
                                <p><strong>Arrival:</strong> {myride.destinationaddress}</p>
                                <p><strong>Arrival Date:</strong> {myride.endDate}</p>
                            </div>
                        </div>
                        <p>
                            <strong>Status:</strong>
                            <select value={status} onChange={handleStatusChange}>
                                <option value="Yet to Start">Yet to Start</option>
                                <option value="In Transit">In Transit</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </p>
                        <button style={{ padding: '10px', fontSize: '1rem' }} onClick={updateStatus}>Update</button>
                        <br /><br/>
                        <hr style={{ border: '1px solid #ccc', width: '58vh', margin: '10px', marginLeft: "-10px" }} />
                        {ridedetails.ride_id ? (
                            <table style={{ marginLeft: "-9px" }}>
                                <tr>
                                    <Data><strong>Goods Type:</strong></Data>
                                    <Data>{ridedetails.goodstype}</Data>
                                </tr>
                                <tr>
                                    <Data><strong>Goods Weight:</strong></Data>
                                    <Data>{ridedetails.goodweight} Tons</Data>
                                </tr>
                                <tr>
                                    <Data><strong>Pickup Address:</strong></Data>
                                    <Data>{ridedetails.pickupaddress}</Data>
                                </tr>
                                <tr>
                                    <Data><strong>Destination Address:</strong></Data>
                                    <Data>{ridedetails.destinationaddress}</Data>
                                </tr>
                                <tr>
                                    <Data><strong>Sender Name:</strong></Data>
                                    <Data>{ridedetails.model?.username}</Data>
                                </tr>
                                <tr>
                                    <Data><strong>Sender Phone:</strong></Data>
                                    <Data>{ridedetails.model?.phoneno}</Data>
                                </tr>
                                <tr>
                                    <Data><strong>Receiver Name:</strong></Data>
                                    <Data>{ridedetails.receivername}</Data>
                                </tr>
                                <tr>
                                    <Data><strong>Receiver Phone:</strong></Data>
                                    <Data>{ridedetails.receiverphno}</Data>
                                </tr>
                            </table>
                        ) : (
                            <p>No Bookings</p>
                        )}

                    </div>
                ) : (
                    <p>Ride not found</p>
                )}
            </Card>
            {/* <Card style={{ margin: '20px', marginLeft: '400px' }}>
                <h3>Problem</h3>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px' }}>
                                <label>Description</label>
                            </td>
                            <td style={{ padding: '10px' }}>
                                <input type='text' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>
                                <label>Location</label>
                            </td>
                            <td style={{ padding: '10px' }}>
                                <input type='text' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>
                                <label>Time to Solve</label>
                            </td>
                            <td style={{ padding: '10px' }}>
                                <input type='text' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                            </td>
                        </tr>
                    </tbody>
                    <button style={{ padding: '10px', fontSize: '1rem' }}>Submit</button>
                </table>
            </Card> */}
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
                <br />
                <hr style={{ border: '1px solid #ccc', width: '78vh', margin: '10px' }} />
                <br />
                <div>
                    <h3>Feedback</h3>
                    <textarea
                        placeholder="Enter your feedback"
                        style={{
                            width: '70vh',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            margin: '10px',
                            marginBottom: '20px',
                        }}
                    />
                    <button style={{ padding: '10px', fontSize: '1rem' }}>Submit</button>
                </div>
            </Card>
            <Footer />
        </div>
    );
}
