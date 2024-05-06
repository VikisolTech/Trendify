import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can proceed with registration
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Typography className="container-fluid">
      <Typography className="card" style={{ margin: "50px",borderRadius: "20px", background: "#FFFFFF", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <Typography
          className="card-body"
          style={{ height: "670px", padding: "25px", }}
        >
          <Typography class="row">
            <Typography class="col-6">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>
                  <img
                    src="../trendify.png"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </Typography>
                <h4 variant="h6">Trendify</h4>
              </Box>
              <Box sx={{ ml: "60px", paddingTop: "10px" }}>
                <h3 sx={{ marginBottom: "25px" }}>
                  Hello! Register to get started
                </h3>


                <form onSubmit={handleSubmit}>
                  <TextField
                    style={{ marginTop: "12px", width: "100%" }}
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                  />
                  <TextField
                    style={{ marginTop: "8px", width: "100%" }}
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                  />
                  <TextField
                    style={{ marginTop: "8px", width: "100%" }}
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                  />
                  <TextField
                    style={{ marginTop: "8px", width: "100%" }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                  <Box style={{ textAlign: "center", marginTop: "15px" }}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#C09562",
                        borderRadius: "20px",
                        border: "1px solid #C09562",
                        color: "white",
                        padding: "10px",
                        width: "30%",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      Register
                    </button>
                  </Box>
                </form>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <Typography sx={{ color: "#000000", Text: "20px" }}>OR</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    justifyContent: "space-evenly",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="../Frame 3.png"
                    alt=""
                    style={{ width: "150px", height: "50px" }}
                  />
                  <img
                    src="../Frame 4.png"
                    alt=""
                    style={{ width: "150px", height: "50px" }}
                  />
                  <img
                    src="../Frame 5.png"
                    alt=""
                    style={{ width: "150px", height: "50px" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    fontSize: "15px",
                  }}
                >
                  <Typography style={{ color: "#000000" }}>
                    {" "}
                    Already have an account?{" "}
                    <span style={{ color: "#C09562", cursor: "pointer" }}>
                      Login Now
                    </span>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "15px",
                    marginTop: "5px",
                  }}
                >
                  <Typography style={{ color: "#000000" }}>
                    By continuing, I agree to the
                    <span style={{ color: "#C09562", cursor: "pointer" }}>
                      Terms of Use
                    </span>{" "}
                    and 
                    <span style={{ color: "#C09562", cursor: "pointer" }}>{" "}
                      privancy policy
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Typography>
            <Typography class="col-6">
              <Box>
                {" "}
                <img src="../register.png" alt="" style={{ height: "645px" }} />
              </Box>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
}

export default Register;