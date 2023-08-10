import React from 'react';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(number, item, qty, price, hsn) {
  return { number, item, qty, price, hsn };
}

const rows = [
  createData(1, 'Apple', 5, 3, 1),
  createData(2, 'Orange', 2, 2, 1),
  createData(3, 'Grapes', 3, 1, 1),
  createData(4, 'Tomato', 2, 1.6, 1),
  createData(5, 'Mango', 1.5, 4, 1)
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">challan number</TableCell>
            <TableCell align="right">style no</TableCell>
            <TableCell align="right">stylecode</TableCell>
            <TableCell align="right">hsn code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              {/* <TableCell align="right">{row.item}</TableCell> */}
              {/* <TableCell align="right">{}</TableCell> */}
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.hsn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
