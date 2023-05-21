import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('C:/gateconv2/assets/profileicon.png')}
          style={styles.profileicon}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('C:/gateconv2/assets/header-logo.png')}
          style={styles.logo}       
       />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require('C:/gateconv2/assets/likeicon.png')}
            style={styles.likeicon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('C:/gateconv2/assets/messageicon.png')}
            style={styles.messageicon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  logo: {
    marginTop: -40,
    marginLeft: 10,
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  profileicon: {
    marginLeft: -15,
    marginTop: -28,
    width: 25,
    height: 25,
  },
  messageicon: {
    marginTop: -32,
    marginRight: 20,
    width: 30,
    height: 30,
  },
  likeicon: {
    marginTop: -32,
    marginRight: 17,
    width: 30,
    height: 30,
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Header;
