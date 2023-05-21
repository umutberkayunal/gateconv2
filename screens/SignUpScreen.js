import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle the sign up logic here
    console.log('User signed up with email: ' + email + ' and password: ' + password);
  }

  return (
    <ImageBackground 
      source={{uri: 'https://i.hizliresim.com/ff26ih3.png'}} 
      style={styles.background}
    >
      <View style={styles.container}>
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
        <Button title='Sign Up' onPress={handleSignUp} />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
});

export default SignUpScreen;
