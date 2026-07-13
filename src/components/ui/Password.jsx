import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';


const ToggleMaskPassword = ({
    type,
    name,
    value,
    onChange,
    className,
    inputClassName,
    placeholder,
    feedback = false,
    toggleMask = true,
    ...props
}) => {
    return (
        <Password
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
            inputClassName={inputClassName}
            placeholder={placeholder}
            feedback={feedback}
            toggleMask={toggleMask}
            {...props}
        />
    );
};

export default ToggleMaskPassword;