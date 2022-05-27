import React, { useState } from 'react';

import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
    SmppTools, MessageStatus
} from '../sections/@dashboard/tools';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  // const [name, setName] = useState(faker.name.firstName());

  // const setNameHandler = (event) => {
  //   setName(event.target.value);
  // }

  return (
    <Page title="SMPP Tools">
      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography> */}

        <Grid container spacing={3}
        // sx={{p:2}}
        >
          <Grid item xs={12} sm={6} md={4} >
            {/* <SmppTools /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            {/* <MessageStatus /> */}
          </Grid>
        </Grid>

        </Container>
    </Page>
  );
}