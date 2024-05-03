import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Ionicons } from '@expo/vector-icons';
const SearchBar = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.search_placeholder}>Ex. The Alchemist</Text>
      <Ionicons name="search" size={FONTSIZE.display} color={COLORS.accent2} />
    </Pressable>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:COLORS.accent2,
        padding:SPACING.sm,
        borderRadius:SPACING.sm,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:SPACING.sm,
        flex:1
    },
    search_placeholder:{
        fontWeight:FONTWEIGHT.light,
        color:'gray',
        fontSize:FONTSIZE.subheading
    }
})