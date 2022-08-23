import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';

interface MealDetailsProps {
  duration: number,
  complexity: string,
  affordability: string,
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>
}

export default function MealDetails({ duration, complexity, affordability, style, textStyle }: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,

  }
})