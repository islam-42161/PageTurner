import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { AntDesign } from '@expo/vector-icons';
const BookCardSearchSort = ({book}) => {
  const pdate = new Date(book.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <Pressable style={styles.container}>
<View style={styles.image}>
<Image
                        style={StyleSheet.absoluteFill}
                        source={book.book_cover}
                        contentFit="cover"
                        transition={1000}
                        />
</View>
<View style={styles.info}>
  <View style={styles.infom_top}>
  <Text style={{fontWeight:FONTWEIGHT.medium,fontSize:FONTSIZE.subheading}}>{book.title}</Text>
  <Text style={{fontWeight:FONTWEIGHT.regular,fontSize:FONTSIZE.body}}>{book.author}</Text>
  <Text style={{fontWeight:FONTWEIGHT.thin,fontSize:FONTSIZE.body}}>{pdate}</Text>
  </View>
  <View style={styles.infom_bottom}>
  <Text style={{fontWeight:FONTWEIGHT.bold,fontSize:FONTSIZE.title}}>{book.price}</Text>
<TouchableOpacity style={styles.button}>
  {book.inWishlist ? (<AntDesign name="heart" size={24} color={COLORS.accent2} />):(<AntDesign name="hearto" size={24} color={COLORS.accent2} />)}
</TouchableOpacity>
  </View>
</View>
    </Pressable>
  )
}

export default BookCardSearchSort

const styles = StyleSheet.create({
  image:{
    aspectRatio:2/3,
    width:'35%',
    borderRadius:SPACING.md,
    overflow:'hidden'

  },
  info:{
    flex:1,
    padding:SPACING.lg,
    gap:SPACING.xs,
    justifyContent:'space-between'
  },
  infom_top:{
    gap:SPACING.xs,
  },
  infom_bottom:{
    gap:SPACING.xs,
  },
  container:{
    flexDirection:'row',
    overflow:'hidden',
    borderRadius:SPACING.md
  },
  button: {
    backgroundColor: COLORS.accent1,
    padding: SPACING.md,
    borderRadius: SPACING.sm,
    alignItems: 'center',
    justifyContent: 'center',
    height:48,width:48,alignSelf:'flex-end'
  },
})