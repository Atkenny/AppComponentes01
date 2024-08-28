import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View, Text, StyleSheet} from 'react-native';
import Gatito from './Componentes/Gatito';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galeria gatitos</Text>
      <ScrollView>
      <Gatito nombre='Gatito de de Ryder'
      imagen={require('./Imagenes/img1.png')}></Gatito>
      <Gatito nombre='Gatito de Braken Peak'
      imagen={require('./Imagenes/img2.png')}></Gatito>
      <Gatito nombre='Gatito con gafas Cool'
      imagen={require('./Imagenes/img3.png')}></Gatito>
      <Gatito nombre='Gatito bandalico'
      imagen={require('./Imagenes/img4.png')}></Gatito>
      <Gatito nombre='Gatito MLB'
      imagen={require('./Imagenes/img5.png')}></Gatito>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText:{
    fontSize:25,
    fontWeight:'Comfortaa',
    color:'blue',
  },
});
