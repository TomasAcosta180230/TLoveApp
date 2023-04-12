import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("sola");
  };

  const headerStyle = { backgroundColor: isMenuOpen ? '#FFCDD2' : '#F8BBD0' };
  const footerStyle = { backgroundColor: isMenuOpen ? '#FFCDD2' : '#F8BBD0' };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F8BBD0' />
      <View style={[styles.header, headerStyle]}>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Image source={require('./assets/icons/menu.png')} style={[styles.icon, { width: 32, height: 32 }]} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Our App</Text>
        <TouchableOpacity style={styles.heartButton}>
          <Image source={require('./assets/icons/heart.png')} style={[styles.icon, { width: 32, height: 32 }]} />
        </TouchableOpacity>
      </View>
      <View style={styles.content} />
      <View style={[styles.footer, footerStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#F8BBD0',
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
    backgroundColor: '#fff',
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
});

export default App;
