import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { MEALS } from '../data/dummy-data'

export default function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})