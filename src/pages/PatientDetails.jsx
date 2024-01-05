import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const PatienDetails = () => {

    const history = useNavigate();

    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div style={{ display: "flex", padding: "15px", flexWrap: "wrap" }} className='container'>
                        <div style={{ marginBottom: "35px" }}>
                            <Card style={{ padding: "15px", backgroundColor: "lightgreen", height: "100%", color: "blue", marginRight: "35px" }}>
                                <div style={{ marginBottom: "15px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <h5>Steven</h5>
                                            <h5 style={{ color: "black" }}>Male - 26 years (07.02.1997)</h5>
                                        </div>
                                        <img alt='patient-pic' src='https://static3.bigstockphoto.com/9/2/3/large1500/329474425.jpg' className='image' />
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex" }}>
                                        <h5 style={{ marginRight: "30px" }}>Symptoms</h5>
                                        <div style={{ display: "flex" }}>
                                            <h5 style={{ marginRight: "15px", color: "black" }}>Fever</h5>
                                            <h5 style={{ marginRight: "15px", color: "black" }}>Infection</h5>
                                            <h5 style={{ marginRight: "15px", color: "black" }}>Chest Pain</h5>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <h5 style={{ marginRight: "30px" }}>Body Temperature</h5>
                                        <h5 style={{ color: "black" }}>97.8 F</h5>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <h5 style={{ marginRight: "30px" }}>Diagnosis</h5>
                                        <h5 style={{ color: "black" }}>Virus Disease</h5>
                                    </div>
                                </div>
                                <div>
                                    <Card style={{ height: "100%", width: "100%", backgroundColor: "gray", color: "white", padding: "15px" }}>
                                        <p style={{ textAlign: "center", textDecoration: "underline", color: "yellow" }}>Treatment Details</p>
                                        <p><span style={{ color: "black" }}>Treatment Name:</span> Fever </p>
                                        <p><span style={{ color: "black" }}>Doctor Name:</span> Dr.Catherine</p>
                                        <p><span style={{ color: "black" }}>Prescription:</span> Fluticasone / Mometasone Nose spray</p>
                                        <p><span style={{ color: "black" }}>Remark:</span> Use at Bedtime</p>
                                        <p><span style={{ color: "black" }}>Advice:</span> You don't get the full effect for<br /> several days or even a week,<br />
                                            But if you use it daily, it will be incredibly effective</p>
                                    </Card>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: "400px", padding: "7px" }}>
                                <h4>Recent Visits</h4>
                                <hr />
                                <div>
                                    <p>Dr.Ramesh(Dermatologist)</p>
                                    <p>14th Sep, 2023</p>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <button className='btn btn-success' onClick={() => history('/nurse')}>Back</button>
                        </div>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default PatienDetails