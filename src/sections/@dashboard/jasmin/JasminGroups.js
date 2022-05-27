import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
// import { useSpring, animated } from 'react-spring/web.cjs';
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
  Backdrop,
  Modal,

} from '@mui/material'

function GroupsTable(owner, group, accounts, action) {
  return { owner, group, accounts, action }
}

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

export default function JasminGroups() {
  const [groups, setGroups] = useState()
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setGroups(event.target.value);
  }

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Card sx={{ p: 2 }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1
        }}>
          <Box>
            <Typography variant='h6'>SMPP Groups</Typography>
          </Box>
          <Box >
            <FormControl
              sx={{
                minWidth: 120,
                // innerHeight : '25%'
              }}
              size="small">
              <Select
                value={groups}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>Onfon Media LTD</em>
                </MenuItem>
                <MenuItem value={10}>Mobipesa</MenuItem>
                {/* <MenuItem value={20}>Month-to-date</MenuItem> */}
                <MenuItem value={30}>Fast SMS-fast</MenuItem>
                <MenuItem value={40}>Test Company</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '25ch', mx: 1 }} size='small'>
              <OutlinedInput placeholder="Group Name" />
            </FormControl>
            <Button variant="contained" onClick={handleOpen}>Add Group</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
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
            <TableCell>owner</TableCell>
            <TableCell>group</TableCell>
            <TableCell>accounts</TableCell>
            <TableCell>action</TableCell>
          </Table>
        </TableContainer>

      </Card>
    </>
  )
}

