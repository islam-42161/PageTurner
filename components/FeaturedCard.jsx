import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'


const IMAGE_WIDTH = 100;
const {height,width} = Dimensions.get('window')
const FeaturedCard = ({ feature_card_size,image_front, image_back, title, sub_title }) => {
    return (
        <Pressable style={styles.container}>
            <Image
                        style={StyleSheet.absoluteFill}
                        source={image_front}
                        contentFit="cover"
                        transition={1000}
                        blurRadius={10}
                    />
                    <View style={{backgroundColor:'rgba(255,255,255,0.1)',...StyleSheet.absoluteFill}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{sub_title}</Text>
                </View>
            <View style={styles.imagesContainer}>
                <View style={[styles.image]}>
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={image_back}
                        contentFit="cover"
                        transition={1000}
                    />
                </View>
                <View style={[styles.image,{bottom:-20,left:-2}]}>
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={image_front}
                        contentFit="cover"
                        transition={1000}
                    />
                </View>
            </View>
        </Pressable>
    )
}

export default FeaturedCard

const styles = StyleSheet.create({
    container: {
        // flex:1,
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: SPACING.sm,width:width-(2*SPACING.lg)
    },
    info: {
        width:'60%',
        gap:SPACING.xs,
        justifyContent:'flex-end',
        padding:SPACING.sm
        // backgroundColor: 'pink'
    },
    imagesContainer: {
        width:'40%',
        // backgroundColor: 'yellow',
        height: IMAGE_WIDTH * 3 / 2,
        alignItems:'flex-end',
        bottom:-SPACING.sm,
        right:SPACING.sm
    },
    image: {
        width: IMAGE_WIDTH,
        aspectRatio: 2 / 3,
        overflow: 'hidden',
        borderRadius: SPACING.sm,
        position:'absolute',
        elevation:5
    },
    title:{
        // color:'white',
        fontWeight:FONTWEIGHT.bold,
        fontSize:FONTSIZE.body*1.2
    },
    subtitle:{
        // color:'white',
        fontWeight:FONTWEIGHT.light,
        fontSize:FONTSIZE.body
    },
}
)