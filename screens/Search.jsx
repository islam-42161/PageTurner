import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Entypo,FontAwesome6,AntDesign} from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import BookCardSearchSort from '../components/BookCardSearchSort';
import MainContainer from '../components/MainContainer';
import SortModal from '../components/SortModal';

const STATUSBAR_HEIGHT = StatusBar.currentHeight

const book = {
title:'Bliss Montage Stories',
author:'Ling Ma',
publishDate: new Date().getTime(),
price:'$17',
inWishlist:true,
book_cover:'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'
}


const Search = ({ route, navigation }) => {
  const [searchText,setSearchText]=useState('');
  const [sortModalVisible,setSortModalVisible] = useState(false);
  const handleSortPress = ()=>{
    setSortModalVisible(true)
    console.log("pressed modal: ",sortModalVisible)
  }
  return (
    <MainContainer navigation={navigation} route={route} title={"Search Results"}>
      

      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.search_row}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} searchable={true} />
        <Pressable onPress={handleSortPress} style={[styles.button,{backgroundColor:COLORS.accent2}]}>
          <FontAwesome6 name="sliders" size={FONTSIZE.title} color={COLORS.light1} />
        </Pressable>
      </View>

      {/* search results */}
      <View style={styles.search_results}>
        {searchText?(
          <>
          <AntDesign name="meho" size={FONTSIZE.display*2} style={{alignSelf:'center'}} color={COLORS.accent1} />
          <Text style={{fontSize:FONTSIZE.body,alignSelf:'center',color:COLORS.accent1}}>Couldn't find any match for <Text style={{fontWeight:FONTWEIGHT.bold}}>{searchText}</Text></Text>
          </>
        ):(
          <BookCardSearchSort book={book}/>
        )}
        
      </View>

{/* divider */}
      <View style={{marginHorizontal:SPACING.lg}}>
      <View style={{height:StyleSheet.hairlineWidth,backgroundColor:COLORS.dark1}}/>
      <Text style={{fontSize:FONTSIZE.caption,fontWeight:FONTWEIGHT.light,position:'absolute',backgroundColor:COLORS.light1,padding:SPACING.xs,alignSelf:'center',top:-SPACING.md}}>You might also like</Text>
      </View>
      <View style={styles.search_results}>
        <BookCardSearchSort book={{...book,inWishlist:false}}/>
        <BookCardSearchSort book={book}/>
        <BookCardSearchSort book={book}/>
        
      </View>
      </ScrollView>
      <SortModal sortModalVisible={sortModalVisible} setSortModalVisible={setSortModalVisible}/>
      </MainContainer>
  )
}

export default Search

const styles = StyleSheet.create({
  root: {
    flex:1,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: COLORS.light1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  header_title: {
    fontSize: FONTSIZE.title,
    fontWeight: FONTWEIGHT.medium,
  },
  container: {
    flexGrow: 1,
    gap: SPACING.xl,
    // paddingBottom: "20%",
  },
  search_row: {
    flexDirection: 'row',
    gap: SPACING.sm,
    alignItems: 'center',
    marginHorizontal: SPACING.lg,
    height:48
  },
  button: {
    backgroundColor: COLORS.accent1,
    padding: SPACING.md,
    borderRadius: SPACING.sm,
    alignItems: 'center',
    justifyContent: 'center',
    height:48,width:48
  },
  search_results:{
marginHorizontal:SPACING.lg,
gap:SPACING.md
  }
})