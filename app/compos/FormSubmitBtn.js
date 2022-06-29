
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const FormSubmitBtn = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}> 
            <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
        container:{
            marginTop:10, 
            height:45, 
            backgroundColor:'black', 
            borderRadius:'8', 
            justifyContent:'center', 
            alignItems:'center',
        }, 
        btn:{
            
            fontSize:18, 
            color:'#fff', 

        }
});
export default FormSubmitBtn;