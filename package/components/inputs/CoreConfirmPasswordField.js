import React from "react";

import { SCTextField } from "../../styledComponents/inputs/SCTextField";

export default function CoreConfirmPasswordField (props) {
  return (
    <SCTextField
      id={props.id}
      label={props.label}
      variant="standard"
      value={props.value}
      onChange={props.onChange}
      required={props.formik ? false : props.required}
      placeholder={props.placeholder}
      disabled={props.disabled}
      max={props.max}
      min={props.min}
      type={"password"}
      helperText={
        props.formik &&
        props.formik.errors[props.id] &&
        props.formik.touched[props.id]
          ? props.formik.errors[props.id]
          : props.helperText
      }
      error={
        props.formik &&
        props.formik.errors[props.id] &&
        props.formik.touched[props.id]
          ? props.formik.errors[props.id]
          : false
      }
    />
    // <span className='input-field'>
    //     {props.label ?
    //         <label
    //             htmlFor={props.id}
    //             className={props.value||props.type==="date"||props.type==="datetime" ? 'left active active-custom left-align' : 'left left-align'}
    //             style={{ pointerEvents: 'all !important' }}
    //         >
    //             {props.label}
    //         </label>
    //         : null
    //     }
    //     <input
    //         type={
    //             showPassword ? 'text' : props.type
    //         }
    //         id={props.id}
    //         name={props.id}
    //         value={props.value}
    //         onChange={props.onChange}
    //         required={props.formik ? false : props.required}
    //         placeholder={props.placeholder}
    //         style={props.style}
    //         disabled={props.disabled}
    //         max={props.max}
    //         min={props.min}
    //     />
    //     {props.type === 'password' ?
    //         <span toggle="#password" className="field-icon toggle-password"
    //         onClick={onTogglePassword}>
    //             <i className="material-icons">
    //                {!showPassword?"visibility":"visibility_off"}
    //             </i>
    //         </span>
    //         :
    //         null
    //     }
    //     {
    //         props.helperText ?
    //             <p className='left-align helper-text'>{props.helperText}</p>
    //             : null
    //     }
    //     {
    //         props.formik && props.formik.errors[props.id] && props.formik.touched[props.id] ?
    //         <div className='error-div'>
    //             <span>{props.formik.errors[props.id]}</span>
    //         </div>
    //             : null
    //     }
    // </span>
  );
};
