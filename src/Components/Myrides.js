import { useNavigate } from "react-router-dom";
import Footer from "./Footers";
import Myridecard from "./Myridecard";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Myrides() {
    const navigate = useNavigate();
    const [myrides,setMyrides]=useState([]);
    const model_id=sessionStorage.getItem('id');
    useEffect(()=>{
        const getfindridedetails=()=>{
            axios.post(`http://localhost:9000/truck/getfindridedetails`,{model_id})
            .then(response=>{
                setMyrides(response.data);
                console.log("successful",response.data);
            })
            .catch(error=>{
                console.error("error :",error);
            })
        }
        getfindridedetails();
    },[])
    return (
        <div>
            <Navbar />
            <div style={{ width: '140vh', marginLeft: '225px' }}>
                {myrides.map((myride, index) => (
                    <div key={index} onClick={() => navigate(`/ridedetail`,{state:{myride:myride}})}>
                        <Myridecard myride={myride} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}