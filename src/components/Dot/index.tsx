import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

type Props = {
  color: string;
};

const Dot = ({ color }: Props) => {
  return <View style={[styles.container, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    borderRadius: (Dimensions.get('window').width * 0.05) / 2,
    marginHorizontal: '2.5%',
    elevation: 5,
  },
});

export default Dot;
