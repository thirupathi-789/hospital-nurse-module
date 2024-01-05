import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(false);

    const history = useNavigate();

    const submitForm = () => {
        if (username === "User Name" && password === 'Password') {
            history('/dashboard')
        }
        else {
            setMsg(true);

        }

    }

    return (
        <div className="login-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card className='shadow-lg' style={{ backgroundColor: "lightblue", marginTop: "70px", height: "500px", width: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <form onSubmit={submitForm}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                        <img alt='company-logo' src='https://res.cloudinary.com/zoominfo-com/image/upload/w_140,h_140,c_fit/sazpin.com' />
                        <h3 style={{ color: "darkblue", fontFamily: "serif" }}>HMS Portal</h3></div>
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
                    <p>Not yet Registered? <span style={{ color: "blue", textDecoration: 'underline' }} onClick={() => history('/register')}>Register Here</span></p>
                </form>
            </Card>
        </div>
    )
}

export default LoginForm;