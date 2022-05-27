import React from 'react'
import { Card, Tabs, Tab, Typography, Box, FormControl, Select, MenuItem, TextField, Button, OutlinedInput, Divider, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, FormControlLabel, CheckBox } from '@mui/material'

function ImportContacts() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <Card sx={{ p: 2 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Groups" >
                    <div>
                    <Typography>Total Contacts Selected: </Typography>
                    </div>
                </Tab>
                <Tab value="two" label="From File(.xls, .csv, .txt)" />
            </Tabs>
        </Card>
    )
}

export default ImportContacts