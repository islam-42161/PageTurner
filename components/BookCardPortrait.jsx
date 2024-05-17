import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Image } from 'expo-image'

const BookCardPortrait = ({title,author,image,book_card_size,view_scale_divide=1}) => {
  return (
    <View style={{gap:SPACING.sm/view_scale_divide,width:book_card_size}}>
      <View style={{...styles.image,width:"100%"}}>
      <Image
                        style={StyleSheet.absoluteFill}
                        source={image}
                        contentFit="cover"
                        transition={1000}
                        />
                    </View>
                    <View style={styles.info_container}>
                        <Text numberOfLines={1} style={{
                            fontSize:FONTSIZE.subheading/view_scale_divide,
                            fontWeight:FONTWEIGHT.bold
                        }}>{title}</Text>
                        <Text numberOfLines={1} style={{
                            fontSize:FONTSIZE.body/view_scale_divide,
                            fontWeight:FONTWEIGHT.light
                        }}>{author}</Text>
                        </View>
                        </View>
  )
}

export default BookCardPortrait

const styles = StyleSheet.create({
    container:{
    },
    image:{
        aspectRatio: 2 / 3,
        overflow: 'hidden',
        borderRadius: SPACING.sm,        
    },
    info_container:{
        // flex:1
    }
})