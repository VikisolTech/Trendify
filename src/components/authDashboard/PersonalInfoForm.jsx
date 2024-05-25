import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { nameValidator, phoneValidator, emailValidator } from "../../utils/validator";
import { AddressContact } from "../../constants/content/dashboardContent";
import GenericButton from "../../components/authDashboard/GenericButton";
import { Typography } from "@mui/material";
import GenderDropdown from './GenderDropDown'; // Ensure the correct import path and casing

export function PersonalInfoForm() {
    const [nickname, setNickname] = useState({ value: "", error: "" });
    const [fullName, setFullName] = useState({ value: "", error: "" });
    const [phoneNumber, setPhoneNumber] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [gender, setGender] = useState({ value: '', error: '' });

    const handleNicknameChange = (e) => {
        const value = e.target.value;
        setNickname({ value, error: nameValidator(value) });
    };

    const handleFullNameChange = (e) => {
        const value = e.target.value;
        setFullName({ value, error: nameValidator(value) });
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber({ value, error: phoneValidator(value) });
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail({ value, error: emailValidator(value) });
    };

    const handleGenderChange = (event) => {
        setGender({ ...gender, value: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const nicknameError = nameValidator(nickname.value);
        const fullNameError = nameValidator(fullName.value);
        const phoneNumberError = phoneValidator(phoneNumber.value);
        const emailError = emailValidator(email.value);

        // Update errors state
        setNickname({ ...nickname, error: nicknameError });
        setFullName({ ...fullName, error: fullNameError });
        setPhoneNumber({ ...phoneNumber, error: phoneNumberError });
        setEmail({ ...email, error: emailError });

        // If no errors, submit form
        if (!nicknameError && !fullNameError && !phoneNumberError && !emailError) {
            console.log("Form submitted:", {
                nickname: nickname.value,
                fullName: fullName.value,
                phoneNumber: phoneNumber.value,
                email: email.value,
                gender: gender.value,
            });
        }
    };

    const genderOptions = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <form onSubmit={handleSubmit} className="xl:contents xl:w-full">
          
            <div className="flex gap-2 mt-5">
                <div className="w-full">
                    <div className="flex justify-start">
                        <Typography>First name <span className="text-[#FF0000]">*</span></Typography>
                    </div>
                    <TextField
                        className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                        id="outlined-basic-nickname"
                        variant="outlined"
                        name="nickname"
                        value={nickname.value}
                        onChange={handleNicknameChange}
                        error={!!nickname.error}
                        helperText={nickname.error}
                    />
                </div>
                <div className="w-full">

                    <Typography>Last name <span className="text-[#FF0000]">*</span></Typography>
                    <TextField
                        className="self-center xl:flex xl:justify-center xl:max-w-full xl:ml-[60px] w-[100%] my-3"
                        id="outlined-basic-fullname"
                        variant="outlined"
                        name="fullName"
                        value={fullName.value}
                        onChange={handleFullNameChange}
                        error={!!fullName.error}
                        helperText={fullName.error}
                    />
                </div>
            </div>
<div className="mt-5">
<Typography>Phone Number <span className="text-[#FF0000]">*</span></Typography>
            <TextField
                className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                id="outlined-basic-phone"
                variant="outlined"
                name="phoneNumber"
                value={phoneNumber.value}
                onChange={handlePhoneNumberChange}
                error={!!phoneNumber.error}
                helperText={phoneNumber.error}
            />
</div>
           <div className="mt-5">
           <Typography>Email <span className="text-[#FF0000]">*</span></Typography>
            <TextField
                className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                id="outlined-basic-email"
                variant="outlined"
                name="email"
                value={email.value}
                onChange={handleEmailChange}
                error={!!email.error}
                helperText={email.error}
            />
           </div>
            <div className="mt-5">
            <Typography>Gender</Typography>
            <div>
                <GenderDropdown
                    gender={gender}
                    handleGenderChange={handleGenderChange}
                    error={gender.error}
                    options={genderOptions}
                />
            </div>
            </div>
            
            <div className="flex justify-center mt-5">
                <GenericButton label={AddressContact.Update} height={'h-[50px]'} width={'w-[100px]'} />
            </div>
        </form>
    );
}

export default PersonalInfoForm;
