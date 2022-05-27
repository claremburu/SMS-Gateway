import React, {useState} from 'react'
import {
    Typography,
    Box,
    BottomNavigation
} from '@mui/material'

function Footer() {
    const [date, setDate] = useState(new Date())

    const handleChange = (event) => {
        setDate(event.target.value)
        console.log(date)
    }

    return (
        <footer>
            <Box 
                onChange={handleChange}
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                // mt: 2,
                // position: 'absolute',
                // textAlign: 'center',
                bottom: 0,
                left:0,
                right:0,
                alignContent: 'center',
            }}>
                <Typography sx={{ }} variant="p">Onfon Media &copy; {new Date().getFullYear()} <b> Onfon Media LTD </b></Typography>
            </Box>
        </footer>
    )
}

export default Footer