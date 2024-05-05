import { Dimensions, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme';
import SearchBar from '../components/SearchBar';
import { FontAwesome6 } from '@expo/vector-icons';
import FeaturedCard from '../components/FeaturedCard';
import ContinueReadingCard from '../components/ContinueReadingCard';
import { Image } from 'expo-image';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const { height, width } = Dimensions.get('window')
const feature_card_size = width - (2 * SPACING.lg)
const WINDOW_SIZE = feature_card_size
const continue_card_size = WINDOW_SIZE * 0.8
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PageTurner</Text>
      <View style={styles.search_row}>
        <SearchBar />
        <Pressable style={styles.sort_button}>
          <FontAwesome6 name="sliders" size={FONTSIZE.heading} color={COLORS.light1} />
        </Pressable>
      </View>
      {/* featured */}
      <View style={styles.featured}>
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
      <View style={styles.continue_reading}>
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
      <View style={styles.sponsored}>
        <Text style={styles.subtitle}>Sponsored</Text>
        <View style={styles.sponsored_item}>
          <View style={styles.sponsored_item_left}>
            <View style={{height:WINDOW_SIZE,width:WINDOW_SIZE,borderRadius:(WINDOW_SIZE)/2,left:-WINDOW_SIZE/2,top:-WINDOW_SIZE/4,overflow:'hidden'}}>
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
              <Text style={{ fontWeight: FONTWEIGHT.thin, fontSize: FONTSIZE.caption,textAlign:'right' }}>Mystery & Thrillers 70% Off! (This weekend only)</Text>
              <Pressable style={{ backgroundColor: COLORS.accent2, paddingHorizontal: SPACING.md, paddingVertical: SPACING.sm, borderRadius: SPACING.sm }}>
                <Text style={{color:COLORS.light1,fontWeight:FONTWEIGHT.bold,fontSize:FONTSIZE.caption}}>Go to sale</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light1,
    paddingTop: STATUSBAR_HEIGHT,
    // padding:SPACING.lg,
    gap: SPACING.xl
  },
  title: {
    fontSize: FONTSIZE.title, marginHorizontal: SPACING.lg
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
    borderRadius:SPACING.sm,
    // width:50,height:50,
    alignItems:'center',justifyContent:'center'
  },
  featured: {
    gap: SPACING.sm
  },
  continue_reading: {
    gap: SPACING.sm
  },
  sponsored: {
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
    width:WINDOW_SIZE*0.5,
    // borderTopRightRadius: WINDOW_SIZE,
    // borderBottomRightRadius: WINDOW_SIZE,
    // overflow: 'hidden'
  },
  sponsored_item_right: {
    width:WINDOW_SIZE*0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg
    // backgroundColor: 'tomato',
  },
});
