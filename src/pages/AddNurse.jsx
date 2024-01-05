import Card from '@mui/material/Card';
import { useState } from 'react';
import { useId } from 'react';

const AddNurse = () => {

    const id = useId();
    const [name, setName] = useState("");
    console.log(name);

    return (
        <Card style={{ backgroundColor: "lightgray", padding: "15px" }}>
            <h3>Add Nurse</h3>
            <hr />
            <form>
                <div>
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Name</label><br />
                    <input type="text" id={id} className='form-control' onChange={(e) => setName(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Email</label><br />
                    <input type="email" id={id} className='form-control' /><br />
                </div>
                <div>
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Address</label><br />
                    <input type="text" id={id} className='form-control' /><br />
                </div>
                <div>
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Phone Number</label><br />
                    <input type="number" id={id} className='form-control' /><br />
                </div>
                <div>
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Address</label><br />
                    <input type="text" id={id} className='form-control' /><br />
                </div>
                <div>
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Password</label><br />
                    <input type="password" id={id} className='form-control' /><br />
                </div>
                <div>
                    <input type="file" id={id} style={{marginBottom:"7px"}}/><br />
                </div>
                
                <div>
                    <button className='btn btn-primary' onClick={() => alert("added")}>Add Nurse</button>
                </div>
            </form>
        </Card>
    )
}

export default AddNurse;