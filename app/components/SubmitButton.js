import React from 'react'
import AppButton from './AppButton'
import { useFormikContext } from 'formik' // to pass Formik objects (handleChange,setFieldTouched etc) from their originial class

export default function SubmitButton({ title }) {
    const {handleSubmit} =useFormikContext();

    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
        >
        </AppButton>
    )
}
