import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import { Formik } from "formik";
import * as Yup from "yup";
import client from "./api/client";
import { StackActions } from "@react-navigation/native";



const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, "invalid name")
    .required("Name is required"),
  email: Yup.string().email("Invalid email!").required("Name is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be more than 8")
    .required("Password is required!"),
  confirmPassword: Yup.string().equals([Yup.ref("password"), null]),
});



const SignUpForm = ({navigation}) => {


  const userInfo = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({ ...userInfo, [fieldName]: value });
  // };

  // const { fullname, email, password, confirmPassword } = userInfo;

  // const submitForm = () => {
  //   if (isValidForm()) {
  //     console.log("wull be pass to the backEnd server");
  //   }
  // };


  

 const signUp =  async (values, formikActions) => {
       const res = await client.post('/create-user', {
          ...values, 
        });
    if(res.data.success){
      const signInRes = await client.post('/sign-in',{email:values.email, password:values.password})
      if(signInRes.data.success){
        navigation.dispatch(
          StackActions.replace('ImageUpload', {
            token:signInRes.data.token,
          })
        )
      }
    }
      formikActions.resetForm();
      formikActions.setSubmitting(false)
}

  return (
    <FormContainer style={styles.container}>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
   {({
          values,
          errors,
          touched,
          handleChange,
          isSubmitting,
          handleBlur,
          handleSubmit,
        }) => {
          const { fullname, email, password, confirmPassword } = values;

      return(
        <View>
          <FormInput
            value={fullname}
            error={touched.fullname && errors.fullname}
            onChangeText={handleChange("fullname")}
            onBlur={handleBlur("fullname")}
            title="Name"
            placeholder="John Muller"
          />
          <FormInput
            value={email}
            onChangeText={handleChange("email")}
            error={touched.email && errors.email}
            onBlur={handleBlur("email")}
            autoCapitalize="none"
            title="Email"
            placeholder="example@email.com"
          />
          <FormInput
            value={password}
            onChangeText={handleChange("password")}
            error={touched.password && errors.password}
            onBlur={handleBlur("password")}
            secureTextEntry
            autoCapitalize="none"
            title="Password"
            placeholder="********"
          />
          <FormInput
            value={confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            error={touched.confirmPassword && errors.confirmPassword}
            onBlur={handleBlur("confirmPassword")}
            secureTextEntry
            autoCapitalize="none"
            title="Confirm Password"
            placeholder="********"
          />
          <FormSubmitBtn submitting={isSubmitting} onPress={handleSubmit} title="Sign up" />
        </View>
      )
     
        }}
      </Formik>
    </FormContainer>
  );
};
const styles = StyleSheet.create({});

export default SignUpForm;
