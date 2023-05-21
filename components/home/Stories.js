import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginBottom: 5 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => (
                <View key={index.toString()} style={styles.storyContainer}>
             <Image source={{ uri: story.image }}
            style={[styles.story, { marginTop: -50 }, {zIndex: 1}]}/>
            <Text style={{ color:'white' }}>{story.user}</Text>
            </View>
            ))}

        </ScrollView>
      <Text style={{ color: 'white'}}>STORIES</Text>
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
        borderColor: '#ff8501',
    },
})

export default Stories