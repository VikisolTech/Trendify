import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { nameValidator, emailValidator, phoneValidator } from "../../utils/validator";
import { mainContent } from "../../constants/content/mainContent";
import { RegisterContent } from "../../constants/content/LoginContent";
import { loginContent } from "../../constants/content/LoginContent";

function Register() {
  const [firstName, setFirstName] = useState({
    value: "",
    error: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
    error: "",
  });
  const [phoneNumber, setPhoneNumber] = useState({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName({ value, error: nameValidator(value) });
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName({ value, error: nameValidator(value) });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber({ value, error: phoneValidator(value) });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail({ value, error: emailValidator(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const firstNameError = nameValidator(firstName.value);
    const lastNameError = nameValidator(lastName.value);
    const phoneNumberError = phoneValidator(phoneNumber.value);
    const emailError = emailValidator(email.value);

    // Update errors state
    setFirstName({ ...firstName, error: firstNameError });
    setLastName({ ...lastName, error: lastNameError });
    setPhoneNumber({ ...phoneNumber, error: phoneNumberError });
    setEmail({ ...email, error: emailError });

    // If no errors, submit form
    if (!firstNameError && !lastNameError && !phoneNumberError && !emailError) {
      console.log("Form submitted:", {
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="card" style={{ margin: "50px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <div className="card-body" style={{ padding: "25px" }}>
          <div className="row">
            <div className="col-md-6">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>
                  <img src={mainContent.appLogo} alt="logo" style={mainContent.style} />
                </Typography>
                <h4 variant="h6">{mainContent.appName}</h4>
              </Box>
              <Box sx={{ ml: "60px", paddingTop: "10px" }}>
                <h3 sx={{ marginBottom: "25px" }}>{RegisterContent.registerHeader}</h3>
                <form onSubmit={handleSubmit}>
                  <TextField
                    style={{ marginTop: "12px", width: "100%" }}
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    name="firstName"
                    value={firstName.value}
                    onChange={handleFirstNameChange}
                    error={!!firstName.error}
                    helperText={firstName.error}
                  />
                  <TextField
                    style={{ marginTop: "8px", width: "100%" }}
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    name="lastName"
                    value={lastName.value}
                    onChange={handleLastNameChange}
                    error={!!lastName.error}
                    helperText={lastName.error}
                  />
                  <TextField
                    style={{ marginTop: "8px", width: "100%" }}
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    name="phoneNumber"
                    value={phoneNumber.value}
                    onChange={handlePhoneNumberChange}
                    error={!!phoneNumber.error}
                    helperText={phoneNumber.error}
                  />
                  <TextField
                    style={{ marginTop: "8px", width: "100%" }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    value={email.value}
                    onChange={handleEmailChange}
                    error={!!email.error}
                    helperText={email.error}
                  />
                  <Box sx={{ textAlign: "center", marginTop: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "#C09562",
                        color: "white",
                        borderRadius: "20px",
                        width: "150px",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      {RegisterContent.Register}
                    </Button>
                  </Box>

                </form>
              </Box>
              {/* Social Media Icons and Login link */}
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "15px" }}>
                <Typography style={{ color: "#000000" }}>{loginContent.or}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", justifyContent: "space-evenly", cursor: "pointer" }}>
                <img src={loginContent.FacebookImg} alt="facebook" style={loginContent.style} />
                <img src={loginContent.googleImg} alt="google" style={loginContent.style} />
                <img src={loginContent.appleImg} alt="apple" style={loginContent.style} />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px", fontSize: "15px" }}>
                <Typography style={{ color: "#000000" }}>{RegisterContent.doYouHaveaccount} <span style={{ color: "#C09562", cursor: "pointer" }}>{loginContent.loginNow}</span></Typography>
              </Box>
              {/* Terms and conditions */}
              <Box sx={{ display: "flex", justifyContent: "center", fontSize: "15px", marginTop: "5px" }}>
                <Typography style={{ color: "#000000" }}>
                  {RegisterContent.continuingIagree}
                  <span style={{ color: "#C09562", cursor: "pointer" }}>{RegisterContent.TermsUse}</span> {RegisterContent.and}
                  <span style={{ color: "#C09562", cursor: "pointer" }}>{RegisterContent.privacy}</span>
                </Typography>
              </Box>
            </div>
            {/* Image column */}
            <div className="col-md-6 d-none d-md-block">
              <img src={RegisterContent.registerLogo} alt="img" style={{ height: "645px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
