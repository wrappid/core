import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import CoreClasses from "../../styles/CoreClasses";
import CoreIconButton from "./CoreIconButton";
import CoreInput from "./CoreInput";
import CoreInputAdornment from "./CoreInputAdornment";

export default function CoreInputPassword(props) {
  const [showPassword, togglePasswordView] = useState(false);

  const handleClickShowPassword = () => {
    togglePasswordView(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <CoreInput
      {...props}
      type="password"
      showPassword={showPassword}
      endAdornment={
        <CoreInputAdornment
          position="end"
          styleClasses={[CoreClasses.PADDING.PR1]}
        >
          <CoreIconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </CoreIconButton>
        </CoreInputAdornment>
      }
    />
  );
};
