import { Alert, IconButton, InputAdornment, Stack } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Iconify from '../../../components/Iconify';
import Button from '../../../portable/Button';
import Form from '../../../portable/Form';
import Input from '../../../portable/Input';
import { createPassword } from '../../../store/actions/authActions';

export default function Reset({ pvc }) {
  const [showPassword, setShowPassword] = useState(false);
  const [created, setCreated] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((st) => st);

  const errors = state.auth.passwordErr;
  const { busy } = state.auth;

  const validateLogin = Yup.object().shape({
    password: Yup.string().required().min(6).label('Password'),
    password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = ({ password }) => {
    dispatch(createPassword(password, pvc));
    setCreated(true);
  };

  console.log({ pvc });

  return (
    <Form
      validationSchema={validateLogin}
      initialValues={{ password: '', password2: '' }}
      onSubmit={handleSubmit}
    >
      <Stack spacing={3}>
        <Input
          fullWidth
          autoComplete="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="New Password"
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
        <Input
          fullWidth
          autoComplete="password"
          type={showPassword ? 'text' : 'password'}
          name="password2"
          placeholder="Confirm Password"
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

      {errors?.error && !busy && (
        <Alert severity="error" sx={{ my: 2 }}>
          {errors?.error}
        </Alert>
      )}

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        style={{ marginTop: 16 }}
        loading={busy}
        disabled={created}
        submit
      >
        Create Password
      </Button>
    </Form>
  );
}
