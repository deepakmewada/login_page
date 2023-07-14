import React, { useState } from 'react';
import { Streamlit } from "streamlit-component-lib";
import { Card, CardContent, Button } from '@mui/material';
import { FormInput, FormPasswordInput } from './common/form';

const logo = require("./../assets/images/samooha_logo.png")

export default function Login() {
  const [formData, setFormData] = useState({
    account: "", username: "", password: ""
  })
  const isFormValid = formData?.account !== "" && formData?.username !== "" && formData?.password !== "";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    alert(`Submitted Form Datra : ${JSON.stringify(formData)}`);
    Streamlit.setComponentValue(`Submitted Form Datra : ${JSON.stringify(formData)}`)
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardContent>
          <img src={logo} alt="Samooha Logo" className="login-logo" />
          <h2>Sign up using snowflake account</h2>
          <FormInput label="Account locator" name="account" onChange={handleInputChange} />
          <FormInput label="Username" name="username" onChange={handleInputChange} />
          <FormPasswordInput label="Password" name="password" onChange={handleInputChange} />
          <p>By signing up, I agree to the &nbsp;
            <b><a href="https://samooha.tech" target="_target" >Terms of Service</a></b>&nbsp; and &nbsp;
            <b><a href="https://samooha.tech" target="_target">Privacy policy</a></b></p>
          <Button className="login-button-submit" size="large" variant="contained" disableElevation disabled={!isFormValid} onClick={handleSubmit}>
            Sign up
          </Button>
          <p>Note: You can later login to Samooha as a <br /><b>Provider</b> or a <b>Customer</b></p>
        </CardContent>
      </Card>
    </div>
  );
}