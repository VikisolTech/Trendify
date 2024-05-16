import AuthButton from "./AuthButton";
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  nameValidator,
  emailValidator,
  phoneValidator,
} from "../../utils/validator";
import { RegisterContent } from "../../constants/content/LoginContent";


export function AuthRegisterForm(
) {

    const [firstName, setFirstName] = useState({
        value: "",
        error: "",
    });
    const [lastName, setLastName] = useState({
        value: "",
        error: "",
    });
    const [phoneNumber, setPhoneNumber] = useState({
        value: "",
        error: "",
    });
    const [email, setEmail] = useState({
        value: "",
        error: "",
    });

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        setFirstName({ value, error: nameValidator(value) });
    };

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        setLastName({ value, error: nameValidator(value) });
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber({ value, error: phoneValidator(value) });
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail({ value, error: emailValidator(value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const firstNameError = nameValidator(firstName.value);
        const lastNameError = nameValidator(lastName.value);
        const phoneNumberError = phoneValidator(phoneNumber.value);
        const emailError = emailValidator(email.value);

        // Update errors state
        setFirstName({ ...firstName, error: firstNameError });
        setLastName({ ...lastName, error: lastNameError });
        setPhoneNumber({ ...phoneNumber, error: phoneNumberError });
        setEmail({ ...email, error: emailError });

        // If no errors, submit form
        if (!firstNameError && !lastNameError && !phoneNumberError && !emailError) {
            console.log("Form submitted:", {
                firstName: firstName.value,
                lastName: lastName.value,
                phoneNumber: phoneNumber.value,
                email: email.value,
            });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="xl:contents">
                <TextField
                    className="self-center xl:flex xl:justify-center xl:max-w-full xl:ml-[60px] w-[100%] my-3"
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    name="firstName"
                    value={firstName.value}
                    onChange={handleFirstNameChange}
                    error={!!firstName.error}
                    helperText={firstName.error}
                />
                <TextField
                    className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    name="lastName"
                    value={lastName.value}
                    onChange={handleLastNameChange}
                    error={!!lastName.error}
                    helperText={lastName.error}
                />
                <TextField
                    className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    name="phoneNumber"
                    value={phoneNumber.value}
                    onChange={handlePhoneNumberChange}
                    error={!!phoneNumber.error}
                    helperText={phoneNumber.error}
                />
                <TextField
                    className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    value={email.value}
                    onChange={handleEmailChange}
                    error={!!email.error}
                    helperText={email.error}
                />
                <AuthButton label={RegisterContent.Register} />
            </form>
        </>
    )
}
export default AuthRegisterForm