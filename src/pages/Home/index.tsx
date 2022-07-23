import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Components
import Shoes from '../../components/Shoes';

// Assets
import banner from '../../assets/banner.png';
import shoe1 from '../../assets/shoe1.png';
import shoe2 from '../../assets/shoe2.png';
import shoe3 from '../../assets/shoe3.png';
import shoe4 from '../../assets/shoe4.png';
import shoe5 from '../../assets/shoe5.png';
import shoe6 from '../../assets/shoe6.png';
import { RootStackProps } from '../../Router';

type homeScreenProp = NativeStackNavigationProp<RootStackProps, 'Home'>;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={banner} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>-</Text>
          <Text style={[styles.text, { color: '#cececf' }]}> MASCULINO </Text>

          <TouchableOpacity
            style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
          >
            <MaterialIcons name='filter-list' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={shoe1}
            cost='140,90'
            name='Nike Shox 10 super delux edition'
            onClick={() => navigation.navigate('Detail', {title: 'Nike Shox 10 super delux edition'})}
          />
          <Shoes
            img={shoe2}
            cost='190,90'
            name='Nike Red Road'
            onClick={() => navigation.navigate('Detail', {title: 'Nike Red Road'})}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={shoe3}
            cost='140,90'
            name='Nike Red Sport'
            onClick={() => alert('clickou')}
          />
          <Shoes
            img={shoe4}
            cost='190,90'
            name='Nike Tatical Road'
            onClick={() => alert('clickou')}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={shoe5}
            cost='140,90'
            name='Nike Standard basic'
            onClick={() => alert('clickou')}
          />
          <Shoes
            img={shoe6}
            cost='190,90'
            name='Nike Blue Heel'
            onClick={() => alert('clickou')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },

  header: {
    marginBottom: 8,
  },

  image: {
    width: '100%',
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },

  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },

  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
  },
});

export default Home;
