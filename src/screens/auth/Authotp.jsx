
import { Box, Typography, Button } from '@mui/material';
import { validateOTP } from '../../utils/validator';
import { mainContent } from '../../constants/content/mainContent';
import { OtpContent, } from '../../constants/content/LoginContent';
import AuthLogo from '../../components/auth/AuthLogo';
import AuthOtpForm from '../../components/auth/AuthOtpForm';
import AuthButton from '../../components/auth/AuthButton';
import { AuthPrefix, AuthSuffix } from "../../components/auth/AuthPrefixSuffix";
export function Loginotp() {

  return (
    <div className="w-screen flex bg-authBgColor h-screen  justify-center items-center">
      <div className="w-[90%]  h-[90%] flex flex-col xl:flex-row items-center  xl:items-end bg-white rounded-md px-4 py-4 xl:justify-between">
        <div className="xl:w-[50%] xl:self-center xl:flex flex-col xl:items-center xl:h-full">
          <div className="m-7 xl:self-start xl:mb-18">
            <AuthLogo />
          </div>
          <div className="flex flex-col items-center mt-20">


            <div className="flex flex-row mt-3 xl:justify-center justify-center gap-2 flex-wrap my-4 text-center ">
              <AuthPrefix  fontSize={"xl:text-[23px] text-base"}label={OtpContent.phoneNumber} />
              <AuthSuffix  fontSize={"xl:text-[23px] text-base" }label={OtpContent.Change} />
            </div>

            <AuthOtpForm />
            <div className="flex flex-row  mt-3 xl:justify-center justify-center gap-2">
              <AuthPrefix label={OtpContent.received} />
              <AuthSuffix label={OtpContent.time} />
            </div>
            <div className="flex flex-row mt-3 xl:justify-center justify-center gap-2">
              <AuthPrefix label={OtpContent.received} />
              <AuthSuffix label={OtpContent.Resend} />
            </div>
          </div>
        </div>
        <div className="hidden xl:flex w-[50%] xl:min-h-full">
          <img src={OtpContent.OtpImg} />
        </div>
      </div>
    </div>
  );
}

export default Loginotp;

