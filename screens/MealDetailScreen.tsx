import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

export default function MealDetailScreen({ route }: MealDetailScreenProps) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>This is the Meal Detail screen ({mealId})</Text>
    </View>
  )
}

const styles = StyleSheet.create({})