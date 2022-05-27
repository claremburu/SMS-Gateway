import { Alert, IconButton, InputAdornment, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Iconify from '../../../components/Iconify';
import Button from '../../../portable/Button';
import Form from '../../../portable/Form';
import Input from '../../../portable/Input';
import { register } from '../../../store/actions/authActions';

export default function RegisterForm() {
  const state = useSelector((st) => st);
  const authErr = state.auth.registerErr?.error;

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(authErr);
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { busy } = state.auth;

  const validate = Yup.object().shape({
    fname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email().required().label('Email'),
    country: Yup.string().required('Country is required'),
    phone: Yup.string().min(9).max(9).required().label('Phone number'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6).required('Password is required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const registerUser = (vals) => {
    dispatch(register(vals));
    setError('');
  };

  useEffect(() => {
    setError(authErr);
  }, [authErr]);

  return (
    <Form
      initialValues={{
        fname: '',
        lname: '',
        email: '',
        company: '',
        // phone: '',
        // username: '',
        password: '',
        confirm_password: ''
      }}
      onSubmit={(vals, { resetForm }) => {
        registerUser(vals);
        console.log('submit');
      }}
      validationSchema={validate}
    >
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Input fullWidth placeholder="First name" name="fname" />
          <Input fullWidth placeholder="Last name" name="lname" />
        </Stack>

        <Input
          fullWidth
          autoComplete="username"
          type="email"
          placeholder="Email address"
          name="email"
        />

        <Input
          // select
          fullWidth
          autoComplete="company"
          type="company"
          label="Company"
          name="company"
        >
          {/* <option value="kenya">Kenya</option> */}
        </Input>

        {/* <Input
          fullWidth
          autoComplete="phone"
          type="phone"
          placeholder="Phone number"
          name="phone"
          InputProps={{
            startAdornment: <InputAdornment position="start">254</InputAdornment>
          }}
        /> */}

        {/* <Input
          fullWidth
          autoComplete="username"
          type="username"
          placeholder="Username"
          name="username"
        /> */}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Input
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            name="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Input
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            name="confirm_password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Stack>

        {error && <Alert severity="error">{error}</Alert>}

        <Button fullWidth size="large" type="submit" variant="contained" loading={busy} submit>
          Register
        </Button>
      </Stack>
    </Form>
  );
}
