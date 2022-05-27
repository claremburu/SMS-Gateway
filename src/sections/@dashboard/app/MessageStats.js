import React, { useState } from 'react';
// material
import {
    Card,
    Typography,
    Box,
    FormControl,
    MenuItem,
    Select,
    OutlinedInput,
    Stack,
    InputLabel,
    FormHelperText,
    Divider,
    Collapse,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    IconButton
} from '@mui/material';

// icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

export default function MultipleSelectPlaceholder() {
    const [range, setRange] = useState('');
    const [open, setOpen] = useState(false);
    const [clear, setClear] = useState();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleChange = (event) => {
        setRange(event.target.value);
    };

    const handleClear = () => {
        setClear("")
        console.log("This is clear")
    }


    return (
        <>
            <Card sx={{
                mt: 2,
                p: 2,
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Stack
                        // p={2} 
                        sx={{ mt: 2 }}
                    >
                        <Typography variant="p">
                            Client Messages Sent
                        </Typography>
                    </Stack>
                    <Stack>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <Select
                                value={range}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Month-to-date</em>
                                </MenuItem>
                                <MenuItem value={10}>Year-to-date</MenuItem>
                                {/* <MenuItem value={20}>Month-to-date</MenuItem> */}
                                <MenuItem value={30}>Today</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Box spacing={2} sx={{
                        display: 'flex',
                        // py:2,
                        mt: 2,
                    }}>
                        {/* <Stack direction='row' spacing={1}> */}
                        <IconButton>
                            <List sx={{
                                // width: '100%', 
                                // maxWidth:20 ,
                                bgColor: 'background.paper'
                            }}>
                                <ListItemButton onClick={handleClick}>
                                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List
                                        // component='div' 
                                        disablePadding>
                                        <ListItemButton sx={{}}><ListItemText>l</ListItemText></ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </IconButton>

                        <IconButton>
                            <OpenInFullIcon fontSize='small' />
                        </IconButton>
                        <IconButton>
                            <RefreshIcon fontSize='small' />
                        </IconButton>
                        <IconButton disableRipple onClick={clear}>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                        {/* </Stack> */}
                    </Box>
                </Box>
                <Divider />
            </Card>
            {/* client purchases */}
            {/* </Box> */}
        </>
    )
}
