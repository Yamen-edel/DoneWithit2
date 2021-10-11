import React from 'react'
import {  Formik } from 'formik'
// this component is created to keep our code clean and tidy
export default function AppForm({initialValues,onSubmit,validationSchema,children}) {
    return (
        <Formik
                initialValues={initialValues}
                onSubmit={onSubmit} // this fucntion will get called when submitted
                validationSchema = {validationSchema}
        >
        {() => ( // we use fragment when we want to render a JSX expression but only takes one component, so we wrap it in Fragments to allow it
            <React.Fragment>
                {children}
                {/* <AppTextInput // /3/ before
            //     autoCapitalize="none"
            //     autoCorrect={false}
            //     icon="email"
            //     placeholder="Email"
            //     keyboardType="email-address"
            //     //onChangeText = {text=> setEmail(text)}
            //         onChangeText={handleChange("email")}
            //         onBlur={()=> setFieldTouched("email")}
            //     
            //     <ErrorMessage
            //         error={errors.email}
            //         visible={touched.email}
            //     /> */}
            </React.Fragment>
        )}
        </Formik>

    )
}
