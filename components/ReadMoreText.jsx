import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const ReadMoreText = ({ children, numberOfLines = 3,style,readMoreStyle}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Pressable onPress={toggleReadMore}>
      <Text style={style} numberOfLines={isExpanded ? undefined : numberOfLines}>
        {children}
      </Text>
        <Text style={{color:'lightgray',...readMoreStyle,...style}}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
    </Pressable>
  );
};
export default ReadMoreText;
