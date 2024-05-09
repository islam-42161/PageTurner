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
                    <View>
                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        <Text style={styles.author}>{author}</Text>
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
        flex:1,
        fontSize:FONTSIZE.subheading,
        fontWeight:FONTWEIGHT.bold
    },
    author:{
        fontSize:FONTSIZE.body,
        fontWeight:FONTWEIGHT.light
    }
})