import React from 'react'
import AppTextInput from './AppTextInput'
import { useFormikContext } from 'formik' // to pass Formik objects (handleChange,setFieldTouched etc) from their originial class
import ErrorMessage from './ErrorMessage';
export default function AppFormField({ name,width, ...otherProps }) {
    
    const {setFieldTouched,handleChange,errors,touched} =useFormikContext();
    return (
        <React.Fragment>
        <AppTextInput
        // autoCapitalize="none" // *1* all these commented out props will be put in a signle object (otherProps) so we could use them when this component is used
        // autoCorrect={false} //*1*
        // icon="lock" //*1*
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)} // mark this field as touched using this function(setFieldTouched)
        {...otherProps}
        // placeholder="password" //*1*
        // secureTextEntry={true} // *1*
        width = {width}
            />
        <ErrorMessage
                error={errors[name]}
                visible={touched[name]} //view error only if it's been touched

        />
        </React.Fragment>
    )
}
