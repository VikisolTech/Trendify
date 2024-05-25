import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const CheckboxGroup = ({ title, options, checkedItems, onChange }) => {
    return (
        <div style={{ marginBottom: '16px' }}>
            <Typography sx={{fontSize:"25px"}}>{title}</Typography>
            <FormGroup>
                {options.map((option) => (
                    <FormControlLabel
                        key={option}
                        control={
                            <Checkbox
                                checked={checkedItems[option] || false}
                                onChange={onChange}
                                name={option}
                                value={option}
                                style={{ fontSize: '18px' }}
                            />
                        }
                        label={option}
                    />
                ))}
            </FormGroup>
        </div>
    );
};

export default CheckboxGroup;
