import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface MealDetailsProps {
  duration: number,
  complexity: string,
  affordability: string
}

export default function MealDetails({ duration, complexity, affordability }: MealDetailsProps) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
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