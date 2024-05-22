import React from 'react';
import { TextField, MenuItem, FormControl } from '@mui/material';

const GenderDropdown = ({ gender, handleGenderChange, error, options }) => {
    return (
        <FormControl
            className="self-center xl:flex xl:justify-center xl:max-w-full w-[100%] xl:ml-[60px] my-3"
            variant="outlined"
            error={!!error}
        >
            <TextField
                select
                value={gender.value}
                onChange={handleGenderChange}
                variant="outlined"
                error={!!error}
                helperText={error}
                fullWidth
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    );
};

export default GenderDropdown;
