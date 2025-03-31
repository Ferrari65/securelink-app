import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function LogoContainer() {
  return (
    <View style={styles.logoWrapper}>
      <Image
        source={require('../src/img/logo.png')} // substitua pelo caminho correto da sua logo
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoWrapper: {
    width: '180%',
    height: "22%",
    backgroundColor: '#0A0A0A',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#333', // linha fina azul/cinza como no print
  },
  logoImage: {
    width: 300,
    height: 160,
  },
});
