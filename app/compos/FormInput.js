import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";

const FormInput = (props) => {
  const { placeholder, title } = props;
  return (
    <>
      <View>
        <Text style={styles.label}>{title}</Text>
        <TextInput {...props} placeholder={placeholder} style={styles.input} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "gray",
    height: 40,
    padding: 10,
    paddingLeft: 10,
  },
  label: {
    marginTop: 10,
  },
});

export default FormInput;
