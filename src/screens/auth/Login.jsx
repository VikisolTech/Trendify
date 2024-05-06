import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { validateInput } from "../../utils/validator";
function Login() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputError = validateInput(input);
    if (inputError) {
      setInputError(inputError);
    } else {
      console.log("Entered email or phone number:", input);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Typography className="container-fluid">
      <Typography
        className="card"
        style={{
          margin: "50px",
          borderRadius: "20px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          className="card-body"
          style={{ height: "650px", padding: "25px" }}
        >
          <Typography class="row">
            <Typography class="col-6">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>
                  <img
                    src="../images/trendify.png"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </Typography>
                <h4 variant="h6">Trendify</h4>
              </Box>
              <Box sx={{ ml: "60px", paddingTop: "50px" }}>
                <h3 sx={{ marginBottom: "20px" }}>
                  Welcome back! Glad to see you, Again!
                </h3>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ marginTop: "25px" }}>
                    <TextField
                      id="exampleInputEmail1"
                      label="Email or Phone Number"
                      fullWidth
                      variant="standard"
                      name="email"
                      value={input}
                      onChange={handleInputChange}
                      error={!!inputError}
                      helperText={inputError}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "25px",
                    }}
                  >
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
                        width: "30%",
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#d7a072",
                        },
                      }}
                    >
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Request OTP
                      </button>
                    </Box>
                  </Box>
                </form>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Typography sx={{ color: "#000000", Text: "20px" }}>
                    OR
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    justifyContent: "space-evenly",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="../images/facebook.png"
                    alt=""
                    style={{ width: "150px", height: "50px" }}
                  />
                  <img
                    src="../images/google.png"
                    alt=""
                    style={{ width: "150px", height: "50px" }}
                  />
                  <img
                    src="../images/apple.png"
                    alt=""
                    style={{ width: "150px", height: "50px" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                    fontSize: "15px",
                  }}
                >
                  <Typography style={{ color: "#000000" }}>
                    Don’t have an account yet? {""}
                    <span style={{ color: "#C09562", cursor: "pointer" }}>
                      Sign up for free
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Typography>
            <Typography class="col-6">
              <Box>
                {" "}
                <img src="../images/login.png" alt="" style={{ height: "625px" }} />
              </Box>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
}

export default Login;
