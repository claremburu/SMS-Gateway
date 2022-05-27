import React, { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

import { bgcolor } from '@mui/system';

import Page from '../components/Page';
import ForgotPassword from '../sections/auth/password/forgot';

// ----------------------------------------------------------------------

const data=[
  {bgcolor: '#00296b', completed: '60'},
  {bgcolor: '#003f88', completed: '30'},
  {bgcolor: '#fdc500', completed: '57'},
]

export default function DashboardApp() {
  const theme = useTheme();
  return (
    <Page title="Forgot Password">
      <Container maxWidth="xl">
        <Grid container spacing={3}
        >
          <Grid item xs={12} sm={6} md={4}>
            <ForgotPassword />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}





