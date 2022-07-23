import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  size: number;
  bgColor: string | undefined,
  color: string | undefined,
};

const ShoeSize = ({ size, bgColor, color }: Props) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.text, {color: color}]}>{size}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 3,
    marginHorizontal: 10,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default ShoeSize;
