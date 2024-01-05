
import { useState } from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import '../App.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(false);

    const history = useNavigate();

    const submitForm = () => {
        if (username === "User Name" && password === 'Password') {
            history('/nurse')
        }
        else {
            setMsg(true);

        }
    }

    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div className='login-nurse-container' style={{ display: "flex", justifyContent: "center", }}>
                        <Card className='shadow-lg' style={{ backgroundColor: "gray", color: "white", marginTop: "70px", height: "400px", width: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <form onSubmit={submitForm}>
                                <h3>Nurse Portal</h3>
                                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                                    <input type="text" className='form-control' placeholder='User Name' onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div style={{ marginBottom: "20px" }}>
                                    <input type="password" className='form-control' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                {msg ? <p style={{ color: "red" }}>Invalid User Name or Password</p> : ""}
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn btn-primary'>Login</button>
                                </div>
                                <p>Not yet Registered? <span style={{color: "blue", textDecoration: 'underline'}} onClick={() => history('/nurse-register')}>Register Here</span></p>
                            </form>
                        </Card>
                    </div>
                </Box>
            </Box>
        </>

    )
}

export default Login;