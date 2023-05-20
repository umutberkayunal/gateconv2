import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('C:/gateconv2/assets/background.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
