import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';

const FormSelectorBtn = ({ title, backgroundColor, style, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, {backgroundColor}]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};




const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '50%',
    borderRadius:3,
    backgroundColor: '#ffff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: 'gray', fontSize: 16 },
});


export default FormSelectorBtn;

// const FormSelectorBtn = ({ title, backgroundColor, style, onPress }) => {
//   return (
//     <TouchableWithoutFeedback onPress={onPress}>
//       <Animated.View style={[styles.container, style, { backgroundColor }]}>
//         <Text style={styles.title}>{title}</Text>
//       </Animated.View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 45,
//     width: '50%',
//     backgroundColor: '#1b1b33',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: { color: 'white', fontSize: 16 },
// });

// export default FormSelectorBtn;
