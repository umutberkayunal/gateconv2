import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import NavBar from '../components/home/NavBar';
import { POSTS } from '../data/posts';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('C:/gateconv2/assets/background.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
            {POSTS.map((post, index) =>(
          <Post post={post} key={index}/>
          ))}
        </ScrollView>
        <NavBar />
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
