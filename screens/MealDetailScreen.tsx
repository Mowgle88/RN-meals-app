import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

export default function MealDetailScreen({ route }: MealDetailScreenProps) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal!.duration}
        complexity={selectedMeal!.complexity}
        affordability={selectedMeal!.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map(ingridient => (
        <Text key={ingridient}>{ingridient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal?.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
})