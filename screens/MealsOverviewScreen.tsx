import { StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import MealsList from '../components/MealsList/MealsList';

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

  return (
    <MealsList displayedMeals={displayedMeals} />
  )
}

const styles = StyleSheet.create({
})