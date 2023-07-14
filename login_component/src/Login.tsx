import React, { useState } from 'react';
import { Streamlit } from "streamlit-component-lib"
import Card from '@mui/material/Card';
import { CardContent, IconButton, InputAdornment, InputLabel, FilledInput, TextField, Button, FormControl } from '@mui/material';
import styled from '@emotion/styled';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const logo = require("./samooha_logo.png")

const Container = styled("div")`
  padding: 60px 0;
`;
const CardTitle = styled("h2")`
  margin:16px 0 90px;
  font-size: 28px;
`;

const InputWrapper = styled(TextField)`
  max-width: 400px;
  margin-bottom: 36px;border-radius: 5px;
  overflow:hidden;

  label {
    font-family: 'DM Sans', sans-serif;
  }

  input {
    background-color: #f5f5f5;
    
   }
`;
const FormControlWrapper = styled(FormControl)`
  max-width: 400px;

  label {
    font-family: 'DM Sans', sans-serif;
  }

`;
const PasswordWrapper = styled(FilledInput)`
  margin-bottom: 36px;
  border-radius: 5px;
  overflow:hidden;
  background-color: #f5f5f5;
  
  :hover { 
    background-color: #f5f5f5;
  }

  input {
    background-color: #f5f5f5;
  }
`;

const CustomizedCard = styled(Card)`
  box-shadow: 0px 0px 16px #e5e5e5;
  padding: 36px 24px;
  box-sizing: border-box;
  border-radius: 16px;
  text-align: center;
  max-width: 675px;
  margin: 0 auto;

`;

const SignUpButton = styled(Button)`
  margin: 36px 0 48px;
  text-transform: initial;
  font-weight: 600;
  width: 130px
`;

const Paragraph = styled("p")`
  font-size: 16px;
  color: #606060;
`;

export default function Login() {
  const [formData, setFormData] = useState({
    account: "", username: "", password: ""
  })
  const isFormValid = formData?.account !== "" && formData?.username !== "" && formData?.password !== "";
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    alert(`Submitted Form Datra : ${JSON.stringify(formData)}`);
    Streamlit.setComponentValue(`Submitted Form Datra : ${JSON.stringify(formData)}`)
  };

  return (
    <Container>
      <CustomizedCard ><CardContent>
        <img src={logo} alt="Samooha Logo" />
        <CardTitle>Sign up using snowflake account</CardTitle>
        <InputWrapper label="Account locator" name="account" onChange={(e) => handleInputChange(e)} variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
        <InputWrapper label="Username" name="username" onChange={(e) => handleInputChange(e)} variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
        <FormControlWrapper variant="filled" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <PasswordWrapper
            type={showPassword ? 'text' : 'password'}
            disableUnderline={true}
            name="password"
            onChange={(e) => handleInputChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControlWrapper>
        <Paragraph>By signing up, I agree to the &nbsp;
          <b><a href="https://samooha.tech" target="_target" >Terms of Service</a></b>&nbsp; and &nbsp;
          <b><a href="https://samooha.tech" target="_target">Privacy policy</a></b></Paragraph>
        <SignUpButton size="large" variant="contained" disableElevation disabled={!isFormValid} onClick={handleSubmit}>
          Sign up
        </SignUpButton>
        <Paragraph>Note: You can later login to Samooha as a <br /><b>Provider</b> or a <b>Customer</b></Paragraph>
      </CardContent>
      </CustomizedCard></Container>
  );
}