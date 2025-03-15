import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';


export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async(e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/api/auth/register", {username, password});
      navigate("/");
    }
    catch(error){
      alert("Error registering error");
    }
  };

  return (
<div className="main">
<main className="logBox">
<CssBaseline />
<Sheet
  sx={{
    width: 300,
    mx: 'auto', // margin left & right
    my: 4, // margin top & bottom
    py: 3, // padding top & bottom
    px: 2, // padding left & right
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderRadius: 'sm',
    boxShadow: 'md',
  }}
  variant="outlined"
  className="sheet"
>
  <div className='container'>
    <Typography level="h4" component="h1">
      <b>Create a New Account!</b>
    </Typography>
  </div>
  <FormControl>
    <FormLabel>Username</FormLabel>
    <Input
      // html input attribute
      name="username"
      type="text"
      placeholder="Username"
      onChange={(e)=> setUsername(e.target.value)}
    />
  </FormControl>
  <FormControl>
    <FormLabel>Password</FormLabel>
    <Input
      // html input attribute
      name="password"
      type="password"
      placeholder="password"
      onChange={(e)=> setPassword(e.target.value)}
    />
  </FormControl>
  <Button sx={{ mt: 1 /* margin top */ }} onClick={handleRegister}>Register</Button>
</Sheet>
</main>
</div>
  )
}
