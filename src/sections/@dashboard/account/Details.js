import React from 'react'
import { Avatar, Card, Typography, Divider } from '@mui/material'

const userData= ["Website", "Email Address", "Created On", "Last Logged in", "Account Type", "Default Currency", "Number of Clients"]

export default function Details() {
    return(
    <>
    <Card sx={{p:2}}>
        {userData.map((data) => <Typography variant="subtitle2" sx={{ mb: 5 }}>{data}:<Divider/></Typography>)}
    </Card>
    </>
    )
}