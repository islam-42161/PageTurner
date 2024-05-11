import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({placeholder='Ex. The Alchemist',searchable=false,searchText,setSearchText}) => {
  const handleTextChange = (value)=>{
setSearchText(value);
  }
  const handleSearchSubmit = ()=>{
console.log("Search: ",searchText)
  }
  return (
    <Pressable style={styles.container}>
      {searchable?(
        <TextInput onChangeText={handleTextChange} onSubmitEditing={handleSearchSubmit} style={styles.search_placeholder}  placeholder={placeholder} placeholderTextColor={COLORS.accent1}/>

      ):(
        <Text style={styles.search_placeholder}>{placeholder}</Text>
      )}
      <Ionicons name="search" size={FONTSIZE.title} color={COLORS.accent2} />
    </Pressable>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        // borderWidth:1,
        borderColor:COLORS.accent2,
        padding:SPACING.md,
        borderRadius:SPACING.sm,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:SPACING.sm,
        flex:1,
        backgroundColor:COLORS.light2,
        height:48,
    },
    search_placeholder:{
        fontWeight:FONTWEIGHT.medium,
        color:COLORS.accent1,
        fontSize:FONTSIZE.body,
        flex:1,
    }
})