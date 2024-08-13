import styled from "@emotion/styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Card = styled.div`
    background-color: white;
    margin:30px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 8px;
    display:flex;
    align-items: center;
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
export default function Myridecard({ myride }) {
    return (
        <Card>
            <Info>
                <Time>{myride.shipment?.startDate} <Duration>------</Duration> {myride.shipment?.endDate}</Time>
                <Route>
                    <Location>{myride.pickupaddress}</Location>
                    <ArrowRightAltIcon style={{ margin: '0 5px' }} />
                    <Location>{myride.destinationaddress}</Location>
                </Route>
                <br />
                <hr style={{ border: '1px solid #ccc', margin: '10px', width: '80vh' }} />
                <br />
                <Driver>
                    <LocalShippingIcon />
                    <AccountCircleIcon style={{ paddingLeft: '20px' }} />
                    <Name>{myride.model?.username}</Name>
                </Driver>
            </Info>
            <Status>
                {myride.shipment?.status}
            </Status>
        </Card>
    );
}