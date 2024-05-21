import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { nameValidator, phoneValidator } from "../../utils/validator";
import { AddressContact } from "../../constants/content/dashboardContent";
import GenericButton from "../../components/authDashboard/GenericButton"
import { Checkbox, Typography } from "@mui/material";



export function AddNewAddressForm() {
    const [nickname, setNickname] = useState({ value: "", error: "" });
    const [fullName, setFullName] = useState({ value: "", error: "" });
    const [phoneNumber, setPhoneNumber] = useState({ value: "", error: "" });
    const [alternatePhoneNumber, setAlternatePhoneNumber] = useState({ value: "", error: "" });
    const [city, setCity] = useState({ value: "", error: "" });
    const [landmark, setLandmark] = useState({ value: "", error: "" });
    const [state, setState] = useState({ value: "", error: "" });
    const [country, setCountry] = useState({ value: "", error: "" });
    const [building, setBuilding] = useState({ value: "", error: "" });
    const [area, setArea] = useState({ value: "", error: "" });
    const [addAlternatePhone, setAddAlternatePhone] = useState(false);
    const [addLandmark, setAddLandmark] = useState(false);

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
    const handleAlternatePhoneNumberChange = (e) => {
        const value = e.target.value;
        setAlternatePhoneNumber({ value, error: phoneValidator(value) });
    };

    const handleCityChange = (e) => {
        const value = e.target.value;
        setCity({ value, error: "" });
    };
    const handleLandmarkChange = (e) => {
        const value = e.target.value;
        setLandmark({ value, error: "" });
    };

    const handleStateChange = (e) => {
        const value = e.target.value;
        setState({ value, error: "" });
    };

    const handleCountryChange = (e) => {
        const value = e.target.value;
        setCountry({ value, error: "" });
    };

    const handleBuildingChange = (e) => {
        const value = e.target.value;
        setBuilding({ value, error: "" });
    };

    const handleAreaChange = (e) => {
        const value = e.target.value;
        setArea({ value, error: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const nicknameError = nameValidator(nickname.value);
        const fullNameError = nameValidator(fullName.value);
        const phoneNumberError = phoneValidator(phoneNumber.value);

        // Update errors state
        setNickname({ ...nickname, error: nicknameError });
        setFullName({ ...fullName, error: fullNameError });
        setPhoneNumber({ ...phoneNumber, error: phoneNumberError });

        // If no errors, submit form
        if (!nicknameError && !fullNameError && !phoneNumberError) {
            console.log("Form submitted:", {
                nickname: nickname.value,
                fullName: fullName.value,
                phoneNumber: phoneNumber.value,
                city: city.value,
                state: state.value,
                country: country.value,
                building: building.value,
                area: area.value,
                landmark: landmark.value
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="xl:contents">
            <div className="flex justify-start">
                <Typography>Address Nickname</Typography>

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
            <Typography>Full Name <span className="text-[#FF0000]">*</span></Typography>
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
            {addAlternatePhone && <div className="w-full">
                <Typography>Alternate Phone Number <span className="text-[#FF0000]">*</span></Typography>
                <TextField
                    className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                    id="outlined-basic-alternatePhone"
                    variant="outlined"
                    name="alternatePhoneNumber"
                    value={alternatePhoneNumber.value}
                    onChange={handleAlternatePhoneNumberChange}
                    error={!!alternatePhoneNumber.error}
                    helperText={alternatePhoneNumber.error}
                /></div>}
            <div onClick={() => { setAddAlternatePhone(!addAlternatePhone) }}>
                <p className="text-[#C09562] cursor-pointer text-base
font-semibold">{!addAlternatePhone ? AddressContact.AlternatePhoneNumber : AddressContact.RemoveAlternatePhoneNumber}</p>
            </div>
            <div className="flex gap-4 w-full">
                <div className="w-full">
                    <Typography>City</Typography>
                    <TextField
                        className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] my-3"
                        id="outlined-basic-city"
                        variant="outlined"
                        name="city"
                        value={city.value}
                        onChange={handleCityChange}
                        error={!!city.error}
                        helperText={city.error}
                    /></div>
                <div className="w-full">
                    <Typography>State</Typography>
                    <TextField
                        className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%]  my-3"
                        id="outlined-basic-state"
                        variant="outlined"
                        name="state"
                        value={state.value}
                        onChange={handleStateChange}
                        error={!!state.error}
                        helperText={state.error}
                    />
                </div>

            </div>
            <div className="flex gap-2 items-end">
                <div className="w-full">
                    <Typography>Country</Typography>
                    <TextField
                        className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                        id="outlined-basic-country"
                        variant="outlined"
                        name="country"
                        value={country.value}
                        onChange={handleCountryChange}
                        error={!!country.error}
                        helperText={country.error}
                    />
                </div>

                <GenericButton label={AddressContact.usemylocation} height={'h-[58px]'} width={'w-full'} image={AddressContact.gpsLocation} />
            </div>
            <Typography>House No., Building Name <span className="text-[#FF0000]">*</span></Typography>
            <TextField
                className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                id="outlined-multiline-static"
                multiline
                rows={5}
                variant="outlined"
                name="building"
                value={building.value}
                onChange={handleBuildingChange}
                error={!!building.error}
                helperText={building.error}
                InputProps={{
                    style: { height: '133px' }
                }}
            />
            <Typography>Road name, Area, Colony <span className="text-[#FF0000]">*</span></Typography>
            <TextField
                className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
                id="outlined-multiline-static"
                multiline
                rows={5}
                name="area"
                value={area.value}
                onChange={handleAreaChange}
                error={!!area.error}
                helperText={area.error}

            />
            <div onClick={()=>setAddLandmark(true)} >
                <p className="text-[#C09562] cursor-pointer text-base font-semibold">{AddressContact.NearbyFamous}</p>
            </div>

            {addLandmark && <div className="w-full">
                <Typography>Landmark</Typography>
                <TextField
                    className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] my-3"
                    id="outlined-basic-landmark"
                    variant="outlined"
                    name="landmark"
                    value={landmark.value}
                    onChange={handleLandmarkChange}
                    error={!!landmark.error}
                    helperText={landmark.error}
                /></div>}




            <div className="flex justify-center text-zinc-500 text-lg font-normal items-center">
                <Checkbox />
                <p className="py-[9px]">Make this as a default address</p>
            </div>
            <div className="flex justify-center" >
                <GenericButton label={AddressContact.AddressType} height={'h-[54px]'} width={'w-[340px]'} />
            </div>

        </form>
    )
}
export default AddNewAddressForm;
