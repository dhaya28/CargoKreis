import Footer from "./Footers";
import Navbar from "./Navbar";
import Searchboxtrip from "./SearchboxTrip";
import styled from '@emotion/styled';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { FaStar} from 'react-icons/fa';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from "react-router-dom";
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
const Price = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 380px;
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

export default function Trip() {
  const location = useLocation();
  const ride = location.state?.ride || [];
    return (
        <div>
            <Navbar />
            <br />
            <Searchboxtrip shipmentId={ride.shipmentId}/>
            <br /><br/>
            <br /><br/>
            <div style={{marginLeft:'58vh',width:'90vh'}}>
                <Time>{ride.startDate}<Duration>------</Duration>{ride.endDate}</Time>
                <br />
                <Route>
                    <Location>{ride.startingaddress}</Location>
                    <ArrowRightAltIcon style={{ margin: '0 5px' }} />
                    <Location>{ride.destinationaddress}</Location>
                </Route>
                <br />
                <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh',marginLeft:'0px' }} />
                <br />
                <div style={{ display: 'flex' }}>
                    Price Ton/KM
                    <Price>₹{ride.price}</Price>
                </div>
                <br />
                <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh',marginLeft:'0px' }} />
                <br />
                <Driver>
                    <AccountCircleIcon style={{ paddingLeft: '20px' }} />
                    <Name>{ride.model.username}</Name>
                    <Rating>
                        <FaStar style={{ paddingLeft: '20px' }} />
                        4.4
                    </Rating>
                </Driver>
                <br />
                <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh',marginLeft:'0px' }} />
                <br />
                <div style={{color:'rgba(32, 31, 31, 0.5)',lineHeight:'40px'}}>
                {ride.presentgoodstype && `Present Goods : ${ride.presentgoodstype}`}<br/>
                    Available Space : {ride.availablespace} SqFt.<br/>
                    Available Weight : {ride.availablegoodsweight} Tons.<br/>
                    Ensure all cargo is securely fastened<br />
                    Fragile items must be properly labeled and packed<br />
                    No oversized items without prior approval<br />
                    All items must be documented on the manifest<br />
                </div>
                <br />
                <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh',marginLeft:'0px' }} />
                <br />
                <div style={{color:'rgba(32, 31, 31, 0.5)',lineHeight:'40px'}}>
                Volvo FH16 — Midnight Blue
                <br/>
                <br/>
                </div>
            </div>
            <Footer />
        </div>
    );
}