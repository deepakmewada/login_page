import React from "react";
import { TextField } from "@mui/material";

interface FormInputProps {
    label: string;
    name: string;
    onChange: Function;
}

export default function FormInput({
    label, name, onChange
}: FormInputProps) {
    return <TextField label={label} name={name} onChange={(e) => onChange(e)} className="input-container" variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
}