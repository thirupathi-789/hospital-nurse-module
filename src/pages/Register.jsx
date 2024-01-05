import { Card } from "@mui/material";
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const history = useNavigate();

    return (
        <div className="login-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                        <button onClick={() => history('/')} className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Register;