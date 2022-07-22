import React from 'react';
import { Image, ImageRequireSource, ImageURISource, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  img: ImageRequireSource | ImageURISource | ImageURISource[];
  cost: string;
  name: string,
  onClick: () => void;
};

const Shoes = ({ cost, img, name, onClick }:Props) => {
  function filterDesc(desc: string) {
    if (desc.length < 27) {
      return desc;
    } else {
      return `${desc.substring(0, 22)}...`;
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onClick} >
      <Image source={img} style={styles.Shoesimg} />

      <Text style={styles.shoesText}>
        {filterDesc(name)}
      </Text>
      <View style={styles.price}>
        <Text style={styles.shoesText}>R$ {cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Shoesimg: {
    width: 175,
    height: 175,
  },

  shoesText: {
    fontSize: 16,
  },

  price: {
    opacity: 0.4,
  },
});

export default Shoes;
