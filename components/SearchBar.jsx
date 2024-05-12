import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({placeholder='Ex. The Alchemist',searchable=false,searchText,setSearchText,navigation}) => {
  const handleTextChange = (value)=>{
setSearchText(value);
  }
  const handleSearchSubmit = ()=>{
console.log("Search: ",searchText)
  }
  const clearText = useCallback(()=>{
    textInputRef.current?.clear();
    setSearchText('')
  },[])
  const textInputRef = useRef(null);

  return (
    <Pressable onPress={()=>navigation.navigate('search')} style={styles.container}>
      {searchable?(
        <TextInput ref={textInputRef} autoFocus={true} onChangeText={handleTextChange} onSubmitEditing={handleSearchSubmit} style={styles.search_placeholder}  placeholder={placeholder} placeholderTextColor={COLORS.accent1}/>

      ):(
        <Text style={styles.search_placeholder}>{placeholder}</Text>
      )}
      {searchText?(
      <Ionicons name="close-circle-outline" onPress={clearText} size={FONTSIZE.title} color={COLORS.accent2} />
      ):(
      <Ionicons name="search" size={FONTSIZE.title} color={COLORS.accent2} />
      )}
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