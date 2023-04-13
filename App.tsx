import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
//Backend de la app
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("sola");
  };

  const headerStyle = { backgroundColor: isMenuOpen ? '#7CA539' : '#7CA539' };
  const footerStyle = { backgroundColor: isMenuOpen ? '#7CA539' : '#7CA539' };

  
//Todo el front de la app
  return (
    <View style={styles.container}>
        {/* Cambiar el color de la barra de tareas */}
      <StatusBar backgroundColor='#7CA539' />
        {/* Diseño del header y sus botones */}
      <View style={[styles.header, headerStyle]}>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Image source={require('./assets/icons/menu.png')} style={[styles.icon, { width: 50, height: 50 }]} />
        </TouchableOpacity>
        <Text style={styles.headerText}>True Love </Text>
        <TouchableOpacity style={styles.heartButton}>
          <Image source={require('./assets/icons/heart.png')} style={[styles.icon, { width: 50, height: 50 }]} />
        </TouchableOpacity>
      </View>
      {/* Diseño del container pricipal */}

      <View style={styles.content} >
          <Image source={require('./assets/img/app.png')} style={[styles.img, { width: 390, height: 390}]} ></Image>
      </View>
      {/* Diseño del footer y sus botones */}
      <View style={[styles.footer, footerStyle]} >
        <TouchableOpacity style={styles.mess}>
          <Image source={require('./assets/icons/date.png')} style={[styles.icon, { width: 55, height: 55}]}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.date}>
          <Image source={require('./assets/icons/datec.png')} style={[styles.icon, { width: 55, height: 55}]}/>
        </TouchableOpacity>
        </View>
    </View>
  );
};
//Estilos de botones, header, footer y container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF3DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#7CA539',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  menuButton: {
    position: 'absolute',
    left: 20,
  },
  heartButton: {
    position: 'absolute',
    right: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EBF3DD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  footer: {
    height: 90,
    width: '100%',
    backgroundColor: '#F8BBD0',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  mess:{
    position: 'absolute',
    right: 60,
    top: 20
  },
  date:{
    position: 'absolute',
    right: 170,
    top: 20
  },
  img:{
    position: 'absolute',
    right:2,
    top:100

  }

});

export default App;
