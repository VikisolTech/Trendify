import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { validateInput } from "../../utils/validator";
import { mainContent } from "../../constants/content/mainContent";
import { loginContent } from "../../constants/content/LoginContent";

function Login() {
  const [inputEmail, setInputEmail] = useState({
    value: '',
    error: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validateInput(inputEmail);
    if (error) {
      setInputEmail({...inputEmail, error: error});
    } else {
      console.log("Entered email or phone number:", inputEmail);
    }
  };

  const handleInputChange = (event) => {
    setInputEmail({ value: event.target.value, error: "" });
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
              <Box sx={{ ml: { xs: "0px", md: "60px" }, paddingTop: "50px" }}>
                <h3 sx={{ marginBottom: "20px" }}>{loginContent.loginHeader}</h3>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ marginTop: "25px" }}>
                    <TextField
                      id="exampleInputEmail1"
                      label="Email or Phone Number"
                      fullWidth
                      variant="standard"
                      name="email"
                      value={inputEmail.value}
                      onChange={handleInputChange}
                      error={!!inputEmail.error}
                      helperText={inputEmail.error}
                    />
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    <Box
                      sx={{
                        borderRadius: "20px",
                        border: "1px solid #C09562",
                        backgroundColor: "#C09562",
                        textAlign: "center",
                        color: "white",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "150px", 
                        
                        transition: "background-color 0.3s ease",
                        "&:hover": { backgroundColor: "#d7a072" },
                      }}
                    >
                      <button
                        type="submit"
                        style={{ backgroundColor: "transparent", border: "none", color: "white", cursor: "pointer" }}
                      >
                        {loginContent.loginRequest}
                      </button>
                    </Box>
                  </Box>
                </form>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                  <Typography sx={{ color: "#000000", Text: "20px", }}>{loginContent.or}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px", justifyContent: "space-evenly", cursor: "pointer" }}>
                  <img src={loginContent.FacebookImg} alt="facebook" style={loginContent.style} />
                  <img src={loginContent.googleImg} alt="google" style={loginContent.style} />
                  <img src={loginContent.appleImg} alt="apple" style={loginContent.style} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "25px", fontSize: "15px" }}>
                  <Typography style={{ color: "#000000" }}>{loginContent.dontHaveAccount} <span style={{ color: "#C09562", cursor: "pointer" }}>{loginContent.singUp}</span></Typography>
                </Box>
              </Box>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img src={loginContent.loginImg} alt="login" style={{ height: "625px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
