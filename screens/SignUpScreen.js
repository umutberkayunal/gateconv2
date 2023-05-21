import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    // Handle the log in logic here
    console.log('User logged in with email: ' + email + ' and password: ' + password);
  }

  const handleSignUp = () => {
    // Handle the sign up logic here
    console.log('User wants to sign up');
  }

  return (
    <ImageBackground 
      source={{uri: 'https://i.hizliresim.com/ff26ih3.png'}} 
      style={styles.background}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image 
            source={{uri: 'https://i.hizliresim.com/8mac2ok.png'}}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => console.log('Google Sign In Pressed')}>
            <Image 
              source={{uri: 'https://i.hizliresim.com/5o2v845.png'}}
              style={styles.authButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Connect Wallet Pressed')}>
            <Image 
              source={{uri: 'https://i.hizliresim.com/2wqh3ku.png'}}
              style={styles.authButton}
            />
          </TouchableOpacity>
          <TextInput 
            style={styles.input} 
            placeholder='Email' 
            value={email}
            onChangeText={setEmail}
          />
          <TextInput 
            style={styles.input} 
            placeholder='Password' 
            value={password} 
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogIn}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignUp}>
          <Image 
            source={{uri: 'https://i.hizliresim.com/tu0pkb5.png'}}
            style={styles.authButton}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: 900,
    width: 420,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 100, 
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 350, 
    height: 150, 
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  authButton: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#A9A9A9',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
