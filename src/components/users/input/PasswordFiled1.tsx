import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { LoginSchemaType } from "../../../hooks/LoginSchema";

type InputProps = {
  label: Path<LoginSchemaType>;
  register: UseFormRegister<LoginSchemaType>;
  required: boolean;
  defaultValue: string;
  error?: boolean;
  helperText: string | undefined;
  id: string;
  placeholder: string;
  type: string;
};
const inputProps = {
  step: 300,
};

const PasswordFiled1 = ({
  label,
  register,
  placeholder,
  type,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      autoFocus
      margin="normal"
      variant="standard"
      type={showPassword ? "text" : "password"}
      fullWidth
      placeholder={placeholder}
      inputProps={inputProps}
      {...register(label, { required: true })}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle Password visibility"
              onClick={handleClick}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordFiled1;