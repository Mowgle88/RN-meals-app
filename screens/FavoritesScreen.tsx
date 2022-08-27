import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
// import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';

export default function FavoritesScreen() {

  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state: RootState) => state.favoritesMeal.ids);
  const dispatch = useDispatch();

  // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealsList displayedMeals={favoriteMeals} />
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#382e24'
  }
})