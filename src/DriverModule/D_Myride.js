import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footers";
import Navbar from "./D_Navbar";
import styled from "@emotion/styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect, useState } from "react";
import axios from "axios";

const Card = styled.div`
    background-color: white;
    margin:30px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 8px;
    display:flex;
    align-items: center;
    width:130vh;
    margin-left:30vh;
`;
const Status = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    color:green;
    margin-left:100px;
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

export default function D_Myride() {
    const navigate = useNavigate();
    const [myrides,setMyrides]=useState([]);
    const model_id = sessionStorage.getItem('id');
    useEffect(() => {
        const fetchRides = async () => {
            try {
                if (model_id) {
                    console.log(model_id);
                    const response = await axios.post('http://localhost:9000/truck/getshipmentdetails',  {model_id} );
                    setMyrides(response.data);
                    console.log(myrides);
                }
            } catch (error) {
                console.error('Error fetching rides:', error);
            }
        };

        fetchRides();
    }, [model_id]);
    return (
        <div>
            <Navbar />
            <div>
                {myrides.map((myride, index) => (
                    <div key={index} onClick={() => navigate(`/D_ridedetail`,{ state: { myride:myride } })}>
                        <Card>
                            <Info>
                                <Time>{myride.startDate} <Duration>------</Duration> {myride.endDate}</Time>
                                <Route>
                                    <Location>{myride.startingaddress}</Location>
                                    <ArrowRightAltIcon style={{ margin: '0 5px' }} />
                                    <Location>{myride.destinationaddress}</Location>
                                </Route>
                                <br />
                                <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh' }} />
                                <br />
                                {/* <Driver>
                                    <AccountCircleIcon style={{ paddingLeft: '20px' }} />
                                    <Name>{myride.model.username}</Name>
                                </Driver> */}
                                    <p>Available weight {myride.availablegoodsweight} Tons<br/>Available Space {myride.availablespace} Sqft.</p>
                            </Info>
                            <Status>
                                {myride.status}
                            </Status>
                        </Card>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}