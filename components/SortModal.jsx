import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, StatusBar, Dimensions, TextInput, ScrollView, Pressable, TouchableOpacity, Keyboard } from 'react-native';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme';
import { BookFormats, BookGenres } from '../const/data';
const STATUSBAR_HEIGHT = StatusBar.currentHeight

const SortModal = ({ sortModalVisible, setSortModalVisible }) => {
    // ref
    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["100%"], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    const onDismiss = useCallback(() => {
        setSortModalVisible(false)
    }, [])
    useEffect(() => {
        if (sortModalVisible) {
            handlePresentModalPress()
        } else {
            handleCloseModalPress()
        }
    }, [sortModalVisible])
    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedFormats, setSelectedFormats] = useState([]);
    const handleGenreChipPress = useCallback((genre) => {
        setSelectedGenres((prevSelectedGenres) => {
            if (prevSelectedGenres.includes(genre)) {
                return prevSelectedGenres.filter((item) => item !== genre);
            } else {
                return [...prevSelectedGenres, genre];
            }
        });
    }, []);
    // renders
    const renderGenreChips = useCallback(
        (item) => (
            <Text
                style={[
                    styles.chip,
                    selectedGenres.includes(item) ? styles.selectedChip : styles.unselectedChip,
                ]}
                key={item}
                onPress={() => handleGenreChipPress(item)}
            >
                {item}
            </Text>
        ),
        [selectedGenres, handleGenreChipPress]
    );
    const handleFormatChipPress = useCallback((format) => {
        setSelectedFormats((prevSelectedFormats) => {
            if (prevSelectedFormats.includes(format)) {
                return prevSelectedFormats.filter((item) => item !== format);
            } else {
                return [...prevSelectedFormats, format];
            }
        });
    }, []);
    // renders
    const renderFormatChips = useCallback(
        (item) => (
            <Text
                style={[
                    styles.chip,
                    selectedFormats.includes(item) ? styles.selectedChip : styles.unselectedChip,
                ]}
                key={item}
                onPress={() => handleFormatChipPress(item)}
            >
                {item}
            </Text>
        ),
        [selectedFormats, handleFormatChipPress]
    );

    const [showBoughtBooks,setShowBoughtBooks] = useState(false);

    const toggleShowBoughtBooks = useCallback(() => {
        setShowBoughtBooks((prevShowBoughtBooks) => !prevShowBoughtBooks);
      }, []);

const TextSwitchButton = useCallback(()=>(
    <Pressable onPress={toggleShowBoughtBooks} style={{flexDirection:'row',borderRadius:SPACING.sm,overflow:'hidden',borderColor:COLORS.accent2,borderWidth:1}}>
<Text style={{
            paddingHorizontal: SPACING.sm,
            paddingVertical: SPACING.xs,
            fontSize: FONTSIZE.body,
            backgroundColor: showBoughtBooks ? COLORS.accent2 : COLORS.light1,
            color: showBoughtBooks ? COLORS.light1 : COLORS.accent2,
          }}>Yes</Text>
<Text style={{
            paddingHorizontal: SPACING.sm,
            paddingVertical: SPACING.xs,
            fontSize: FONTSIZE.body,
            backgroundColor: !showBoughtBooks ? COLORS.accent2 : COLORS.light1,
            color: !showBoughtBooks ? COLORS.light1 : COLORS.accent2,
          }}>No</Text>
    </Pressable>
),[showBoughtBooks,toggleShowBoughtBooks])






const handleResetPress = useCallback(() => {
    setSelectedGenres([]);
    setSelectedFormats([]);
    setShowBoughtBooks(false);
  }, []);









    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            activeOffsetY={[-20, 20]}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            onDismiss={onDismiss}
            backdropComponent={renderBackdrop}
            handleComponent={() => null}
            style={{ marginTop: STATUSBAR_HEIGHT * 1.5 }}
            backgroundStyle={{ backgroundColor: COLORS.light1 }}
        >
            <Pressable onPress={Keyboard.dismiss} style={styles.container}>
                <View style={styles.sub_container}>

                
                <TextInput style={{ marginHorizontal: SPACING.lg, marginTop: SPACING.lg,paddingHorizontal:SPACING.lg,paddingVertical:SPACING.md,borderRadius:SPACING.sm,borderWidth:1,borderColor:COLORS.accent2 }} placeholder='Sort by name' />
                {/* genres */}
                <View style={{ gap: SPACING.sm }}>
                    <Text style={{ fontSize: FONTSIZE.subheading, fontWeight: FONTWEIGHT.medium, paddingHorizontal:SPACING.lg }}>Genre</Text>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            alignItems: 'center',
                            gap: SPACING.sm,
                            paddingStart: SPACING.lg,
                            paddingEnd: SPACING.lg,
                        }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {[...selectedGenres, ...BookGenres.filter((genre) => !selectedGenres.includes(genre))].map(renderGenreChips)}
                    </ScrollView>
                </View>


                {/* Book Formats */}
                <View style={{ gap: SPACING.sm }}>
                    <Text style={{ fontSize: FONTSIZE.subheading, fontWeight: FONTWEIGHT.medium, paddingHorizontal:SPACING.lg }}>Format</Text>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            alignItems: 'center',
                            gap: SPACING.sm,
                            paddingStart: SPACING.lg,
                            paddingEnd: SPACING.lg,
                        }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {[...selectedFormats, ...BookFormats.filter((btype) => !selectedFormats.includes(btype))].map(renderFormatChips)}
                    </ScrollView>
                </View>
                

                {/* bought books */}
                <View style={{flexDirection:'row',gap:SPACING.lg,justifyContent:'space-between',paddingHorizontal:SPACING.lg}}>
                    <Text style={{fontSize:FONTSIZE.subheading,fontWeight:FONTWEIGHT.medium}}>Show used books</Text>
                {/* switch button */}
                <TextSwitchButton/>
  </View>

  </View>

  {/* bottom buttons */}
  <View style={{flexDirection:'row',gap:SPACING.lg,alignItems:'center',paddingHorizontal:SPACING.lg}}>
    <TouchableOpacity onPress={handleResetPress} style={{flex:1,borderColor:COLORS.accent2,alignItems:'center',justifyContent:'center',padding:SPACING.lg,borderRadius:SPACING.sm,borderWidth:1}}>
        <Text style={{color:COLORS.accent2}}>Reset</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{flex:1,backgroundColor:COLORS.accent2,alignItems:'center',justifyContent:'center',padding:SPACING.lg,borderRadius:SPACING.sm}}>
        <Text style={{color:COLORS.light1}}>Apply</Text>
    </TouchableOpacity>
  </View>
            </Pressable>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: SPACING.lg,
        justifyContent:'space-between',paddingBottom:STATUSBAR_HEIGHT*1.5+SPACING.lg
    },
    sub_container: {
        gap: SPACING.lg,
    },
    chip: {
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.md,
        borderRadius: SPACING.sm,
        fontSize: FONTSIZE.body,
    },
    selectedChip: {
        backgroundColor: COLORS.accent2,
        color: COLORS.light1,
    },
    unselectedChip: {
        backgroundColor: COLORS.light1,
        color: COLORS.accent2,
        borderWidth: 1,
        borderColor: COLORS.accent2,
    },
});

export default SortModal;