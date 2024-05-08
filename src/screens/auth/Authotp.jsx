import { useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { validateOTP } from '../../utils/validator';
import { mainContent } from '../../constants/content/mainContent';
import { OtpContent, } from '../../constants/content/LoginContent';
export function Loginotp() {
  const inputs = useRef([]);
  const [error, setError] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleKeyDown = (e, index) => {
    
  };

  const handleInput = (e, index) => {
    
  };

  const handleFocus = (e) => {
    
  };

  const handlePaste = (e) => {
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOTP = code.join('');
    const validation = validateOTP(enteredOTP); 
    setError(!validation.isValid); 
  };


  return (
    <Typography className='container-fluid'>
    <Typography className="card" style={{ margin: "50px",borderRadius: "20px", background: "#FFFFFF", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>

        <Typography className="card-body" style={{ height: "650px", padding: "25px" }}>

          <Typography class="row">
            <Typography class="col-6">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Typography>
                  <img src={mainContent.appLogo} alt="logo" style={mainContent.style} />
                </Typography>
                <h4 variant="h6">{mainContent.appName}</h4>
              </Box>
              <Box sx={{ ml: "60px", paddingTop: "18%", }}>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "25px",
                  fontSize: "15px"

                }}>
                  <Typography style={{ color: "#000000" }}>{OtpContent.phoneNumber}<span style={{ color: "#C09562" }}> Change</span></Typography>

                </Box>
                <form id="otp-form" onSubmit={handleSubmit}>
                  <Box sx={{ marginTop: "20px" }}>
                    <Typography className="flex items-center justify-center gap-2">
                      {code.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded  outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleInput(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onFocus={handleFocus}
                          onPaste={handlePaste}
                          ref={(el) => (inputs.current[index] = el)}
                        />
                      ))}
                    </Typography>
                  </Box>
                  {error && (
                    <Box sx={{ fontSize:"12px", marginTop: "10px"}}>
                      <Typography align="center" style={{ color: "#FF0000" }}>
                      {OtpContent.validCode}
                      </Typography>
                    </Box>

                  )}
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
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#d7a072",
                        },
                      }}
                      onSubmit={handleSubmit}
                    >
                      <button  style={{ backgroundColor: "transparent", border: "none", color: "white" }}>Verify</button>
                    </Box>
                  </Box>
                </form>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "25px",
                  fontSize: "15px"
                }}>
                  <Typography style={{ color: "#000000" }}>{OtpContent.received} <span style={{ color: "#C09562" }}>{OtpContent.time}</span></Typography>

                </Box>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px"
                }}>
                  <Typography style={{ color: "#000000" }}>{OtpContent.received} <span style={{ color: "#C09562", cursor: "pointer" }}>{OtpContent.Resend}</span></Typography>

                </Box>

              </Box>

            </Typography>
            <Typography class="col-6">
              <Box>   <img src={OtpContent.OtpImg} alt="" style={{  height: "625px" }} /></Box>
            </Typography>
          </Typography>


        </Typography>
      </Typography>

    </Typography>
  );
}

export default Loginotp;