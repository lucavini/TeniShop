import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackProps } from '../../Router';

// Assets
import detail from '../../assets/detail.png';

// Compoents
import Dot from '../../components/Dot';
import ShoeSize from '../../components/ShoeSize';
import BuyButton from '../../components/BuyButton';
import Footer from '../../components/Footer';

// types
type Props = {
  navigation: NativeStackNavigationProp<RootStackProps>;
  route: RouteProp<RootStackProps>;
};

const Detail = ({ navigation, route }: Props) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.title,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image source={detail} style={styles.image} resizeMode='cover' />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 190,00</Text>
        </View>
        <View>
          <Text style={[styles.title, { fontSize: 30, opacity: 0.5 }]}>
            {route.params?.title}
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color='#2379f4' />
          <Dot color='#fb6e53' />
          <Dot color='#ddd' />
          <Dot color='#000' />
        </View>

        <View
          style={{ flexDirection: 'row', width: '100%', marginBottom: '5%' }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ShoeSize bgColor='#17181a' color='#fff' size={40} />
            <ShoeSize size={36} bgColor={undefined} color={undefined} />
            <ShoeSize size={32} bgColor={undefined} color={undefined} />
            <ShoeSize size={30} bgColor={undefined} color={undefined} />
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>{route.params?.title}</Text>

          <Text style={styles.textContent}>
            O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte
            atualizados, para garantir uma corrida estável e confortável. Esse
            tênis de corrida é confeccionado em material respirável, cabedal em
            couro sintético
          </Text>

          <Text style={styles.textList}>
             - Categoria: Amortecimento
          </Text>

          <Text style={styles.textList}>
             - Material: Mesh
          </Text>
        </View>

        <BuyButton />

        <View style={styles.divider} />
        
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  textTitle: {
    fontSize: 22,
    lineHeight: 25,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  textList: {
    fontSize: 16,
    marginVertical: '2%',
  },

  divider: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%',
  }
});

export default Detail;
