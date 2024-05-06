import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';


function Home() {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');

  const validateInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Adjust the phone number regex according to your requirements
    if (!emailRegex.test(input) && !phoneRegex.test(input)) {
      setInputError('Please enter a valid email or phone number');
      return false;
    }
    setInputError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInput()) {
      console.log('Entered email or phone number:', input);
      // Proceed with sending OTP or other actions
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className='container-fluid'>
      <div className="card" style={{ margin: "50px", background: "#FFFFFF" }}>

        <div className="card-body" style={{ height: "650px", padding: "25px" }}>

          <div class="row">
            <div class="col-6">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <div>
                  <img src="../trendify.png" alt="" style={{ width: "60px", height: "60px" }} />
                </div>
                <h4 variant="h6">Trendify</h4>
              </Box>
              <Box sx={{ ml: "60px", paddingTop: "50px" }}>
                <h3 sx={{ marginBottom: "20px" }} >Welcome back! Glad to see you, Again!</h3>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ marginTop: "25px" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email or Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={input}
                      onChange={handleInputChange}
                    />
                    {inputError && <p style={{ color: 'red', fontSize: "12px" }}>{inputError}</p>}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "25px"
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
                      <button type="submit" style={{ backgroundColor: "transparent", border: "none", color: "white", cursor: "pointer" }}>Request OTP</button>
                    </Box>
                  </Box>
                </form>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px"
                }}
                >
                  <p sx={{ color: "#000000", Text: "20px" }}>OR</p>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px", justifyContent: "space-evenly", cursor: "pointer"  , }}>
                  <img src="../Frame 3.png" alt="" style={{ width: "150px", height: "50px" }} />
                  <img src="../Frame 4.png" alt="" style={{ width: "150px", height: "50px" }} />
                  <img src="../Frame 5.png" alt="" style={{ width: "150px", height: "50px" }} />
                </Box>

                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "25px",
                  fontSize:"15px"
                }}>
                  <p style={{ color: "#000000" }}>Don’t have an account yet? <span  style={{ color: "#C09562",cursor:"pointer" }}>Sign up for free</span></p>
                </Box>

              </Box>

            </div>
            <div class="col-6">
              <Box>   <img src='../login 1.png' alt="" style={{  height: "625px" }} /></Box>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Home;
