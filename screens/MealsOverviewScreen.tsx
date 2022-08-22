import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Meal from '../models/meal';

interface renderItemProps {
  item: Meal
}

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

export default function MealsOverviewScreen({ route }: Props) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderItem(itemData: renderItemProps) {
    return <View>
      <Text>{itemData.item.title}</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})