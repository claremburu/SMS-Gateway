import { Alert, Stack, Card } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Button from '../../../portable/Button';
import Form from '../../../portable/Form';
import Input from '../../../portable/Input';
import { requestCode } from '../../../store/actions/authActions';


export default function ForgotPassword() {
  const [justSent, setJustsent] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((st) => st);

  const errors = state.auth.passwordErr;
  const { busy } = state.auth;

  const validateForgotPass = Yup.object().shape({
    email: Yup.string().email().required().label('Email')
  });

  const handleSubmit = ({ email }) => {
    dispatch(requestCode(email));
    setJustsent(true);
  };

  return (
    <Form
      validationSchema={validateForgotPass}
      initialValues={{ email: '' }}
      onSubmit={handleSubmit}
    >
      <Stack spacing={3}>
        <Input
          sx={{ my: 2 }}
          fullWidth
          autoComplete="email"
          type="email"
          name="email"
          placeholder="Email Address"
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
        // disabled={justSent}
        loading={busy}
        submit
      >
        {justSent ? 'Sent!' : ' Send Email'}
      </Button>
    </Form>
  );
}
