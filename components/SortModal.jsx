import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, StatusBar, Dimensions } from 'react-native';
import {
    BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { COLORS } from '../const/theme';
const STATUSBAR_HEIGHT = StatusBar.currentHeight
const SortModal = ({sortModalVisible,setSortModalVisible}) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%', "100%"], []);

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
  const onDismiss = useCallback(()=>{
    setSortModalVisible(false)
  },[])
  useEffect(()=>{
if(sortModalVisible){
    handlePresentModalPress()
}else{
handleCloseModalPress()
}
  },[sortModalVisible])
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

  // renders
  return (
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          onDismiss={onDismiss}
          backdropComponent={renderBackdrop}
          handleComponent={()=>null}
          backgroundStyle={{backgroundColor:COLORS.light1,marginTop:STATUSBAR_HEIGHT*1.5}}
        >
          <BottomSheetView style={styles.container}>
          </BottomSheetView>
        </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    flex:1,
    padding:20
  },
});

export default SortModal;