import { useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
export function Otp() {
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
    // Hardcoded OTP for demonstration
    const expectedOTP = '123456';
    const enteredOTP = code.join('');
    if (enteredOTP === expectedOTP) {
      console.log('OTP is correct');
      // Reset error state if OTP is correct
      setError(false);
      // Here you can proceed with further actions, e.g., navigate to the next screen
    } else {
      console.log('OTP is incorrect');
      // Set error state if OTP is incorrect
      setError(true);
    }
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
              <Box sx={{ ml: "60px", paddingTop: "18%", }}>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "25px",
                  fontSize: "15px"

                }}>
                  <p style={{ color: "#000000" }}>Please enter the code sent to 7024xxxxxx.<span style={{ color: "#C09562" }}> Change</span></p>

                </Box>
                <form id="otp-form" onSubmit={handleSubmit}>
                  <Box sx={{ marginTop: "20px" }}>
                    <div className="flex items-center justify-center gap-2">
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
                    </div>
                  </Box>
                  {/* Error message */}
                  {error && (
                    <Box sx={{ fontSize:"12px", marginTop: "10px"}}>
                      <div align="center" style={{ color: "#FF0000" }}>
                        Please enter valid code !
                      </div>
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
                  <p style={{ color: "#000000" }}>Not received your code? <span style={{ color: "#C09562" }}>00:08</span></p>

                </Box>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px"
                }}>
                  <p style={{ color: "#000000" }}>Not received your code? <span style={{ color: "#C09562", cursor: "pointer" }}>Resend Code</span></p>

                </Box>

              </Box>

            </div>
            <div class="col-6">
              <Box>   <img src='../otpscreen.png' alt="" style={{  height: "625px" }} /></Box>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Otp;