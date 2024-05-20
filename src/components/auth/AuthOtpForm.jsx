import { Box, Typography, Button } from '@mui/material';
import { validateOTP } from '../../utils/validator';
import { OtpContent, } from '../../constants/content/LoginContent'
import { useState, useRef } from 'react';
import { AuthRoutes } from "../../constants/routes";
import AuthButton from "./AuthButton";



export function AuthOtpForm() {
    const inputs = useRef([]);
    const [error, setError] = useState(false);
    const [code, setCode] = useState(['', '', '', '', '', '']);

    const handleKeyDown = (e, index) => { };
    const handleInput = (e, index) => {
        const { value } = e.target;
        setCode((prev) => {
            const newCode = [...prev];
            newCode[index] = value;
            return newCode;
        });
    
      
        if (value && index < code.length - 1) {
            inputs.current[index + 1].focus();
        }
    };
    
    const handleFocus = (e) => { };
    const handlePaste = (e) => { };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const enteredOTP = code.join('');
        const validation = validateOTP(enteredOTP);
        if(
           validation.isValid
        ){
       window.location.href= AuthRoutes.register
        } else{
            setError(!validation.isValid);
        }
       

    };
    const errorInputStyle="bg-[#FF00001A] border-b-[#FF0000]"
    const successStyle="border-b-[#2BA2DD] bg-slate-100"

    return (
        <>
            <form id="otp-form" onSubmit={handleSubmit}>
                <Box sx={{ marginTop: "20px" }}>
                    <Typography className="flex items-center justify-center gap-2">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                className={`w-10 h-10 text-center text-2xl  border-b-[#2BA2DD] text-slate-900 ${error?errorInputStyle: code[index]?successStyle: "bg-slate-100"} border border-transparent hover:border-slate-200 appearance-none rounded  outline-none
                                 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`}
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
                    <Box sx={{ fontSize: "12px", marginTop: "10px" }}>
                        <Typography align="center" style={{ color: "#FF0000" }}>
                            {OtpContent.validCode}
                        </Typography>
                    </Box>
                )}
                  <AuthButton label={OtpContent.Verify} />
                 
              
            </form>
        </>
    )
}
export default AuthOtpForm