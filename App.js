import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions, Alert,Button,  SafeAreaView,
  ScrollView,
  StatusBar,Separator,
 } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Función principal de la aplicación
export default function App() {
  const [isFocused, setIsFocused] = useState(false); // Estado para el foco del campo de texto
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje

  // Función para manejar el clic en el botón
  const handleButtonPress = () => {
    setShowMessage(true); // Actualizar el estado para mostrar el mensaje
    Alert.alert(); // Mostrar un cuadro de diálogo con el mensaje
  };

 

  return (
    <ImageBackground source={require('./assets/fondo.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido, este es un pensamiento para ti. </Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Just Do It</Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.input, { color: isFocused ? '#fff' : '#000' }]}
          placeholder="danos tu opinion"
          placeholderTextColor={isFocused ? '#888' : '#888'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        /> {/* Mostar el mensaje cuando se acciones el boton */} 
        {showMessage && <SafeAreaView style={styles.containerV}> 
                          <ScrollView style={styles.scrollView}>
                            <Text style={styles.text}>
                            <View style={{ marginBottom: 4, textAlign: '-webkit-center', }}>
                              En la noche que me envuelve,
                              negra, como un pozo insondable,
                              le doy gracias a los dioses que pudieren existir,
                              por mi alma inconquistable.
                            </View>
                            <View style={{ marginBottom: 4, textAlign: '-webkit-center', }}> {/* separar los parrafos encapsulandolos en contenedores*/} 
                              En las garras de las circunstancias,
                              no he gemido, ni he llorado.
                              Bajo los golpes del destino,
                              mi cabeza ensangrentada jamás se ha postrado.
                            </View>
                            <View style={{ marginBottom: 4, textAlign: '-webkit-center', }}>
                              Más allá de este lugar de ira y llantos,
                              acecha la oscuridad con su horror,
                              Y sin embargo la amenaza de los años me halla,
                              y me hallará sin temor.
                            </View>
                            <View style={{ marginBottom: 4, textAlign: '-webkit-center', }}>
                              No importa cuán estrecho sea el camino,
                              ni cuántos castigos lleve a mi espalda,
                              Soy el amo de mi destino,
                              Soy el capitán de mi alma.
                            </View>

                              William Ernest Henley.
                            </Text>
                          </ScrollView>
          </SafeAreaView>} {/* Mostrar el mensaje si showMessage es true */} 

  
        <View style={styles.fixToText}>
          <Button
            title="Like"
            onPress={() => Alert.alert('Me encanta 😊')}
          />
          <Button
            title="Dislike"
            onPress={() => Alert.alert('Me aburre 😒')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

// Estilos para los elementos de la aplicación
const styles = StyleSheet.create({
  titulo:{
    color:'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginBottom: 4
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    flexDirection: 'row',
    justifyContent:'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '80%',
  },
  fixToText: {
    flexDirection: 'space-between',
    justifyContent: 'space-between',
    marginTop:18,
    marginHorizontal:30,
  },
  containerV: {
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
  },
 scrollView: {
   backgroundColor: 'white',
   marginHorizontal: 20,
  
  },
  text: {
    fontSize: 45,
    alignItems:'center',
    justifyContent:'center',
  },
});
