import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BuyButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.title}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  title: {
    fontSize: 17,
    color: '#fff',
  },
});

export default BuyButton;
