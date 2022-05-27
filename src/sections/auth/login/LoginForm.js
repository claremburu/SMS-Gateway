import {
  Alert,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import Iconify from '../../../components/Iconify';
import Button from '../../../portable/Button';
import Form from '../../../portable/Form';
import Input from '../../../portable/Input';
import { login } from '../../../store/actions/authActions';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((st) => st);

  const errors = state.auth.loginErr;
  const { busy } = state.auth;

  const validateLogin = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().label('Password')
  });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = ({ email, password }) => {
    dispatch(login(email, password));
  };

  return (
    <Form
      validationSchema={validateLogin}
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Stack spacing={3}>
        <Input
          fullWidth
          autoComplete="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <Input
          fullWidth
          autoComplete="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel control={<Checkbox checked={false} />} label="Remember me" />
        <Link component={RouterLink} variant="subtitle2" to="/forgot-password" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      {errors?.error && !busy
       && (
        <Alert severity="error" sx={{ my: 2 }}>
          {errors?.error}
        </Alert>
      )}

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={busy}
        onClick={null}
        submit
      >
        Login
      </Button>
    </Form>
  );
}
