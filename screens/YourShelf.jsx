import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../components/MainContainer'
import BookCardPortrait from '../components/BookCardPortrait'
import { FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { BookList } from '../const/data'

const { height, width } = Dimensions.get('window')
const feature_card_size = width - (2 * SPACING.lg)
const WINDOW_SIZE = feature_card_size
const NEW_RELEASE_CARD_WIDTH = WINDOW_SIZE * 0.5
const saved_book_scale_divide = 1;
const YourShelf = ({ route, navigation }) => {
  const renderItem = ({ item }) => {
    console.log(item)
    return(<BookCardPortrait
      book_card_size={NEW_RELEASE_CARD_WIDTH}
      title={item.title}
      author={item.author}
      image={item.cover_front}
    />
  )}

  return (
    <MainContainer title={"Your Shelf"} navigation={navigation} route={route}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        {/* New Releases */}
        <View style={styles.cards_container}>
          <Text style={styles.subtitle}>Recents</Text>
          <FlatList
            data={BookList}
            renderItem={renderItem}
            snapToInterval={NEW_RELEASE_CARD_WIDTH+SPACING.sm}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: SPACING.lg,
              gap: SPACING.sm,
            }}
          />
        </View>
        <View style={styles.cards_container}>
          <Text style={styles.subtitle}>Saved Books</Text>
          <View style={styles.gridContainer}>
            {BookList.map((book, index) => (
              <BookCardPortrait
              view_scale_divide = {saved_book_scale_divide}
                key={index}
                book_card_size={NEW_RELEASE_CARD_WIDTH/saved_book_scale_divide-SPACING.sm/2}
                title={book.title}
                author={book.author}
                image={book.cover_front}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </MainContainer>
  )
}

export default YourShelf

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: SPACING.xl,
  },
  cards_container: {
    gap: SPACING.sm,
  },
  subtitle: {
    fontSize: FONTSIZE.subheading,
    fontWeight: FONTWEIGHT.medium,
    marginHorizontal: SPACING.lg,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    marginHorizontal: SPACING.lg,
    // paddingVertical: SPACING.sm,
    gap:SPACING.sm
  },
})