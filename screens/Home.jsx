import { Dimensions, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme';
import SearchBar from '../components/SearchBar';
import { FontAwesome6 } from '@expo/vector-icons';
import FeaturedCard from '../components/FeaturedCard';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const {height,width} = Dimensions.get('window')
const feature_card_size = width-(2*SPACING.lg)
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.search_row}>
<SearchBar/>
<Pressable style={styles.sort_button}>
<FontAwesome6 name="sliders" size={FONTSIZE.display} color="white" />
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
        contentContainerStyle={{ gap: SPACING.sm,paddingStart:SPACING.lg,paddingEnd:SPACING.lg }}
        // decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        >
<FeaturedCard feature_card_size={feature_card_size} title={'The Alchemist'} sub_title={'A shepherd boy chases a dream that leads him on a magical journey of self-discovery across continents.'} image_front={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} image_back={'https://th.bing.com/th/id/R.3d63870bb7e906f96a56bd450ca54f02?rik=qsyMEp9gYYNGyw&riu=http%3a%2f%2fballisterwriting.com%2fwp-content%2fuploads%2f2018%2f06%2fa-review-of-the-alchemist-back-cover.png&ehk=Nk8yq4EFNvUe1mRRazjtoJEgHyGcBV5MEfaku%2btkH0E%3d&risl=&pid=ImgRaw&r=0'}/>
<FeaturedCard feature_card_size={feature_card_size} title={'The Alchemist'} sub_title={'A shepherd boy chases a dream that leads him on a magical journey of self-discovery across continents.'} image_front={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} image_back={'https://th.bing.com/th/id/R.3d63870bb7e906f96a56bd450ca54f02?rik=qsyMEp9gYYNGyw&riu=http%3a%2f%2fballisterwriting.com%2fwp-content%2fuploads%2f2018%2f06%2fa-review-of-the-alchemist-back-cover.png&ehk=Nk8yq4EFNvUe1mRRazjtoJEgHyGcBV5MEfaku%2btkH0E%3d&risl=&pid=ImgRaw&r=0'}/>
<FeaturedCard feature_card_size={feature_card_size} title={'The Alchemist'} sub_title={'A shepherd boy chases a dream that leads him on a magical journey of self-discovery across continents.'} image_front={'https://th.bing.com/th/id/OIP.bZnbk9__Gt7bTCQfMQ9zGQHaLL?rs=1&pid=ImgDetMain'} image_back={'https://th.bing.com/th/id/R.3d63870bb7e906f96a56bd450ca54f02?rik=qsyMEp9gYYNGyw&riu=http%3a%2f%2fballisterwriting.com%2fwp-content%2fuploads%2f2018%2f06%2fa-review-of-the-alchemist-back-cover.png&ehk=Nk8yq4EFNvUe1mRRazjtoJEgHyGcBV5MEfaku%2btkH0E%3d&risl=&pid=ImgRaw&r=0'}/>
</ScrollView>
</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:STATUSBAR_HEIGHT,
    // padding:SPACING.lg,
    gap:SPACING.xl
  },
  title:{
    fontSize:FONTSIZE.title,marginHorizontal:SPACING.lg
  },
  subtitle:{
    fontSize:FONTSIZE.subheading,
    fontWeight:FONTWEIGHT.medium,
    marginHorizontal:SPACING.lg
  },
  search_row:{
    flexDirection:'row',
    gap:SPACING.sm,
    alignItems:'center',
    marginHorizontal:SPACING.lg
  },
  sort_button:{
    backgroundColor:COLORS.accent2,
    padding:SPACING.sm,
    borderRadius:SPACING.sm
  },
  featured:{
    gap:SPACING.xs
  }
});
