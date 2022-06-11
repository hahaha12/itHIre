import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCommentsData } from "../../redux/feuters/commentsSlice/comments"
import { useAppSelector } from "../../redux/hooks"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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


const Comments = () => {

    const { data, num, loading } = useAppSelector(({ commentsSlice }) => ({
        data: commentsSlice.data,
        num: commentsSlice.num,
        loading: commentsSlice.loading
    }))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCommentsData(num))
    }, [dispatch,num])

  
    
    return (
        <>
            {
                loading ? (
                    <div className="loader">...loading</div>
                ) : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="right">Name</StyledTableCell>
                                    <StyledTableCell align="right">Email</StyledTableCell>
                                    <StyledTableCell align="right">Description</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.map(({ name, email, body, id }) => (
                                        <StyledTableRow key={id}>
                                            <StyledTableCell component="th" scope="row">
                                                {name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{email}</StyledTableCell>
                                            <StyledTableCell align="right">{body}</StyledTableCell>
                                        </StyledTableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
        </>
    )
}
export default Comments

