import { useState } from "react";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import PolicyIcon from '@mui/icons-material/Policy';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import styled from '@emotion/styled';
import Navbar from "./D_Navbar";
import Footer from "../Components/Footers";
import axios from "axios";
import img from '../Assets/vehicleregister.jpg';
import { useNavigate } from "react-router-dom";

const SearchBoxContainer = styled.div`
//   display: flex;
//   margin-left:400px;
  width:75vh;
  align-items: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  padding: 20px;
  background-color: white;
  padding-left: 100px;
`;

const InputGroup = styled.div`
  margin:20px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Icon = styled.div`
  margin-right: 5px;
  color: #7e8b97;
`;

const Input = styled.input`
//   border: none;
//   outline: none;
width:50vh;
  height:30px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius:20px;
  border-bottom:none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchButton = styled.button`
  margin-left:190px;
  display:flex;
  align-items: center;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default function D_Vehicleregistration() {
    const [truckno, setTruckno] = useState("");
    const [chasisno, setChasisno] = useState("");
    const [insuranceno, setInsuranceno] = useState("");
    const [ownername, setOwnername] = useState("");
    const [ownermno, setOwnermno] = useState("");
    const navigate=useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        const loginId = sessionStorage.getItem('id');
        try {
            const response = await axios.post('http://localhost:9000/truck/registervehicle', {
                truckno,
                chasisno,
                insuranceno,
                ownername,
                ownermno,
                loginId  // Pass loginId to backend
            });
            console.log("Vehicle registered successfully:", response.data);
            navigate('D_home')
            alert("Vehicle registered successfully");
        } catch (error) {
            console.error('Vehicle registration failed:', error.response ? error.response.data : error.message);
            alert("Vehicle registration failed");
        }
    };


    return (
        <div>
            <Navbar />
                    <br />
            <div style={{display:'flex'}}>
                <div style={{flex:'80vh',marginLeft:'20vh'}}>
                    <img src={img} alt="a"/>
                </div>
                <div style={{flex:'120vh'}}>
                    <h1 style={{ marginLeft: '25vh', color: 'green' }}>Register Your Vehicle</h1>
                    <br />
                    <SearchBoxContainer>
                        <form onSubmit={handlesubmit}>
                            <InputGroup>
                                <Icon><AirportShuttleIcon /></Icon>
                                <Input
                                    type="text"
                                    placeholder="Truck Registration No."
                                    value={truckno}
                                    onChange={(e) => setTruckno(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Icon><LocalShippingIcon /></Icon>
                                <Input
                                    type="text"
                                    placeholder="Truck Chasis No."
                                    value={chasisno}
                                    onChange={(e) => setChasisno(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Icon><PolicyIcon /></Icon>
                                <Input
                                    type="text"
                                    placeholder="Insurance Policy No."
                                    value={ownername}
                                    onChange={(e) => setOwnername(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Icon><PersonIcon /></Icon>
                                <Input
                                    type="text"
                                    placeholder="Owner Name"
                                    value={ownermno}
                                    onChange={(e) => setOwnermno(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Icon><PhoneIcon /></Icon>
                                <Input
                                    type="text"
                                    placeholder="Owner MNo."
                                    value={insuranceno}
                                    onChange={(e) => setInsuranceno(e.target.value)}
                                />
                            </InputGroup>
                            {/* <InputGroup style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <label style={{ marginLeft: '10px' }}>Truck Image</label>
                        <Input
                            type="file"
                            style={{
                                marginTop: '1px',
                                boxShadow: 'none',
                                border: 'none',
                                outline: 'none'
                            }}
                            onChange={(e) => setFiles(e.target.files)}
                        />
                    </InputGroup> */}
                            <SearchButton>
                                <button style={{ padding: '5px 10px', fontSize: '16px' }}>
                                    {/* <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Submit</Link> */}
                                    Submit
                                </button>
                            </SearchButton>
                        </form>
                    </SearchBoxContainer>
                </div>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
}