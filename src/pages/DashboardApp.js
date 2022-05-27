import React, { useState } from 'react';

import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

import { bgcolor } from '@mui/system';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
// Login Form
import LoginForm from '../sections/auth/login/LoginForm';

import {
  MessagesSent,
  ClientPurchases,
  MessageStats,
  MessagesPurchased,
  ClientMessagesSent,
  MessagesByStatus,
  ClientExpenditure,
  RevenuesByClient,
  MessagesSentTrend,
  MessagesPurchasedTrend,
  MessagesReceivedTrend,
  TopReceivedKeywords,
  ReceivedByAccount,
  ReceivedByNetwork,
  ProfitAnalysis,
  PercentageBalance,
  DestinationGrowth,
  DormantAccounts,
  Footer,
  ProgressBar,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

const data=[
  {bgcolor: '#00296b', completed: '60'},
  {bgcolor: '#003f88', completed: '30'},
  {bgcolor: '#fdc500', completed: '57'},
]

export default function DashboardApp() {
  const theme = useTheme();
  // const [name, setName] = useState(faker.name.firstName());

  // const setNameHandler = (event) => {
  //   setName(event.target.value);
  // }

  // const [token, setToken] = useState()

  // if(!token){
  //   return(<LoginForm setToken={setToken}/>)
  // }

  return (
    <Page title="Dashboard">
      {/* {data.map(item => <ProgressBar bgColor={item.bgcolor} completed={item.completed}/>)} */}
      <Container maxWidth="xl">
        {/* <AppProgress/> */}
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography> */}

        <Grid container spacing={3}
        // sx={{p:2}}
        >
          <Grid item xs={12} sm={6} md={4}>
            <MessagesSent />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ClientPurchases />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <MessageStats />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <MessagesPurchased />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <ClientMessagesSent />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <MessagesByStatus />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <ClientExpenditure />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <RevenuesByClient />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <MessagesSentTrend />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <MessagesPurchasedTrend />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <MessagesReceivedTrend />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TopReceivedKeywords />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <ReceivedByAccount />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ReceivedByNetwork />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <ProfitAnalysis/>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <PercentageBalance />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <DestinationGrowth/>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <DormantAccounts />
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} >
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}





