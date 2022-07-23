import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Shoes from '../Shoes';

const Footer = () => {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>

      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require('../../assets/shoe1.png')}
              cost='190,90'
              name='Nike Shox 10 super delux edition'
              onClick={() => alert('clickou')}
            />
          </View>
          
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require('../../assets/shoe2.png')}
              cost='190,90'
              name='Nike Red Road'
              onClick={() => alert('clickou')}
            />
          </View>
          
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require('../../assets/shoe3.png')}
              cost='190,90'
              name='Nike Red Sport'
              onClick={() => alert('clickou')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
});

export default Footer;
