import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, {useState} from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";

const LoginForm = ({ title, onPress }) => {


  const [userInfo, setUserInfo] = useState({
  
    email: "",
    password:"", 
  });


  const handleOnChangeText=(value, fieldName)=>{
    setUserInfo({...userInfo, [fieldName]:value})
  }

const {email, password} = userInfo;


const submitForm = ()=>{
  if(isValidForm()){
    console.log('wull be pass to the backEnd server')
  }
}
  return (
    <FormContainer style={styles.container}>
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        title="Email"
        placeholder="example@email.com"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        title="Password"
        placeholder="********"
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitBtn onPress={onPress} title="Login" />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: "green",
  },
});

export default LoginForm;
