import React, { useState } from 'react';
import { Container, IconButton, Paper, Typography, Avatar, TextField, Button, Stack } from "@mui/material";
import { CameraAlt } from '@mui/icons-material';
import { VisuallyHidden } from '../components/styles/StyleComponents';
import {useInputValidation,useFileHandler} from '6pp' //
import { usernameValidator } from '../utils/validator';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true); // Initialize isLogin state variable

  const name = useInputValidation("")
  const bio = useInputValidation("")
  const username = useInputValidation("",usernameValidator)
  const password = useInputValidation("")

  const avatar = useFileHandler("single");

  const handleLogin =(e)=>{
    e.preventDefault();
  }

  const handleSignup =(e)=>{
    e.preventDefault();
  }



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

              onSubmit={handleLogin}

            >
              <TextField
                required
                fullWidth
                label="username"
                margin='normal'
                variant='outlined'
                value={username.value}
                onChange={username.changeHandler}
                 />

              <TextField
                required
                fullWidth
                label="password"
                type='password'
                margin='normal'
                variant='outlined'
                value={password.value}
                onChange={password.changeHandler} />

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

              onSubmit={handleSignup}
            >


                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                    <Avatar sx={{
                        width:"10rem",
                        height:"10rem",
                        objectFit:"contain"
                    }}

                    src={avatar.preview}
                    />

             

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
                            <VisuallyHidden type="file" onChange={avatar.changeHandler}/>
                        </>
                    </IconButton>

                </Stack>


                {
                avatar.error && (
                  <Typography m={"1rem"} width={"fit-content"} display={"block"} color="error"variant='caption'>
                    {avatar.error}
                  </Typography>
                )
              }
            

              <TextField
                required
                fullWidth
                label="name"
                margin='normal'
                variant='outlined'
                value={name.value}
                onChange={name.changeHandler}
                 />

              <TextField
                required
                fullWidth
                label="username"
                margin='normal'
                variant='outlined'
                value={username.value}
                onChange={username.changeHandler} />

              {
                username.error && (
                  <Typography color="error"variant='caption'>
                    {username.error}
                  </Typography>
                )
              }

              <TextField
                required
                fullWidth
                label="Bio"
                margin='normal'
                variant='outlined'
                value={bio.value}
                onChange={bio.changeHandler} />

              <TextField
                required
                fullWidth
                label="password"
                type='password'
                margin='normal'
                variant='outlined'
                value={password.value}
                onChange={password.changeHandler} />


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
