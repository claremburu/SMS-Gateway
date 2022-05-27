import React, { useState } from 'react'
import {
  Typography,
  Container,
  Card,
  Box,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  OutlinedInput,
  Divider,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal
} from '@mui/material'

const tableHead = ["Owner",
  "Name",
  "Group",
  "Active Binds",
  "Status",
  "Balance",
  "Last Activity",
  "action"]

  const accounts = ["Onfon", "Mobipesa", "Fast"]
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function GroupsTable(owner, group, accounts, action) {
  return { owner, group, accounts, action }
}

export default function JasminUsers() {
  const [groups, setGroups] = useState()
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleChange = (event) => {
    setGroups(event.target.value);
  }

  return (
    <>
      <Card sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant='h6'>SMPP Groups</Typography>
          {/*  */}
          <Button variant="contained" onClick={handleOpen}>New Account</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                New SMPP Server Account
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Enter all the <b>mandatory</b> fields below. You can go in and configure the details later.
                Account names and usernames <b>must</b> be unique i.e. two accounts cannot have the same username.
              </Typography>

              <Typography variant='h6' sx={{ my: 1 }}>Account Owner</Typography>
              <FormControl sx={{ minWidth: '100%' }} size="small">
                <Select
                  value={groups}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {accounts.map(account=> <MenuItem value={accounts}>{account}</MenuItem>)}
                </Select>
              </FormControl>

              <Typography sx={{my:1}} variant="subtitle2"> SMPP Server Account Name</Typography>
              <TextField placeholder="Account Name" size="small" fullWidth/>

              <Typography sx={{my:1}} variant="subtitle2"> Username</Typography>
              <TextField placeholder="Username" size="small" fullWidth/>

              <Typography sx={{my:1}} variant="subtitle2"> Password</Typography>
              <TextField placeholder="******" size="small" fullWidth/>

              <Typography sx={{my:1}} variant="subtitle2"> Confirm Password</Typography>
              <TextField placeholder="******" size="small" fullWidth/>

              <Typography sx={{my:1}} variant="subtitle2">Group</Typography>

              <FormControl sx={{ minWidth: '100%' }} size="small">
                <Select
                  value={groups}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                   <MenuItem value=""><em>Onfon</em></MenuItem>
                </Select>
              </FormControl>

            </Box>
          </Modal>
        </Box>

        <Divider my={2} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="p" sx={{}}> Show </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={groups}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>20</em>
                </MenuItem>
                <MenuItem value={10}>50</MenuItem>
                <MenuItem value={20}>100</MenuItem>
                <MenuItem value={30}>200</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="p"> entries </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{}}>Search:</Typography>
            <FormControl sx={{ width: '15ch', mx: 1 }}>
              <OutlinedInput placeholder="Please enter search term" size='small' />
              {/* <MyFormHelperText /> */}
            </FormControl>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Copy</Button>
              <Button>CSV</Button>
              <Button>Excel</Button>
              <Button>PDF</Button>
              <Button>Print</Button>
            </ButtonGroup>
          </Box>
        </Box>

        <Typography>
          Showing 1 of 1 entries
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            {tableHead.map(table => <TableCell>{table}</TableCell>)}
          </Table>
        </TableContainer>

      </Card>
    </>
  )
}

