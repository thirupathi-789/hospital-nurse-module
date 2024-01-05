import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function createData(no, image, name, phone, sex, age, blood, time) {
    return { no, image, name, phone, sex, age, blood, time };
}

const rows = [
    createData(1, <img alt='patient-pic' src="https://static3.bigstockphoto.com/9/2/3/large1500/329474425.jpg" className='image' />, "Steven", 9347282643, "Male", 25, "B+", "2023-11-12 06:30PM"),

];


export default function PatientList() {

    const history = useNavigate();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: "lightgray" }}>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right" >Profile</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Sex</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Blood Group</TableCell>
                        <TableCell align="right">Time of Registration</TableCell>
                        <TableCell align="right">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.no}
                            </TableCell>
                            <TableCell align="right" onClick={() => history('/patient-details')} >{row.image}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.sex}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.blood}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                            <TableCell align="right"><a href='www.google.com'>Edit</a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}