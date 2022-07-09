import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import axios from 'axios';
import {useRef, useEffect} from 'react';
import AppForm from './app/compos/AppForm';
import UserProfile from './app/compos/UserProfile';
import ImageUpload from './app/compos/ImageUpload';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
 
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";



//=========components importing==============
import FormHeader from "./app/compos/FormHeader";
import FormSelectorBtn from "./app/compos/FormSelectorBtn";
import LoginForm from "./app/compos/LoginForm";
import SignUpForm from "./app/compos/SignUpForm";


const Stack = createStackNavigator();
export default function App() {
  const { width } = Dimensions.get("window");
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();



//======== we import axios and the we use the get method to listen to requsets 
// ===== we fetch Api from here. 
const fetchApi  = async() =>{
  try {
    const res = await axios.get('http://192.168.10.184:3000/')
    console.log(res.data)
  } catch (error) {
    console.log(error.message)
  }
}


//==== we user effect to call the fetchApi 
  useEffect(()=>{
      fetchApi()
  }, [])
  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const StackNavigator = ()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen component={AppForm} name='AppForm'/>
      <Stack.Screen component={ImageUpload} name="ImageUpload"/>
      <Stack.Screen component={UserProfile} name="UserProfile"/>
    </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
  );
}     
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: Dimensions.get("window").width,
  },
  header: {
    height: 50,
  }
})
