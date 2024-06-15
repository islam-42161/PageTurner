import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import ReadMoreText from '../components/ReadMoreText';
import { Feather } from '@expo/vector-icons';
import { COLORS, SPACING, FONTSIZE, FONTWEIGHT, STATUSBAR_HEIGHT } from '../const/theme';
import { Image } from 'expo-image';

const BookDetails = ({ navigation, route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.image}>
            <View style={styles.header}>
              <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.icon}>
                <Feather name="arrow-left" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Feather name="heart" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <Image source={book.cover_front} style={StyleSheet.absoluteFill} />
          </View>
          <View style={styles.tagsContainer}>
            {book.genre_tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.ratingPriceContainer}>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <Feather key={index} name="star" size={20} color={index < book.rating ? COLORS.accent1 : '#CCCCCC'} />
                ))}
              </View>
              <Text style={styles.price}>${book.price}</Text>
            </View>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <ReadMoreText style={styles.description} numberOfLines={3}>
              {book.details}
            </ReadMoreText>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light1,
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT
  },
  main: {
    flexGrow: 1,
    paddingHorizontal: SPACING.lg,
    gap: SPACING.lg,
    padding: SPACING.lg
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute', zIndex: 1
  },
  headerText: {
    fontSize: FONTSIZE.subheading,
    fontWeight: FONTWEIGHT.bold,
    color: COLORS.light2,
  },
  icon: {
    backgroundColor: COLORS.accent2,
    borderRadius: 8,
    padding: SPACING.sm,
    elevation: 5
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden'
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  tag: {
    backgroundColor: COLORS.light2,
    borderRadius: 16,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  tagText: {
    fontSize: FONTSIZE.body,
    color: COLORS.dark2,
  },
  detailsContainer: {
    flex: 1,
    gap: SPACING.sm
  },
  ratingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  price: {
    fontSize: FONTSIZE.title,
    fontWeight: FONTWEIGHT.bold,
    color: COLORS.dark2,
  },
  title: {
    fontSize: FONTSIZE.heading,
    fontWeight: FONTWEIGHT.bold,
    color: COLORS.dark2,
  },
  author: {
    fontSize: FONTSIZE.body,
    color: COLORS.dark1,
  },
  description: {
    fontSize: FONTSIZE.body,
    color: COLORS.dark1,
  },
  button: {
    backgroundColor: COLORS.accent2,
    borderRadius: 8,
    paddingVertical: SPACING.md,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.light1,
    fontSize: FONTSIZE.subheading,
    fontWeight: FONTWEIGHT.bold,
  },
});
