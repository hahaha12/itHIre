
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../button/button';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { remuveFormDataItem } from '../../redux/feuters/listSlice/listSlices';

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




export default function ListTable() {

    const {data} = useAppSelector(({listSlice}) => ({data:listSlice.data}))
    const dispatch = useDispatch()
    return (
        <>
        {
            data.length  ? (
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">SurName</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {  data.map(({firstName, lastName, email,id}, i) => (
                            <StyledTableRow key={id}>
                                <StyledTableCell component="th" scope="row">
                                    {firstName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{lastName}</StyledTableCell>
                                <StyledTableCell align="right">{email}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button onClick={() => void dispatch(remuveFormDataItem(i))} color='red'>Delite</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
            ) : <div className='instruction'>Please fill the form... </div>
        }
        </> 
    );
}

