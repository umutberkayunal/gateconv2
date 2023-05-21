import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{uri: 'https://i.hizliresim.com/gq7a49s.png'}} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{uri: 'https://i.hizliresim.com/e6ixcke.png'}} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{uri: 'https://i.hizliresim.com/l01us5h.png'}} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{uri: 'https://i.hizliresim.com/s4z73u1.png'}} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{uri: 'https://i.hizliresim.com/s3bfrah.png'}} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default NavBar;
