import Card from '@mui/material/Card';
import { useId } from 'react';

const AddPatient = () => {

    const id = useId();

    return (
        <Card style={{ backgroundColor: "lightgray", padding: "15px" }}>
            <h3>Add Patient</h3>
            <hr />
            <form>
                <div>
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Name</label><br />
                    <input type="text" id={id} className='form-control' /><br />
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
                    <label htmlFor={id} style={{ marginBottom: "10px" }}>Sex</label><br />
                    <input type="text" id={id} className='form-control' /><br />
                        </div>
                        <div>
                            <label htmlFor={id} style={{ marginBottom: "10px" }}>Date Of Birth</label><br />
                            <input type="date" id={id} className='form-control' /><br />
                        </div>
                        <div>
                            <label htmlFor={id} style={{ marginBottom: "10px" }}>Age</label><br />
                            <input type="number" id={id} className='form-control' /><br />
                        </div>
                        <div>
                            <label htmlFor={id} style={{ marginBottom: "10px" }}>Blood Group</label><br />
                            <input type="text" id={id} className='form-control' placeholder='Blood group' /><br />
                        </div>
                        <div>
                            <label htmlFor={id} style={{ marginBottom: "10px" }}>Time of Registration</label><br />
                            <input type="time" id={id} className='form-control' /><br />
                        </div>
                        <div>
                    <input type="file" id={id} style={{marginBottom:"5px"}}/><br />
                    {/* <label htmlFor={id} style={{height:"100px", width:"150px", borderRadius: "6px", border: "1px dashed #999"}}>Upload Photo</label> */}
                </div>
                        <div>
                            <button className='btn btn-primary' onClick={() => alert("added successfully")}>Add Patient</button>
                        </div>
                    </form>
                </Card>
                )
}

export default AddPatient;