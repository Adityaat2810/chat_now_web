import React, { useState } from 'react';
import { Container, IconButton, Paper, Typography, Avatar, TextField, Button, Stack } from "@mui/material";
import { CameraAlt } from '@mui/icons-material';
import { VisuallyHidden } from '../components/styles/StyleComponents';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Initialize isLogin state variable

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {isLogin ?
          <>
            <Typography variant="h5">
              Login
            </Typography>

            <form
              style={{
                width: "100%",
                marginTop: "1rem"
              }}
            >
              <TextField
                required
                fullWidth
                label="username"
                margin='normal'
                variant='outlined' />

              <TextField
                required
                fullWidth
                label="password"
                type='password'
                margin='normal'
                variant='outlined' />

              <Button sx={{ marginTop: "1rem" }}
                variant='contained'
                type='submit'
                color='primary'
              >LOGIN</Button>

              <Typography textAlign={"center"} m={"1rem"}>Or</Typography>

              <Button
                variant='text'
                fullWidth
                onClick={() => setIsLogin(false)}
              >Sign up instead</Button>

            </form>
          </>
          :
          <>
            <Typography variant="h5">
              Sign up
            </Typography>

            <form
              style={{
                width: "100%",
                marginTop: "1rem"
              }}
            >


                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                    <Avatar sx={{
                        width:"10rem",
                        height:"10rem",
                        objectFit:"contain"
                    }}/>

                    <IconButton
                     sx={{
                        position:"absolute",
                        bottom:"0",
                        right:"0",
                        color:"white",
                        bgcolor:"rgba(0,0,0,0.5)",
                        ":hover":{
                            bgcolor:"rgba(0,0,0,0.7)"
                        }
                     }
                     }
                     component="label"
                    
                    >
                        <>
                            <CameraAlt/>
                            <VisuallyHidden type="file"/>
                        </>
                    </IconButton>

                </Stack>
            

              <TextField
                required
                fullWidth
                label="name"
                margin='normal'
                variant='outlined' />

              <TextField
                required
                fullWidth
                label="username"
                margin='normal'
                variant='outlined' />

              <TextField
                required
                fullWidth
                label="Bio"
                margin='normal'
                variant='outlined' />

              <TextField
                required
                fullWidth
                label="password"
                type='password'
                margin='normal'
                variant='outlined' />

              <Button sx={{ marginTop: "1rem" }}
                variant='contained'
                type='submit'
                color='primary'
              >SIGN UP</Button>

              <Typography textAlign={"center"} m={"1rem"}>Or</Typography>

              <Button
                variant='text'
                fullWidth
                onClick={() => setIsLogin(true)}
              >login instead</Button>

            </form>
          </>
        }

      </Paper>
    </Container>

  )
}

export default Login;
