// 'use client';
// import { Eye } from '@primeicons/react/eye';
// import { EyeSlash } from '@primeicons/react/eye-slash';
// import { IconField } from '@primereact/ui/iconfield';
// import { InputPassword } from '@primereact/ui/inputpassword';
// import * as React from 'react';

// const ToggleMaskPassword = () => {
//     const [mask, setMask] = React.useState(true);

//     return (
//         <div className="flex justify-center">
//             <IconField.Root>
//                 <InputPassword mask={mask} onMaskChange={(e) => setMask(e.value)} />
//                 <IconField.Inset>{mask ? <Eye onClick={() => setMask(false)} /> : <EyeSlash onClick={() => setMask(true)} />}</IconField.Inset>
//             </IconField.Root>
//         </div>
//     );
// }

// export default ToggleMaskPassword;


// import { Eye } from '@primeicons/react/eye';
// import { EyeSlash } from '@primeicons/react/eye-slash';
// // import { InputPasswordMaskChangeEvent } from '@primereact/ui/inputpassword';
// import { IconField } from '@primereact/ui/iconfield';
// import { InputPassword } from '@primereact/ui/inputpassword';
// import * as React from 'react';

// const ToggleMaskPassword = () => {
//     const [mask, setMask] = React.useState(true);

//     return (
//         <div className="flex justify-center">
//             <IconField.Root>
//                 <InputPassword
//                     mask={mask}
//                     onMaskChange={(e) => setMask(e.value)}
//                 />
//                 <IconField.Inset>
//                     {mask ? (
//                         <Eye onClick={() => setMask(false)} />
//                     ) : (
//                         <EyeSlash onClick={() => setMask(true)} />
//                     )}
//                 </IconField.Inset>
//             </IconField.Root>
//         </div>
//     );
// }

// export default ToggleMaskPassword;



import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

// const ToggleMaskPassword = () => {
//     const toast = useRef(null);

//     const show = () => {
//         toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
//     };

//     const formik = useFormik({
//         initialValues: {
//             value: ''
//         },
//         validate: (data) => {
//             let errors = {};

//             if (!data.value) {
//                 errors.value = 'Password is required.';
//             }

//             return errors;
//         },
//         onSubmit: (data) => {
//             data && show();
//             formik.resetForm();
//         }
//     });

//     const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

//     const getFormErrorMessage = (name) => {
//         return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
//     };

//     return (
//         <div className="card flex justify-content-center">
//             <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
//                 <Toast ref={toast} />
//                 <Password
//                     inputId="in_value"
//                     name="value"
//                     rows={5}
//                     cols={30}
//                     className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
//                     value={formik.values.value}
//                     feedback={false}
//                     onChange={(e) => {
//                         formik.setFieldValue('value', e.target.value);
//                     }}
//                     toggleMask 
//                 />
//                 {getFormErrorMessage('value')}
//             </form>
//         </div>
//     )
// }

// export default ToggleMaskPassword;


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