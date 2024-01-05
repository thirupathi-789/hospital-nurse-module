
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'patient', label: 'Patient Name', minWidth: 170 },
    { id: 'condition', label: 'Condition', minWidth: 100 },
    {
        id: 'in_',
        label: 'Last checked at ',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },


];

function createData(patient, condition, in_) {

    return { patient, condition, in_ };
}

const rows = [
    createData('Steven', 'Light Fever', "6:30"),
    createData('Smith', 'Normal', "6:50"),
    createData('Ketan', 'Glucose Running', "7:10"),
    createData('Patient-4', 'Low Platelets', "7:30"),
    createData('Patient-5', 'Severe Pain', "7:50"),
    createData('Patient-6', 'High Fever', "8:20"),
];

export default function NurseSchedule() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div style={{backgroundColor: "lightgray", padding:"20px"}}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <form>
                <div style={{marginBottom:"7px"}}>
                        <label for="No">No : </label>
                        <input type='number' id="No" />
                    </div>
                    <div style={{marginBottom:"7px"}}>
                        <label for="name">Name : </label>
                        <input type='text' id="name" />
                    </div>
                    <div style={{marginBottom:"7px"}}>
                        <label for="condition">Condition : </label>
                        <input type='text' id="condition" />
                    </div>
                    <div style={{marginBottom:"7px"}}>
                        <label for="time">Checked at(time) : </label>
                        <input type='time' id="time" />
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow style={{}}>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, backgroundColor: "yellow" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
