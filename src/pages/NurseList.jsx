
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(no,image, name, department, phone, email) {
  return { no,image, name, department, phone, email };
}

const rows = [
  createData(1, <img src="https://headshots-inc.com/wp-content/uploads/2023/03/professional-Headshot-Example-2-1.jpg" className='image' />, "Nurse", "Hematology", 9487283645, "nurse@email.com", ),
  
];

export default function NurseList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:"lightgray"}}>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Profile</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email</TableCell>
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
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><a href='AddNurse.jsx'>Edit</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
