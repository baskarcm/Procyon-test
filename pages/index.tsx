import  React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NextPage } from 'next';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Page:NextPage =() => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://dummyjson.com/products', { cache: 'force-cache' })
        .then((res) => res.json())
        .then((data) => {
          setData(data.products)
        })
      }, []);
    console.log(data)
  return (
    <>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>Title</StyledTableCell>
          <StyledTableCell align="right">Brand</StyledTableCell>
          <StyledTableCell align="right">Category</StyledTableCell>
          <StyledTableCell align="right">Price</StyledTableCell>
          <StyledTableCell align="right">Stock</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {data && data.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="right">{row.brand}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </>
  );
}
export default Page;