import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const TinhTong = ({ num1, num2, result, luaChon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BẠN GIỎI PHÉP CỘNG?
      </Text>
      <Text style={styles.sum}>
        {num1} + {num2}
      </Text>
      <Text style={styles.equals}>
        =
      </Text>
      <Text style={styles.result}>
        {result}
      </Text>
      <Pressable style={styles.buttonCorrect} onPress={() => luaChon(true)}>
        <Text style={styles.buttonText}>Đúng</Text>
      </Pressable>
      <Pressable style={styles.buttonIncorrect} onPress={() => luaChon(false)}>
        <Text style={styles.buttonText}>Sai</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    color: 'red',
    fontSize: 30,
  },
  sum: {
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
    fontSize: 50,
    fontWeight: 'bold',
  },
  equals: {
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
    fontSize: 50,
    fontWeight: 'bold',
  },
  result: {
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
    fontSize: 50,
    fontWeight: 'bold',
  },
  buttonCorrect: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonIncorrect: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TinhTong;
