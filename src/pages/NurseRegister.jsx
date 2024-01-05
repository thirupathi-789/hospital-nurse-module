import { Card } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';

const NurseRegister = () => {

    const history = useNavigate();

    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div className='login-nurse-container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Card style={{ width: '50%', backgroundColor: "lightgray", display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: "15px" }}>
                            <form>
                                <h2 style={{ textAlign: 'center', color: "blue" }}>Sign Up</h2>
                                <div>
                                    <label style={{ marginBottom: '12px' }}>User Name</label><br />
                                    <input type="text" className="form-control" /><br />
                                </div>
                                <div>
                                    <label style={{ marginBottom: '12px' }}>Email</label><br />
                                    <input type="email" className="form-control" /><br />
                                </div>
                                <div>
                                    <label style={{ marginBottom: '12px' }}>Password</label><br />
                                    <input type="password" className="form-control" /><br />
                                </div>
                                <div>
                                    <label style={{ marginBottom: '12px' }}>Confirm Password</label><br />
                                    <input type="password" className="form-control" /><br />
                                </div>
                                <div>
                                    <button onClick={() => history('/login')} className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default NurseRegister;