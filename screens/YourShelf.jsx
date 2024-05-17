import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../components/MainContainer'
import BookCardPortrait from '../components/BookCardPortrait'
import { FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
const { height, width } = Dimensions.get('window')
const feature_card_size = width - (2 * SPACING.lg)
const WINDOW_SIZE = feature_card_size
const continue_card_size = WINDOW_SIZE * 0.8
const NEW_RELEASE_CARD_WIDTH = WINDOW_SIZE * 0.5
const YourShelf = ({route,navigation}) => {
  return (
    <MainContainer title={"Your Shelf"} navigation={navigation} route={route}>
            <ScrollView contentContainerStyle={styles.container}>

          {/* New Releases */}
          <View style={styles.cards_container}>
        <Text style={styles.subtitle}>New Releases</Text>

        <View>
          <ScrollView
            pagingEnabled
            snapToInterval={NEW_RELEASE_CARD_WIDTH + SPACING.sm}
            horizontal
            contentContainerStyle={{ gap: SPACING.sm, paddingStart: SPACING.lg, paddingEnd: SPACING.lg }}
            // decelerationRate="normal"
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            <BookCardPortrait book_card_size={NEW_RELEASE_CARD_WIDTH} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
            <BookCardPortrait book_card_size={NEW_RELEASE_CARD_WIDTH} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
            <BookCardPortrait book_card_size={NEW_RELEASE_CARD_WIDTH} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
            <BookCardPortrait book_card_size={NEW_RELEASE_CARD_WIDTH} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
            <BookCardPortrait book_card_size={NEW_RELEASE_CARD_WIDTH} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
          </ScrollView>
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
    // paddingBottom: "20%",
  },
  cards_container: {
    gap: SPACING.sm
  },
  subtitle: {
    fontSize: FONTSIZE.subheading,
    fontWeight: FONTWEIGHT.medium,
    marginHorizontal: SPACING.lg
  },
})