import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../../utilities/validationsMethos";
import { Formik } from "formik";
import * as Yup from "yup";
import { TouchableNativeFeedback } from "react-native-web";

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, "invalid name")
    .required("Name is required"),
  email: Yup.string().email("Invalid name!").required("Name is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be more than 8")
    .required("Password is required!"),
  confirmPassword: Yup.string().equals([Yup.ref("password"), null]),
});

const SignUpForm = () => {

  const userInfo = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  }



  // const [error, setErorr] = useState("");

              //============ destructuering userInfo
         

                // ======= onChange handler.
                  //     const handleOnChangeText = (value, fieldName) => {
                  //       setUserInfo({ ...userInfo, [fieldName]: value });
                  //     };

                  // // =============this where we check our form if it valid or not.
                  // const isValidForm = () => {
                  //   if (!isValidObjField(userInfo))
                  //     return updateError("Required all fields!", setErorr);
                  //   if (!fullname.trim() || fullname.length < 3)
                  //     return updateError("invalid name", setErorr);
                  //   if (!isValidEmail(email)) return updateError("invalid email!", setErorr);
                  //   if (!password.trim() || password.length < 8)
                  //     return updateError("password less than 8 chracters", setErorr);
                  //   if (!password !== confirmPassword)
                  //     return updateError("password must be the same", setErorr);
                  //   return true;
                  // };

                    // subimt the form after we check if the data is valid.
                    const submitForm = () => {
                      if (isValidForm()) {
                      }
                    };

  return (
    <FormContainer style={styles.container}>
      {/* when using Formik along with Yup to validate our form.  */}
      <Formik initialValues={userInfo} validationSchema={validationSchema} onSubmit={(values, formikActions)=>{
        console.log(values)
      }}>
        {({ values, errors, touched,  handleChange , handleBlur, handleSubmit}) => {
  // console.log(values)
          const { fullname, email, password, confirmPassword } = values;

            (
            <>
              <FormInput
                value={fullname}
                error={touched.fullname && errors.fullname}
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur('fullname')}
                title="Name"
                placeholder="John Muller"
              />
              <FormInput
                value={email}
                onChangeText={handleChange("email")}
                error={touched.email && errors.email}
                onBlur={handleBlur('email')}
                autoCapitalize="none"
                title="Email"
                placeholder="example@email.com"
              />
              <FormInput
                value={password}
                onChangeText={handleChange("password")}
                error={touched.password && errors.password}
                onBlur={handleBlur('password')}
                secureTextEntry
                autoCapitalize="none"
                title="Password"
                placeholder="*********"
              />
              <FormInput
                value={confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                error={touched.confirmPassword && errors.confirmPassword}
                onBlur={handleBlur('confirmPassword')}
                secureTextEntry
                autoCapitalize="none"
                title="Confirm Password"
                placeholder="************"
              />
              <FormSubmitBtn onPress={handleSubmit} title="Sign up" />
            </>
          );
        }}
      </Formik>
      {/* {error ? <Text style={{color:'red', marginTop:20,  fontSize:14, textAlign:'center'}}>{error}</Text> : null} */}
    </FormContainer>
  );
};
const styles = StyleSheet.create({});

export default SignUpForm;
