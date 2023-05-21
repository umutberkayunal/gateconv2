import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../data/posts'

const postFooterIcons = [
    {
        name: 'Like',
        imageurl:
        'https://i.hizliresim.com/f64r4k5.png',
        likedimageurl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like',
    },
    {
        name: 'Comment',
        imageurl:'https://i.hizliresim.com/7gkh61r.png',
    },
    {
        name: 'Share',
        imageurl:'https://i.hizliresim.com/h0sn21c.png',
    },
    {
        name: 'Save',
        imageurl: 'https://i.hizliresim.com/tnk8il9.png',
    },
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30, marginTop: 15}}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal: 15, marginTop:10}}>
            <PostFooter />
        </View>

    </View>
  )
}

const PostHeader = ({ post })  => (
    <View style={{flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 5, 
    alignItems: 'center'
    }}
    >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source= {{uri: post.profile_picture }} style={styles.story}/>
            <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
            {post.user}
            </Text>
        </View>


        <Text style={{color: 'white', fontWeight: '900'}}> ... </Text>
    </View>
)

const PostImage = ({post}) => (
    <View style={{
        width: '100%',
        height: 350,
    }}>
    <Image 
     source={{uri: post.imageurl}} 
     style={{height: '100%',  resizeMode: 'cover'}}
    />
    </View>

)

const PostFooter = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[0].imageurl} />
            <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[1].imageurl} />
            <Icon imgStyle={[styles.footerIcon, styles.shareIcon]} imgurl={postFooterIcons[2].imageurl} />
        </View>
        
        <View style={{ flex: 1, alignItems: 'flex-end'}}>
            <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[3].imageurl}/>
        </View>
      </View>
    );
}

const Icon = ({imgStyle, imgurl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri:imgurl}} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: 'gray',
        zIndex: 9999,
    },

    footerIcon: {
        width: 33,
        height: 33,
    },

    shareIcon: {
        marginTop: 0,
    },

    leftFooterIconsContainer: {
        flexDirection:'row',
        width: 32,
        justifyContent:'space-between',
    },
})

export default Post