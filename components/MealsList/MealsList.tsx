import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Meal from '../../models/meal';
import MealItem from './MealItem';

interface MealsListProps {
  displayedMeals: Meal[]
}

interface renderItemProps {
  item: Meal
}

export default function MealsList({ displayedMeals }: MealsListProps) {

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