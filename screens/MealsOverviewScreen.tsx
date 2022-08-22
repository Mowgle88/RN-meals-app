import { FlatList, StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

interface renderItemProps {
  item: Meal
}

type MealsOverviewScreenProps = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

export default function MealsOverviewScreen({ route, navigation }: MealsOverviewScreenProps) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryItem = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({
      title: categoryItem!.title,
      headerStyle: { backgroundColor: categoryItem!.color },
      headerTintColor: '#382e24'
    })
  }, [catId, navigation])

  function renderItem(itemData: renderItemProps) {
    const mealItem = itemData.item;

    const mealItemProps = {
      id: mealItem.id,
      title: mealItem.title,
      imageUrl: mealItem.imageUrl,
      duration: mealItem.duration,
      complexity: mealItem.complexity,
      affordability: mealItem.affordability,
    }
    return (
      <MealItem {...mealItemProps} />
    )
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