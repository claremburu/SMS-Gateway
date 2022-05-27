import React, { useEffect, useState } from 'react';
import {
    Card,
    Typography,
    Box,
    Divider,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button
} from '@mui/material'

// MUI-X
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

// const useStyles = withStyles(() => ({
//     input:{
//         height:400
//     }
// }))

export default function SendMessage() {
    const [feedback, setFeedback] = useState('');
    const [value, setValue] = useState(new Date());

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setDate(new Date().toLocaleTimeString());
    //     }, 1000);

    //     return () => clearInterval(interval);

    // }, [])

    const handleChange = (event) => {
        setFeedback(event.target.value);
    };
    return (
        <>
            <Card
                sx={{
                    p: 2
                }}
            >
                <Box >
                    <Typography my={1} sx={{ fontWeight: 'medium', fontSize: 20 }}>
                        Send Message
                    </Typography>
                    <Divider />
                    <Typography
                        variant="p"
                        fontSize={15}
                        my={1}
                    >
                        You may use this form to send a one off message to up to 50 destinations.                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 'medium' }}
                        my={1}
                    >
                        Sent Client
                    </Typography>
                    <FormControl sx={{ minWidth: '100%' }} size="small">
                        <Select
                            value={feedback}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Fast SMS</em>
                            </MenuItem>
                            {/* <MenuItem value={10}>Fast SMS</MenuItem> */}
                            <MenuItem value={20}>Mawingu</MenuItem>
                            <MenuItem value={30}>Mobipol</MenuItem>
                            <MenuItem value={40}>Test User</MenuItem>
                            {/* <MenuItem value={50}>Payment Concerns</MenuItem> */}
                        </Select>
                    </FormControl>
                    <Typography my={1} variant="subtitle1">
                        Destinations (You may enter up to 50 numbers separated by commas)
                    </Typography>
                    <TextField
                        id="fullWidth"
                        placeholder='phone numbers'
                        sx={{
                            minWidth: "100%",
                            height: '100%'
                            // height:400 
                        }}
                        size="small"
                        multiline
                        maxRows={4}
                    // InputProps={{classes: {input: classes.input}}}
                    />

                    <Typography my={1} variant="subtitle1">
                        Message: (640 chars max, 160 per sms)
                    </Typography>
                    <TextField
                        id="fullWidth"
                        placeholder='Enter Message'
                        sx={{
                            minWidth: "100%",
                            height: '100%'
                            // height:400 
                        }}
                        size="small"
                        multiline
                        maxRows={4}
                    // InputProps={{classes: {input: classes.input}}}
                    />

                    <Typography my={1} variant="subtitle1">
                        Send this message on:
                    </Typography>
                    <Box sx={{mb:2}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            // label="DateTimePicker"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </LocalizationProvider>
                    </Box>
                    <TextField
                        id="fullWidth"
                        placeholder='Message'
                        sx={{
                            minWidth: "100%",
                            height: '100%'
                            // height:400 
                        }}
                        size="small"
                        multiline
                        maxRows={4}
                    // InputProps={{classes: {input: classes.input}}}
                    />
                    {/* <Typography my={1}>{date}</Typography> */}

                    <Typography my={1} variant="subtitle1">
                        Source Address
                    </Typography>
                    <TextField
                        id="fullWidth"
                        placeholder='Sender Address'
                        sx={{
                            minWidth: "100%",
                            height: '100%',
                            mb: 2
                            // height:400 
                        }}
                        size="small"
                        multiline
                        maxRows={4}
                    // InputProps={{classes: {input: classes.input}}}
                    />
                </Box>
                <Button variant="outlined" startIcon={<SendIcon />} size="small" sx={{ mr: 1 }} disabled
                >
                    Send Message
                </Button>
                <Button variant="outlined" startIcon={<ClearIcon />} size="small">
                    Clear
                </Button>
            </Card>
        </>
    )
}