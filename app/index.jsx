//XỔ SỐ - TÍNH TỔNG

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import TinhTong from '../Component/TinhTong'; 
// import XoSo from '../Component/XoSo';         

// const App = () => {
//   const [showTinhTong, setShowTinhTong] = useState(true);
//   const [num1, setNum1] = useState(5);  
//   const [num2, setNum2] = useState(3); 
//   const [result, setResult] = useState(num1 + num2);
//   const [number, setNumber] = useState('');
//   const [lotteryResult, setLotteryResult] = useState('');

//   useEffect(() => {
  
//     if (showTinhTong) {
//       generateRandomNumbers();
//     }
//   }, [showTinhTong]);

//   const generateRandomNumbers = () => {
//     const newNum1 = Math.floor(Math.random() * 100) + 1;
//     const newNum2 = Math.floor(Math.random() * 100) + 1;
//     setNum1(newNum1);
//     setNum2(newNum2);
//     setResult(newNum1 + newNum2);
//   };

//   const luaChon = (isCorrect) => { 
//     alert(isCorrect ? 'Đúng!' : 'Sai!');
//     generateRandomNumbers(); 
//   };

//   const duDoanKetQua = () => { 
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     if (parseInt(number, 10) === randomNumber) {
//       setLotteryResult('Chúc mừng bạn đoán đúng!');
//     } else {
//       setLotteryResult('Rất tiếc, bạn đoán sai.');
//     }
//     setNumber('');  
//   };

//   return (
//     <View style={styles.container}>
//       <Button
//         title={showTinhTong ? 'Chuyển sang Xo Số' : 'Chuyển sang Tính Tổng'}
//         onPress={() => {
//           setShowTinhTong(!showTinhTong);
//           if (!showTinhTong) {
//             generateRandomNumbers(); 
//           }
//         }}
//       />
//       {showTinhTong ? (
//         <TinhTong
//           num1={num1}
//           num2={num2}
//           result={result}
//           luaChon={luaChon}
//         />
//       ) : (
//         <XoSo
//           setnumber={setNumber}
//           duDoanKetQua={duDoanKetQua}
//           result={lotteryResult}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });
// export default App;

//=======================================================================================================
//LOGIN - REGISTER

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import RegisterScreen from './Component/RegisterScreen';
// import LoginScreen from './Component/LoginScreen';

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('Login');

//   return (
//     <View style={styles.container}>
//       {currentScreen === 'Login' && (
//         <LoginScreen navigation={{ navigate: (screen) => setCurrentScreen(screen) }} />
//       )}
//       {currentScreen === 'Register' && (
//         <RegisterScreen navigation={{ navigate: (screen) => setCurrentScreen(screen) }} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

//===============================================================================================
// NEWS

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NewsList from '../Component/NewsList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <NewsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;