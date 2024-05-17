import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Image } from 'expo-image'

const BookCardPortrait = ({title,author,image,book_card_size}) => {
  return (
    <View style={[styles.container,{width:book_card_size}]}>
      <View style={{...styles.image,width:"100%"}}>
      <Image
                        style={StyleSheet.absoluteFill}
                        source={image}
                        contentFit="cover"
                        transition={1000}
                        />
                    </View>
                    <View style={styles.info_container}>
                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        <Text numberOfLines={1} style={styles.author}>{author}</Text>
                        </View>
                        </View>
  )
}

export default BookCardPortrait

const styles = StyleSheet.create({
    container:{
        gap:SPACING.md
    },
    image:{
        aspectRatio: 2 / 3,
        overflow: 'hidden',
        borderRadius: SPACING.sm,        
    },
    title:{
        fontSize:FONTSIZE.subheading,
        fontWeight:FONTWEIGHT.bold
    },
    author:{
        fontSize:FONTSIZE.body,
        fontWeight:FONTWEIGHT.light
    },
    info_container:{
        flex:1
    }
})