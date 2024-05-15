import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceRangeSelector = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </Text>
      <MultiSlider
        values={priceRange}
        sliderLength={300}
        onValuesChange={handlePriceRangeChange}
        min={0}
        max={1000}
        step={100}
        allowOverlap
        snapped
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default PriceRangeSelector;