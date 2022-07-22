import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton';

import Routes from './src/Router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Routes />
    </>
  );
}
