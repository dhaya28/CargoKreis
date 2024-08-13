import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';
import CategoryIcon from '@mui/icons-material/Category';
import ScaleIcon from '@mui/icons-material/Scale';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import axios from 'axios';

const SearchBoxContainer = styled.div`
//   display: flex;
  margin-left:400px;
  width:75vh;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
  margin-left:200px;
  display:flex;
  align-items: center;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Searchboxtrip = ({ shipmentId }) => {
    const [goodstype, setGoodstype] = useState('');
    const [goodsweight, setGoodsweight] = useState();
    const [pickupaddress, setPickupaddress] = useState('');
    const [destinationaddress, setDestinationaddress] = useState('');
    const [receivername, setReceivername] = useState('');
    const [receiverphno, setReceiverphno] = useState('');
    const loginId = sessionStorage.getItem('id');
    // const [files, setFiles] = useState(null);
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(goodstype,goodsweight,pickupaddress,destinationaddress,receivername,receiverphno,loginId,shipmentId);
        await axios.post(`http://localhost:9000/truck/findride`,{goodstype,goodsweight,pickupaddress,destinationaddress,receivername,receiverphno,loginId,shipmentId})
        .then(response=>{
            console.log("Data Submitted",response.data);
            alert("Successful Wating for confirmation");
        })
        .catch(error=>{
            console.error("Error",error);
            alert("error");
        })
    }

    return (
        <SearchBoxContainer>
            <form onSubmit={handlesubmit}>
                <InputGroup>
                    <Icon><CategoryIcon /></Icon>
                    <Input
                        type="text"
                        placeholder="Goods Type"
                        value={goodstype}
                        onChange={(e) => setGoodstype(e.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <Icon><ScaleIcon /></Icon>
                    <Input
                        type="number"
                        placeholder="Goods Weight (Tons)"
                        value={goodsweight}
                        onChange={(e) => setGoodsweight(e.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <Icon><FmdGoodIcon /></Icon>
                    <Input
                        type="text"
                        placeholder="Pickup Address"
                        value={pickupaddress}
                        onChange={(e) => setPickupaddress(e.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <Icon><FmdGoodIcon /></Icon>
                    <Input
                        type="text"
                        placeholder="Destination Address"
                        value={destinationaddress}
                        onChange={(e) => setDestinationaddress(e.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <Icon><PersonIcon /></Icon>
                    <Input
                        type="text"
                        placeholder="Receiver Name"
                        value={receivername}
                        onChange={(e) => setReceivername(e.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <Icon><PhoneIcon /></Icon>
                    <Input
                        type="text"
                        placeholder="Receiver Ph No."
                        value={receiverphno}
                        onChange={(e) => setReceiverphno(e.target.value)}
                    />
                </InputGroup>
                {/* <InputGroup style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ marginLeft: '10px' }}>Goods Image</label>
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
    );
};

export default Searchboxtrip;
