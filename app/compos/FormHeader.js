// import React from 'react';
// import { View, StyleSheet, Text, Animated } from 'react-native';





import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'


const FormHeader = ({leftHeading, rightHeading, subHeading,leftHeadingTranslateX, rightHeadingTranslateY, rightHeaderOpacity}) => {
  return (
    <View style={styles.container}>
        <View >
          <Text style={styles.heading}>{leftHeading}</Text>
          <Text style={styles.heading}>{rightHeading}</Text>
        </View>
          <Text style={styles.subHeading}>{subHeading}</Text>
    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginLeft:20,
    alignItems: 'center',
  },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#1b1b33' },
  subHeading: { fontSize: 16, color: '#1b1b33', textAlign: 'center' },
});

export default FormHeader;









// const FormHeader = ({
//   leftHeading,
//   rightHeading,
//   subHeading,
//   leftHeaderTranslateX = 40,
//   rightHeaderTranslateY = -20,
//   rightHeaderOpacity = 0,
// }) => {
//   return (
//     <>
//       <View style={styles.container}>
//         <Animated.Text
//           style={[
//             styles.heading,
//             { transform: [{ translateX: leftHeaderTranslateX }] },
//           ]}
//         >
//           {leftHeading}
//         </Animated.Text>
//         <Animated.Text
//           style={[
//             styles.heading,
//             {
//               opacity: rightHeaderOpacity,
//               transform: [{ translateY: rightHeaderTranslateY }],
//             },
//           ]}
//         >
//           {rightHeading}
//         </Animated.Text>
//       </View>
//       <Text style={styles.subHeading}>{subHeading}</Text>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: { fontSize: 30, fontWeight: 'bold', color: '#1b1b33' },
//   subHeading: { fontSize: 18, color: '#1b1b33', textAlign: 'center' },
// });

// export default FormHeader;
