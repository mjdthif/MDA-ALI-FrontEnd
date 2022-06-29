import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";



const isValidObjField = (obj)=>{
      // we convert the userInfo object to an array.
    // to check if the fileds have values, 
  return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater)=>{
   stateUpdater(error)
   setTimeout(() => {
    stateUpdater("")
   }, 2500);
}

const isValidEmail = (value)=>{
      const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regx.test(value)
}
const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [error, setErorr]= useState('')
  const { fullName, email, password, confirmPassword } = userInfo;

// 
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };





  const isValidForm=()=>{
   if(!isValidObjField(userInfo)) return updateError("Required all fields!", setErorr)
   if(!fullName.trim()|| fullName.length<3)return updateError("invalid name", setErorr)
   if(!isValidEmail(email))return updateError("invalid email!", setErorr)
   if(!password.trim()|| password.length<8)return updateError("password less than 8 chracters", setErorr)
   if(!password !== confirmPassword)return updateError("password must be the same", setErorr)
   return true;
  }






  const submitForm =()=>{
     if(isValidForm()){
          console.log(userInfo)
     }
  }
  return (
    <FormContainer style={styles.container}>
      {error ? <Text style={{color:'red', marginTop:20,  fontSize:14, textAlign:'center'}}>{error}</Text> : null}
      <FormInput
        value={fullName}
        onChangeText={(value) => handleOnChangeText(value, "fullName")}
        title="Name"
        placeholder="John Muller"
      />
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        autoCapitalize="none"
        title="Email"
        placeholder="example@email.com"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        secureTextEntry
        autoCapitalize="none"
        title="Password"
        placeholder="*********"
      />
      <FormInput
        value={confirmPassword}
        onChangeText={(value) => handleOnChangeText(value, "confirmPassword")}
        secureTextEntry
        autoCapitalize="none"
        title="Confirm Password"
        placeholder="************"
      />
      <FormSubmitBtn onPress={submitForm} title="Sign up" />
    </FormContainer>
  );
};
const styles = StyleSheet.create({});

export default SignUpForm;
