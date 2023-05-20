import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity>
      <Image 
       style={styles.logo}
       source={require('C:/gateconv2/assets/header-logo.png')}
       />
     </TouchableOpacity> 
     
     <View style={styles.iconsContainer}>
    

     </View>

    </View>
  )
}


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
        marginTop: -50,
        marginLeft: -120,
        width: 300,
        height: 150,
        resizeMode: 'contain',
    },
})

export default Header