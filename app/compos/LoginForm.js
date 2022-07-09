import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, {useState} from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import client from "./api/client";

import { isValidEmail, isValidObjField, updateError } from '../../utilities/validationsMethos';

const LoginForm = ({ title, onPress }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password:"", 
  });
  const handleOnChangeText=(value, fieldName)=>{
    setUserInfo({...userInfo, [fieldName]:value})
  }
const {email, password} = userInfo;



const isValidForm = () => {
  if (!isValidObjField(userInfo))
    return updateError('Required all fields!', setError);

  if (!isValidEmail(email)) return updateError('Invalid email!', setError);

  if (!password.trim() || password.length < 8)
    return updateError('Password is too short!', setError);
  return true;
};



const submitForm = async()=>{
  if(isValidForm()){
    try {
      const res= await  client.post('/sign-in', {...userInfo})
      console.log(res.data)
      if(res.data.success){
        setUserInfo({email:'', password:''})
      }
    } catch (error) {
      console.log(error.messge)
    }
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
      <FormSubmitBtn onPress={submitForm} title="Login" />
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
