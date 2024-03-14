import React, { useId } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const toggleLogin = () => {
    setisLoggedIn(!isLoggedIn);
  };
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  //   const password = useStrongPassword();
  const password = useInputValidation("");
  const avatar = useFileHandler("single");

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("Logging in...");
  };
  const signupHandler = (e) => {
    e.preventDefault();
    console.log("Signing up...");
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(200, 200, 200, 0.4), rgba(24, 118, 210, 0.6))",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <>
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={loginHandler}
              >
                <TextField
                  required={true}
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                >
                  Login
                </Button>
                <Typography textAlign="center" mt="1rem">
                  OR
                </Typography>
                <Button
                  variant="text"
                  fullWidth
                  onClick={toggleLogin}
                  sx={{ marginTop: "1rem" }}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" gutterBottom>
                Sign Up
              </Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={signupHandler}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "black",
                      bgcolor: "rgba(0,0,0,0.1)",
                      ":hover": { bgcolor: "rgba(255,255,255,0.5)" },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    margin={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    variant="body2"
                    color="error"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required={true}
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />

                <TextField
                  required={true}
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required={true}
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                >
                  Sign Up
                </Button>
                <Typography textAlign="center" margin="1rem">
                  OR
                </Typography>
                <Button
                  variant="text"
                  fullWidth
                  onClick={toggleLogin}
                  sx={{ marginTop: "1rem" }}
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
