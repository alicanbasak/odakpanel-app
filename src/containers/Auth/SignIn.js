import React from "react";
import { Box, Button, Container, CssBaseline, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useHandleSubmit } from "../../handlers/SignIn";
import signInStyles from "../../styles/signIn";

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = useHandleSubmit();

  const formik = useFormik({
    initialValues: {
      Username: "",
      Password: "",
    },
    onSubmit: values => handleSubmit(values, navigate),
  });

  return (
    <Container component="main" maxWidth="xxl" sx={signInStyles.container}>
      <CssBaseline />
      <Box sx={signInStyles.formLayout}>
        <Box>
          <img src="logo.png" alt="logo" />
        </Box>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            name="Username"
            value={formik.values.Username}
            onChange={formik.handleChange}
            autoComplete="Username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Password"
            type="password"
            id="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={signInStyles.submitButton}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
