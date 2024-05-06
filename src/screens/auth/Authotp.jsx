import { useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
export function Loginotp() {
  const inputs = useRef([]);
  const [error, setError] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleKeyDown = (e, index) => {
    if (
      !/^[0-9]{1}$/.test(e.key)
      && e.key !== 'Backspace'
      && e.key !== 'Delete'
      && e.key !== 'Tab'
      && !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    if (e.target.value && index < code.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    if (!new RegExp(`^[0-9]{${inputs.current.length}}$`).test(text)) {
      return;
    }
    const digits = text.split('').slice(0, inputs.current.length);
    const newCode = digits.map((digit) => digit || '');
    setCode(newCode);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  const expectedOTP = '123456';
    const enteredOTP = code.join('');
    if (enteredOTP === expectedOTP) {
      console.log('OTP is correct');
      setError(false);
    } else {
      console.log('OTP is incorrect');
      // Set error state if OTP is incorrect
      setError(true);
    }
  };


  return (
    <Typography className='container-fluid'>
    <Typography className="card" style={{ margin: "50px",borderRadius: "20px", background: "#FFFFFF", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>

        <Typography className="card-body" style={{ height: "650px", padding: "25px" }}>

          <Typography class="row">
            <Typography class="col-6">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <Typography>
                  <img src="../assests/trendify.png" alt="" style={{ width: "60px", height: "60px" }} />
                </Typography>
                <h4 variant="h6">Trendify</h4>
              </Box>
              <Box sx={{ ml: "60px", paddingTop: "18%", }}>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "25px",
                  fontSize: "15px"

                }}>
                  <Typography style={{ color: "#000000" }}>Please enter the code sent to 7024xxxxxx.<span style={{ color: "#C09562" }}> Change</span></Typography>

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
                  {/* Error message */}
                  {error && (
                    <Box sx={{ fontSize:"12px", marginTop: "10px"}}>
                      <Typography align="center" style={{ color: "#FF0000" }}>
                        Please enter valid code !
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
                  <Typography style={{ color: "#000000" }}>Not received your code? <span style={{ color: "#C09562" }}>00:08</span></Typography>

                </Box>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px"
                }}>
                  <Typography style={{ color: "#000000" }}>Not received your code? <span style={{ color: "#C09562", cursor: "pointer" }}>Resend Code</span></Typography>

                </Box>

              </Box>

            </Typography>
            <Typography class="col-6">
              <Box>   <img src='../assests/otpscreen.png' alt="" style={{  height: "625px" }} /></Box>
            </Typography>
          </Typography>


        </Typography>
      </Typography>

    </Typography>
  );
}

export default Loginotp;