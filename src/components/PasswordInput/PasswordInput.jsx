import React from "react";
import {Controller} from "react-hook-form";
import {IconButton, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export default function PasswordInput(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({field, fieldState, formState}) => {
                return <TextField label={props.label} {...field} helperText={fieldState.error?.message}
                                  error={fieldState.error != null} fullWidth
                                  InputProps={{
                                      endAdornment: <IconButton
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                      >
                                          {showPassword ? <VisibilityOff/> : <Visibility/>}
                                      </IconButton>,
                                      type: showPassword ? "text" : "password"
                                  }}/>
            }}
            rules={{
                required: {value: true, message: "A senha é obrigatória"},
                minLength: {value: props.minLen, message: `A senha deve ter pelo menos ${props.minLen} caracteres`},
                maxLength: {value: props.maxLen, message: `A senha deve ter no máximo ${props.maxLen} caracteres`}
            }}
        />
    );
}
