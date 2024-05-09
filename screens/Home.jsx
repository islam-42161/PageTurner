import { Dimensions, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme';
import SearchBar from '../components/SearchBar';
import { FontAwesome6, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FeaturedCard from '../components/FeaturedCard';
import ContinueReadingCard from '../components/ContinueReadingCard';
import { Image } from 'expo-image';
import BookCardPortrait from '../components/BookCardPortrait';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const { height, width } = Dimensions.get('window')
const feature_card_size = width - (2 * SPACING.lg)
const WINDOW_SIZE = feature_card_size
const continue_card_size = WINDOW_SIZE * 0.8
const NEW_RELEASE_CARD_WIDTH = WINDOW_SIZE * 0.5
export default function Home({ navigation }) {
  return (<View style={styles.root}>
    <View style={styles.header}>
      <Text style={styles.title}>PageTurner</Text>
    </View>

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.search_row}>
        <SearchBar />
        <Pressable style={styles.sort_button}>
          <FontAwesome6 name="sliders" size={FONTSIZE.heading} color={COLORS.light1} />
        </Pressable>
      </View>
      {/* featured */}
      <View style={styles.cards_container}>
        <Text style={styles.subtitle}>Featured</Text>

        <View>
          <ScrollView
            pagingEnabled
            snapToInterval={feature_card_size + SPACING.sm}
            horizontal
            contentContainerStyle={{ gap: SPACING.sm, paddingStart: SPACING.lg, paddingEnd: SPACING.lg, paddingBottom: SPACING.xs }}
            // decelerationRate="normal"
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            <FeaturedCard feature_card_size={feature_card_size} title={'The Alchemist'} sub_title={'A shepherd boy chases a dream that leads him on a magical journey of self-discovery across continents.'} image_front={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} image_back={'https://th.bing.com/th/id/R.3d63870bb7e906f96a56bd450ca54f02?rik=qsyMEp9gYYNGyw&riu=http%3a%2f%2fballisterwriting.com%2fwp-content%2fuploads%2f2018%2f06%2fa-review-of-the-alchemist-back-cover.png&ehk=Nk8yq4EFNvUe1mRRazjtoJEgHyGcBV5MEfaku%2btkH0E%3d&risl=&pid=ImgRaw&r=0'} />
            <FeaturedCard feature_card_size={feature_card_size} title={'The Alchemist'} sub_title={'A shepherd boy chases a dream that leads him on a magical journey of self-discovery across continents.'} image_front={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} image_back={'https://th.bing.com/th/id/R.3d63870bb7e906f96a56bd450ca54f02?rik=qsyMEp9gYYNGyw&riu=http%3a%2f%2fballisterwriting.com%2fwp-content%2fuploads%2f2018%2f06%2fa-review-of-the-alchemist-back-cover.png&ehk=Nk8yq4EFNvUe1mRRazjtoJEgHyGcBV5MEfaku%2btkH0E%3d&risl=&pid=ImgRaw&r=0'} />
            <FeaturedCard feature_card_size={feature_card_size} title={'The Alchemist'} sub_title={'A shepherd boy chases a dream that leads him on a magical journey of self-discovery across continents.'} image_front={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} image_back={'https://th.bing.com/th/id/R.3d63870bb7e906f96a56bd450ca54f02?rik=qsyMEp9gYYNGyw&riu=http%3a%2f%2fballisterwriting.com%2fwp-content%2fuploads%2f2018%2f06%2fa-review-of-the-alchemist-back-cover.png&ehk=Nk8yq4EFNvUe1mRRazjtoJEgHyGcBV5MEfaku%2btkH0E%3d&risl=&pid=ImgRaw&r=0'} />
          </ScrollView>
        </View>
      </View>
      {/* Continue Reading */}
      <View style={styles.cards_container}>
        <Text style={styles.subtitle}>Continue Reading</Text>

        <View>
          <ScrollView
            pagingEnabled
            snapToInterval={continue_card_size + SPACING.sm}
            horizontal
            contentContainerStyle={{ gap: SPACING.sm, paddingStart: SPACING.lg, paddingEnd: SPACING.lg, paddingBottom: SPACING.xs }}
            // decelerationRate="normal"
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            <ContinueReadingCard continue_card_size={continue_card_size} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
            <ContinueReadingCard continue_card_size={continue_card_size} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
            <ContinueReadingCard continue_card_size={continue_card_size} title={'The Alchemist'} author={'Iftekhar Pasa Uddin'} image={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} />
          </ScrollView>
        </View>
      </View>
      {/* Sponsored */}
      <View style={styles.cards_container}>
        <Text style={styles.subtitle}>Sponsored</Text>
        <View style={styles.sponsored_item}>
          <View style={styles.sponsored_item_left}>
            <View style={{ height: WINDOW_SIZE, width: WINDOW_SIZE, borderRadius: (WINDOW_SIZE) / 2, left: -WINDOW_SIZE / 2, top: -WINDOW_SIZE / 4, overflow: 'hidden' }}>
              <Image
                style={StyleSheet.absoluteFill}
                source={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'}
                contentFit="cover"
                transition={1000}
              />
            </View>

          </View>
          <View style={styles.sponsored_item_right}>
            <View style={{ alignItems: 'flex-end', gap: SPACING.sm }}>
              <Text style={{ fontWeight: FONTWEIGHT.bold, fontSize: FONTSIZE.title }}>Upto 70%!</Text>
              <Text style={{ fontWeight: FONTWEIGHT.thin, fontSize: FONTSIZE.caption, textAlign: 'right' }}>Mystery & Thrillers 70% Off! (This weekend only)</Text>
              <Pressable style={{ backgroundColor: COLORS.accent2, paddingHorizontal: SPACING.md, paddingVertical: SPACING.sm, borderRadius: SPACING.sm }}>
                <Text style={{ color: COLORS.light1, fontWeight: FONTWEIGHT.bold, fontSize: FONTSIZE.caption }}>Go to sale</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

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

      {/* Hottest Deals */}
      <View style={styles.cards_container}>
        <Text style={styles.subtitle}>Hottest Deals</Text>
        <Pressable style={styles.hottest_deal}>
          <View style={styles.hottest_deal_image_container}>
            <Image
              style={StyleSheet.absoluteFill}
              source={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'}
              contentFit="cover"
              transition={1000}
            />
            <Text style={styles.hottest_deal_discount}>-30%</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', fontWeight: FONTWEIGHT.medium, fontSize: FONTSIZE.subheading, gap: SPACING.md }}>
              <Text numberOfLines={1} style={{ fontWeight: FONTWEIGHT.medium, fontSize: FONTSIZE.subheading, flex: 1 }}>The Alchemist</Text>
              <Text numberOfLines={1} style={{ fontWeight: FONTWEIGHT.medium, fontSize: FONTSIZE.subheading }}>$19</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', fontWeight: FONTWEIGHT.medium, fontSize: FONTSIZE.subheading, gap: SPACING.md }}>
              <Text numberOfLines={1} style={{ fontWeight: FONTWEIGHT.light, fontSize: FONTSIZE.body, flex: 1 }}>Ling Ma</Text>
              <Text numberOfLines={1} style={{ fontWeight: FONTWEIGHT.light, fontSize: FONTSIZE.body, textDecorationLine: 'line-through' }}>$27</Text>
            </View>
          </View>
        </Pressable>

      </View>

      {/* Explore by Categories */}
      <View style={styles.cards_container}>
        <Text style={styles.subtitle}>Explore by Categories</Text>
        <View style={{ width: WINDOW_SIZE, aspectRatio: 1, gap: SPACING.sm, alignSelf: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', gap: SPACING.sm }}>
            <Pressable style={{ flex: 1, backgroundColor: COLORS.light2, borderRadius: SPACING.sm, alignItems: 'center', justifyContent: 'center', gap: SPACING.xs }}>
              <AntDesign name="rocket1" size={24} color={COLORS.accent2} />
              <Text style={{ fontSize: FONTSIZE.body, fontWeight: FONTWEIGHT.medium }}>Sci-Fi</Text>
            </Pressable>
            <Pressable style={{ flex: 1, backgroundColor: COLORS.light2, borderRadius: SPACING.sm, alignItems: 'center', justifyContent: 'center', gap: SPACING.xs }}>
              <AntDesign name="bulb1" size={24} color={COLORS.accent2} />
              <Text style={{ fontSize: FONTSIZE.body, fontWeight: FONTWEIGHT.medium }}>Non Fiction</Text>
            </Pressable>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', gap: SPACING.sm }}>
            <Pressable style={{ flex: 1, backgroundColor: COLORS.light2, borderRadius: SPACING.sm, alignItems: 'center', justifyContent: 'center', gap: SPACING.xs }}>
              <Ionicons name="paw-outline" size={24} color={COLORS.accent2} />
              <Text style={{ fontSize: FONTSIZE.body, fontWeight: FONTWEIGHT.medium }}>Children</Text>
            </Pressable>
            <Pressable style={{ flex: 1, backgroundColor: COLORS.light2, borderRadius: SPACING.sm, alignItems: 'center', justifyContent: 'center', gap: SPACING.xs }}>
              <Ionicons name="cafe-outline" size={24} color={COLORS.accent2} />
              <Text style={{ fontSize: FONTSIZE.body, fontWeight: FONTWEIGHT.medium }}>Cooking</Text>
            </Pressable>
            <Pressable style={{ flex: 1, backgroundColor: COLORS.light2, borderRadius: SPACING.sm, alignItems: 'center', justifyContent: 'center', gap: SPACING.xs }}>
              <AntDesign name="hearto" size={24} color={COLORS.accent2} />
              <Text style={{ fontSize: FONTSIZE.body, fontWeight: FONTWEIGHT.medium }}>Romance</Text>
            </Pressable>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', gap: SPACING.sm }}>
            <Pressable style={{ flex: 1, backgroundColor: COLORS.light2, borderRadius: SPACING.sm, alignItems: 'center', justifyContent: 'center', gap: SPACING.xs }}>
              <MaterialCommunityIcons name="handshake-outline" size={24} color={COLORS.accent2} />
              <Text style={{ fontSize: FONTSIZE.body, fontWeight: FONTWEIGHT.medium }}>Self Help</Text>
            </Pressable>
            <Pressable style={{ flex: 1, backgroundColor: COLORS.light2, borderRadius: SPACING.sm, alignItems: 'center', justifyContent: 'center', gap: SPACING.xs }}>
              <AntDesign name="search1" size={24} color={COLORS.accent2} />
              <Text style={{ fontSize: FONTSIZE.body, fontWeight: FONTWEIGHT.medium }}>Detective</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: COLORS.light1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', gap: SPACING.xs,
    paddingVertical: SPACING.md
  },
  container: {
    flexGrow: 1,
    gap: SPACING.xl,
    paddingBottom: "15%"
  },
  title: {
    fontSize: FONTSIZE.title, marginHorizontal: SPACING.lg, fontWeight: FONTWEIGHT.bold, color: COLORS.accent2
  },
  subtitle: {
    fontSize: FONTSIZE.subheading,
    fontWeight: FONTWEIGHT.medium,
    marginHorizontal: SPACING.lg
  },
  search_row: {
    flexDirection: 'row',
    gap: SPACING.sm,
    alignItems: 'center',
    marginHorizontal: SPACING.lg
  },
  sort_button: {
    backgroundColor: COLORS.accent2,
    padding: SPACING.lg,
    borderRadius: SPACING.sm,
    // width:50,height:50,
    alignItems: 'center', justifyContent: 'center'
  },
  cards_container: {
    gap: SPACING.sm
  },
  cards_container: {
    gap: SPACING.sm
  },
  cards_container: {
    gap: SPACING.sm
  },
  sponsored_item: {
    flexDirection: 'row',
    width: WINDOW_SIZE,
    // flex:1,
    // marginHorizontal:SPACING.lg,
    alignSelf: 'center',
    aspectRatio: 2, // 16/8 ... height is half the width
    borderRadius: SPACING.sm,
    overflow: 'hidden',
    backgroundColor: COLORS.light2
  },
  sponsored_item_left: {
    width: WINDOW_SIZE * 0.5,
    // borderTopRightRadius: WINDOW_SIZE,
    // borderBottomRightRadius: WINDOW_SIZE,
    // overflow: 'hidden'
  },
  sponsored_item_right: {
    width: WINDOW_SIZE * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg
    // backgroundColor: 'tomato',
  },
  hottest_deal: {
    gap: SPACING.sm,
    alignSelf: 'center',
    // backgroundColor:'red',
    width: WINDOW_SIZE
  },
  hottest_deal_image_container: {
    aspectRatio: 1,
    borderRadius: SPACING.sm,
    overflow: 'hidden'
  },
  hottest_deal_discount: {
    position: 'absolute',
    top: "3%",
    right: "3%",
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    color: COLORS.dark2,
    backgroundColor: COLORS.light1,
    borderRadius: SPACING.xs,
    fontWeight: FONTWEIGHT.medium
  }
});
