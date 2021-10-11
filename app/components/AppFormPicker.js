import React from 'react'
import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik' // to pass Formik objects (handleChange,setFieldTouched etc) from their originial class
// uses the AppPicker component to make the code neater
export default function AppFormPicker({ items, name,width,placeholder,PickerItemComponent,numberOfColumns }) {
    const {setFieldValue,values,errors,touched} =useFormikContext(); // we using this (useFormikContext) to get these objects within braces

    return (
        <React.Fragment>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(items) => setFieldValue(name, items)} // this event is fired when the user selects a value
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
           />
            <ErrorMessage error={errors[name]} visible = {touched[name]}/>
        </React.Fragment>
    )
}
