import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginBottom: 5 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => (
                <View key={index} style={{alignItems: 'center'}}>
             <Image source={{ uri: story.image }}
            style={[styles.story, { marginTop: 0 }]}/>
            <Text style={{ color:'black' }}>{
              story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() +
              '...' : story.user.toLowerCase()}
            </Text>
            </View>
            ))}

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height:70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: 'gray',
        zIndex: 9999,
    },
})

export default Stories