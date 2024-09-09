import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const XoSo = ({ setnumber, duDoanKetQua, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        XỔ SỐ ĐÊ!!!
      </Text>
      <Text style={styles.instructions}>
        Nhập một số từ 1 đến 100
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số dự đoán"
        keyboardType="numeric"
        onChangeText={text => setnumber(text)}
      />
      <Pressable style={styles.button} onPress={duDoanKetQua}>
        <Text style={styles.buttonText}>Dự đoán</Text>
      </Pressable>
      <Text style={styles.result}>
        {result}
      </Text>
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
    color: 'blue',
    fontSize: 40,
  },
  instructions: {
    textAlign: 'center',
    marginTop: 10,
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  result: {
    textAlign: 'center',
    marginTop: 10,
    color: 'violet',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default XoSo;