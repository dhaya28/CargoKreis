import { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../Assets/bg.jpg';

function Login() {
    const[username,setUsername]=useState('');  
    const[password,setPassword]=useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            console.log("Enter correct credentials");
        } else {
            try {
                const response = await axios.post('http://localhost:9000/truck/login', { username, password });
                const userType = response.data.usertype;
                console.log(userType);
                
                const id = response.data.id;
                console.log(id);

                sessionStorage.setItem('id',id);

                if (userType === 'customer') {
                    navigate('/');
                } else if (userType === 'driver') {
                    navigate('/D_home');
                }
            } catch (error) {
                console.error('Login failed:', error.response ? error.response.data : error.message);
                alert("Enter correct credentials");
            }
        }
    }
    return (
        <div style={{ backgroundImage:`url(${img})`,height:'100vh',backgroundSize:'cover',backgroundPosition:'center' }}>
            
            <div className="App">
                <div className='login' style={{ backgroundColor: 'rgb(238, 254, 234)',marginLeft:'85vh' }}>
                    <h2>Login</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <lable>Username</lable>
                        <input 
                            type='text'
                            onChange={(e)=>setUsername(e.target.value)}
                            >
                        </input><br /><br />
                        <lable>Password</lable>
                        <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                        <br /><br />
                        <button className='btn'>Log in</button>
                    </form>
                    <br></br>
                    <div>
                    Don't have an account?
                    {/* Sign up */}
                    
                    <a href='/signup' style={{textDecoration:'none',cursor:'pointer'}}>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;