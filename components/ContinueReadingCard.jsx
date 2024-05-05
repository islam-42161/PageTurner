import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'

const ContinueReadingCard = ({continue_card_size,title,author,image}) => {
  return (
    <View style={{...styles.container,width:continue_card_size}}>
      <View style={styles.image}>
      <Image
                        style={StyleSheet.absoluteFill}
                        source={image}
                        contentFit="cover"
                        transition={1000}
                    />
      </View>
      <View style={styles.info}>
        <Text style={{fontWeight:FONTWEIGHT.bold,fontSize:FONTSIZE.subheading}} numberOfLines={1} adjustsFontSizeToFit>{title}</Text>
        <Text style={{fontWeight:FONTWEIGHT.light,fontSize:FONTSIZE.caption}}>{author}</Text>
      </View>
    </View>
  )
}

export default ContinueReadingCard

const styles = StyleSheet.create({
container:{
flexDirection:'row',
overflow:'hidden',
borderRadius:SPACING.sm,
// elevation:1,
backgroundColor:COLORS.light1
// padding:SPACING.lg,
// backgroundColor:'red'
},
info:{
    flex:1,
    padding:SPACING.lg,
    // backgroundColor:'pink',
    justifyContent:'center',
    gap:SPACING.xs*0.5
},
image:{
    // flex:0.3,
    // height:100,
    width:"30%",
    aspectRatio:1,
    overflow:'hidden',
    borderRadius:SPACING.sm,
}
})