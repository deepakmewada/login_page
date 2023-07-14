import React, { useState } from "react";
import { FilledInput, FormControl, InputAdornment, InputLabel, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface FormPasswordInputProps {
    label: string;
    name: string;
    onChange: Function;
}

export default function FormPasswordInput({
    label, name, onChange
}: FormPasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return <FormControl className="input-container" variant="filled" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <FilledInput
            type={showPassword ? 'text' : 'password'}
            disableUnderline={true}
            name={name}
            onChange={(e) => onChange(e)}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>
}