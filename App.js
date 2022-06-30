import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";

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

export default function App() {
  const { width } = Dimensions.get("window");
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27, 27, 51, 1)", "rgba(27, 27, 51, 0.4)"],
  });
  const signUpColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27, 27, 51, 0.3)", "rgba(27, 27, 51, 1)"],
  });

  return (
    <View style={{ flex: 1, paddingTop: 110 }}>
      {/*============= header component */}
      <View style={{ height: 100 }}>
        <FormHeader
          leftHeading={"MDA"}
          rightHeading={"Welcome"}
          subHeading={"BauHouse"}
          rightHeaderOpacity={rightHeaderOpacity}
          // rightHeadingTranslateY={-20}
          // leftHeadingTranslateX={40}
        />
      </View>

      {/*============= FormSelectorBtn */}
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <FormSelectorBtn
          backgroundColor={loginColorInterpolate}
          title={"Login"}
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
        />
        <FormSelectorBtn
          backgroundColor={signUpColorInterpolate}
          title={"Signup"}
          onPress={() => scrollView.current.scrollTo({ x: width })}
        />
      </View>

      {/*================== FormLogin sigin up=========*/}
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <LoginForm></LoginForm>
        <ScrollView>
          <SignUpForm></SignUpForm>
        </ScrollView>
      </ScrollView>
    </View>
  );
}     

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: Dimensions.get("window").width,
  },
});
